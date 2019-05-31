import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-health-insurrance',
  templateUrl: 'health-insurrance.html',
})
export class HealthInsurrancePage {
  private register: FormGroup;
  amount:any;
  amounts:any = [{
    id:'1',
    name:'100000'
  },
{
  id:'2',
  name:'2090909'
}]
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder, public navParams: NavParams) {
      this.register = this.formBuilder.group({
        adult: ["", Validators.required],
        child :["", Validators.required],
        age: ["", Validators.required],
        note: [""]
      });
  }

  logForm()
  {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MftransectionPage');
  }

}
