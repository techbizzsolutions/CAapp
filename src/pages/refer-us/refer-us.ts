import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Platform } from 'ionic-angular/platform/platform';


@IonicPage()
@Component({
  selector: 'page-refer-us',
  templateUrl: 'refer-us.html',
})
export class ReferUsPage {
  contactslist = [];
  constructor(public navCtrl: NavController,
    public contacts: Contacts,
    public plt: Platform,
     public navParams: NavParams) {
       if(this.plt.is('cordova'))
       {
        this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
        .then(data => {
          for (var i=0 ; i < data.length; i++){
            if(data[i].displayName !== null && data[i].phoneNumbers && data[i].phoneNumbers[0].value){ 
              var obj = {};
              obj["name"] = data[i].displayName;
              obj["isChecked"] = false;
              obj["number"] = data[i].phoneNumbers[0].value;
              this.contactslist.push(obj)    // adding in separate array with keys: name, number
            }      
           }
           this.contactslist = this.contactslist.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
           });
           console.log(this.contactslist); 
        });
       }
     
  }

  refer()
  {
     console.log(this.contactslist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferUsPage');
  }

}
