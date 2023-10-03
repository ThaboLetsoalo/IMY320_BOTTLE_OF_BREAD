import { Timestamp } from "@angular/fire/firestore";

export interface ISchedule {
    id?: string;
    title: string;
    description?: string;
    startDate: Timestamp;
    endDate: Timestamp;
}

export interface IAddSchedule {
    userId?: string;
    schedule: ISchedule;
}