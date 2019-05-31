import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  otp:any;
  user:any;
  constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.user = JSON.parse(localStorage.getItem('user')) ;
    console.log('ionViewDidLoad OtpPage',this.user.Username);
  }

  resendOtp()
  {
      
  }

  
  verifyOtp()
  {
    if(this.otp)
    {
      this.user.isverified = true;
      localStorage.setItem('user', JSON.stringify( this.user));
      this.events.publish('user:loggedIn');
      this.navCtrl.setRoot('MyaccountPage');
    }
    else{
       
    }
  }

  editnumber()
  {
    this.navCtrl.setRoot(LoginPage);
  }
}
