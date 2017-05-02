import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController, Loading, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register/register.page';
import { User } from "../../models/User";
import { HomePage } from "../home/home.page";
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  userInfo = new User()
  registerCredentials = { idemail: '', password: '' };
 
  constructor(
    private menu: MenuController, 
    private nav: NavController, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    private modal: ModalController
    ) { 
    }
 

  ionViewDidEnter() {
    this.menu.swipeEnable(false, 'leftMenu');
  }

  public createAccount() {
    // this.nav.push(RegisterPage);
    let modal = this.modal.create(RegisterPage);
		modal.onDidDismiss(item => {
			if (!item) {
				return;
			}
      this.nav.setRoot(HomePage);
		});
		modal.present();
  }
 
  public login() {
    // if(isNaN(Number(this.registerCredentials.idemail))){
    //     this.showError("Input the valid number")
    //     return
    // }
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot(HomePage);
        console.log(this.auth.getUserInfo());
      } else {
        this.showError("login failed");
      }
    },
      error => {
        this.showError(error);
      });
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
    alert.present(prompt);
  }
}