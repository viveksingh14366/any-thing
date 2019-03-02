import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(
    public nav: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    // this.auth.login(this.registerCredentials).subscribe(allowed => {
    //   if (allowed) {
    //     this.nav.setRoot(HomePage);
    //   } else {
    //     this.showError("These credentials do not match our records.");
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //   });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    // alert.present(prompt);
  }


}