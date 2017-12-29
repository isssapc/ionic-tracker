import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';
//import { AngularFirestore } from 'angularfire2/firestore';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild("slides") slides: Slides;

  clave: string = "rja-1";

  //usuarios:Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //private db:AngularFirestore
    private usuarioSrv: UsuarioProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    //this.db.collection("usuarios").valueChanges()
    //.subscribe(usuarios=>console.log(usuarios));



  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress";
  }

  continuar() {

    console.log("verificar si la clave es valida");

    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    });

    loading.present();

    this.usuarioSrv.getUsuario(this.clave)
      .subscribe(usuario => {
        console.log(this.clave, usuario);
        loading.dismiss();

        if (usuario) {

          this.slides.lockSwipes(false);
          this.slides.slideNext();
          this.slides.lockSwipes(true);

          //guardamos la clave en el storage
          this.usuarioSrv.setInStorage("clave", this.clave);


        } else {

          //no existe el usuario o clave inválida

          this.alertCtrl.create({
            title: "Clave no es correcta",
            subTitle: "Por favor, verifique su clave o hable con el administrador",
            buttons: ["Ok"]
          }).present();
        }

      },
      error => {
        loading.dismiss();
        console.log("ERROR en getUsuario: " + JSON.stringify(error));
      });

  }

  ingresar() {

    console.log("tenemos la clave,ir al home");

    this.navCtrl.setRoot(HomePage);



  }

}
