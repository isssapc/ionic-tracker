import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { HomePage } from '../pages/home/home';

//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;// = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private usuarioSrv: UsuarioProvider
  ) {

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      this.usuarioSrv.getClaveFromStorage().then(clave => {
        console.log("usuario.getClaveFromStorage", clave);
        if (clave) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = "LoginPage";
        }

        statusBar.styleDefault();
        splashScreen.hide();


      });

    });

  }
}

