import { Component } from '@angular/core';
import { IonicPage,NavController,AlertController,ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {
  private register : FormGroup;
  user:any;
  region:any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public formBuilder: FormBuilder,public alertCtrl: AlertController) {
    this.register = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['',Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])],
      address:['', Validators.required],
      Mobile : ['',Validators.compose([Validators.required, Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$'), Validators.maxLength(15)])]
    });
   
  }

  selectedValue(event)
  {

  }

  logForm()
  {
    console.log(this.register.value);
    this.navCtrl.setRoot(DashboardPage);
  }
}
