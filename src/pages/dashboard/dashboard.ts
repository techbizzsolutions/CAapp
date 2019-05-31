import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  tab1Root:any = 'HomePage';
  tab2Root:any = 'MyDocPage';
  tab3Root:any = 'ReferUsPage';
  tab4Root:any = 'GoalPartnerPage';
  tab5Root:any = 'TrackRequestPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
