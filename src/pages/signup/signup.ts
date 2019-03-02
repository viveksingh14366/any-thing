import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  createSuccess = false;
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };

  constructor(
    private nav: NavController,
    private alertCtrl: AlertController
  ) {}

  public register() {
    if (this.registerCredentials.password != this.registerCredentials.confirmation_password) {
      this.showPopup("Error", 'The password confirmation does not match.');
    } else {
    //   this.auth.register(this.registerCredentials).subscribe(success => {
    //     if (success) {
    //       this.createSuccess = true;
    //       this.showPopup("Success", "Account created.");
    //     } else {
    //       this.showPopup("Error", "Problem creating account.");
    //     }
    //   },
    //     error => {
    //       this.showPopup("Error", error);
    //     });
     }
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}