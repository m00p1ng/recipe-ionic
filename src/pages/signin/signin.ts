import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AuthService } from './../../services/auth';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Singin you in...',
    });
    loading.present();

    this.authService.signin(form.value.email, form.value.password)
      .then((data) => {
        loading.dismiss();        
      })
      .catch((error) => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: error.message,
          buttons: ['OK']
        });
        alert.present();
        console.log(error);
      });
  }
 
}
