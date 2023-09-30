import { Timestamp } from "@angular/fire/firestore";

export interface IProfile {
  userId:string;
  name: string;
  displayName: string;
  createdAt: Timestamp;
  profileURL: string;
  isStudent: boolean;
  isTutor: boolean;
}