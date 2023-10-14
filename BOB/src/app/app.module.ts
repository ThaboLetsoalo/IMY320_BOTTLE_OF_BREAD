import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase,provideDatabase } from '@angular/fire/database';
import { getStorage,provideStorage } from '@angular/fire/storage';
import { getRemoteConfig,provideRemoteConfig } from '@angular/fire/remote-config';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    provideRemoteConfig(() => getRemoteConfig()),
    provideAuth(() => {
      const auth = getAuth();
      return auth;
    }),
    provideFirestore(() => {
      let firestore: Firestore = getFirestore();
      return firestore;
    }),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => {
      const database = getDatabase();
      return database;
    }),
    provideStorage(() => {
      const storage = getStorage();
      return storage;
    }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestore],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
