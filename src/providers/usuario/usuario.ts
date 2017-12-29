import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';


@Injectable()
export class UsuarioProvider {

  constructor(
    //public http: HttpClient,
    private db: AngularFirestore,
    private storage: Storage,
    private platform: Platform
  ) {
    console.log('Hello UsuarioProvider Provider');
  }

  getUsuario(clave: string) {
    //clave = clave.toLowerCase();

    // this.db.collection("usuarios").valueChanges()
    //.subscribe(usuarios=>console.log(usuarios));
    let doc: AngularFirestoreDocument<any>;

    doc = this.db.doc<any>("usuarios/" + clave);
    return doc.valueChanges();
  }

  setClaveInStorage(clave: string) {
    this.setInStorage("clave", clave);
  }

  getClaveFromStorage() {

    console.log("getClaveFromStorage");

    let promesa = new Promise((resolve, reject) => {
      // nos aseguramos que el storage este ready 
      // porque usamos la funcion 
      // al inicio de la aplicación
      this.storage.ready().then(() => {

        console.log("el storage está listo para usarse");

        resolve(this.getFromStorage("clave"));

      });
    });

    return promesa;


  }


  setInStorage(key: string, value: string) {

    if (this.platform.is("cordova")) {

      this.storage.set(key, value);

    } else {
      //escritorio
      localStorage.setItem(key, value);

    }


  }

  getFromStorage(key: string) {

    console.log("getFromStorage");

    let promesa = new Promise((resolve, reject) => {

      if (this.platform.is("cordova")) {

        this.storage.get(key).then(value => {

          resolve(value);

        });

      } else {

        //console.log("valor", localStorage.getItem(key));

        resolve(localStorage.getItem(key));
      }

    });

    return promesa;

  }

}
