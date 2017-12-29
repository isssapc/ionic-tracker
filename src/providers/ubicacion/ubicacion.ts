import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UsuarioProvider } from '../usuario/usuario';


@Injectable()
export class UbicacionProvider {

  usuario: AngularFirestoreDocument<any>;

  constructor(
    private db: AngularFirestore,
    private geolocation: Geolocation,
    private usuarioSrv: UsuarioProvider
  ) {
    console.log('Hello UbicacionProvider Provider');

    this.usuarioSrv.getClaveFromStorage().then(
      clave => {
        this.usuario = this.db.doc<any>("usuarios/" + clave);
      });



  }

  iniciarLocalizacion() {



    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {

      console.log("watch", data);
      this.usuario.update({ lat: data.coords.latitude, lng: data.coords.longitude });

      // data can be a set of coordinates, or an error(if an error occurred).
      // data.coords.latitude
      //data.coords.longitude
    });

  }

}
