import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-other-services',
  templateUrl: 'other-services.html',
})
export class OtherServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openpage(id)
  {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherServicesPage');
  }

}
