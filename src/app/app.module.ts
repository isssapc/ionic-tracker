import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { UsuarioProvider } from '../providers/usuario/usuario';
//import { HomePage } from '../pages/home/home';

//firebase
import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { firebaseConfig } from "../config/firebase.config";

//mientras se corrige
/* import { FirebaseApp } from '@firebase/app-types';
import { FirebaseAuth } from '@firebase/auth-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseMessaging } from '@firebase/messaging-types';
import { FirebaseStorage } from '@firebase/storage-types';
import { FirebaseFirestore } from '@firebase/firestore-types';
 */
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFirestoreModule
    AngularFireDatabaseModule,
    //AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider
  ]
})
export class AppModule {}
