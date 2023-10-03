import { Injectable } from '@angular/core';
import { IAddSchedule, ISchedule} from '../modals/schedule.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map} from 'rxjs';
import { getAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class SchedulesService {
    constructor(private firestore: AngularFirestore) {}

    async addSchedule(request: IAddSchedule) {
        try {
            const auth = getAuth();
            const currUserId = auth.currentUser?.uid;
            if(currUserId) {
                let docRef =await this.firestore
                .collection(`schedules/${currUserId}/userSchedules`)
                .doc<ISchedule>()
                .set(request.schedule);
                return true;
            }
            throw 'user id not found';
        }catch(error) {
            console.log(error);
            return false;
        }
    }

    getSchedules(userId: string) {
        const auth = getAuth();
        const currUserId = auth.currentUser?.uid;
        const schedulesCollection = this.firestore.collection<ISchedule>(`schedules/${userId}/userSchedules`);
        return schedulesCollection.snapshotChanges().pipe(map((snapshot)=>{
            let schedules: ISchedule[] = [];

            snapshot.forEach(async (doc)=>{
                const schedule = {
                    ...doc.payload.doc.data() as ISchedule,
                    id: doc.payload.doc.id
                }

                schedules.push(schedule);
            })
            return schedules;
        }))
    }
}