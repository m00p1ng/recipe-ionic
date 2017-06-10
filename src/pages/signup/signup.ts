import { AuthService } from './../../services/auth';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  onSignup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signin you up...'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then((data) => {
        loading.dismiss();
      })
      .catch((error) => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed',
          message: error.message,
          buttons: ['OK']
        });
        alert.present();
      });
  }

}
