import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openpage(page)
  {
    this.navCtrl.push(page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
