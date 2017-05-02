import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from "../home/home.page";
import { ViewController, NavParams } from 'ionic-angular';

 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { 
    firstname: '', 
    lastname: '', 
    address1: '', 
    address2: '', 
    city: '', 
    country: '', 
    tel: '', 
    email: '', 
    password: '' 
  };
 
  constructor(private viewCtrl: ViewController, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
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
              // this.nav.popToRoot();
              // this.nav.setRoot(HomePage);
              this.viewCtrl.dismiss(1);
            }
          }
        }
      ]
    });
    alert.present();
  }

  close() {
		this.viewCtrl.dismiss();
	}
}