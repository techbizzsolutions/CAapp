import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-mftransection',
  templateUrl: 'mftransection.html',
})
export class MftransectionPage {
  mf:any=[{
    id:'1',
    name:'Invest',
    selected:false,
    total:0
  },
  {
    id:'2',
    name:'SIP',
    selected:false,
    total:0
  },
  {
    id:'3',
    name:'Lumpsum',
    selected:false,
    total:0
  },
  {
    id:'4',
    name:'Tax Saver',
    selected:false,
    total:0
  },
  {
    id:'5',
    name:'Liquid Funds',
    selected:false,
    total:0
  },
  {
    id:'6',
    name:'Redumption',
    selected:false,
    total:0
  }
];
note:any;
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder, public navParams: NavParams) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MftransectionPage');
  }

}
