import { AuthService } from './core/auth/auth.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // tslint:disable-next-line: max-line-length
  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private authService: AuthService, private router: Router) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authState.subscribe(state => {
        if (state === false) {
          // To login page
          this.router.navigate(['login']);
        } else {
          // To home page
          this.router.navigate(['member', 'home']);
        }
      });
    });
  }
}
