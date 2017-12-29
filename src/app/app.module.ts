import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { HomePage } from '../pages/home/home';

//firebase
import { AngularFireModule } from 'angularfire2';

//import { AngularFireDatabaseModule } from "angularfire2/database";
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { firebaseConfig } from "../config/firebase.config";


//plugins
import { Geolocation } from '@ionic-native/geolocation';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
    //AngularFireDatabaseModule,
    //AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsuarioProvider,
    UbicacionProvider,
    Geolocation
  ]
})
export class AppModule { }
