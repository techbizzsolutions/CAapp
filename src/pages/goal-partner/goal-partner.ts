import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-goal-partner',
  templateUrl: 'goal-partner.html',
})
export class GoalPartnerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openpage(id)
  {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalPartnerPage');
  }

}
