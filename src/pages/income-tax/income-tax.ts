import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-income-tax',
  templateUrl: 'income-tax.html',
})
export class IncomeTaxPage {
  selectservice:any;
  services:any = [{
    id:'1',
    name:'service1'
  },
  {
    id:'2',
    name:'service2'
  }];
  selectyear:any;
  years:any = [
    {
      id:'1',
      name:'year1'
    },
    {
      id:'2',
      name:'year2'
    }
  ];
  note:any;
  fileTransfer: FileTransferObject;
  url:any;
  filename:any;
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,private fileChooser: FileChooser,
     public navParams: NavParams) {
  }

  uploadimage()
  {
    this.fileChooser.open()
    .then(uri => 
      {
         console.log(uri);
         this.url = uri;
         this.filename = this.url.substr(this.url.lastIndexOf('/') + 1);
         if(!this.ValidateExtension())
         {
          let toast = this.toastCtrl.create({
            message: 'Please upload files having extension: xlsx only.',
            position: 'top',
            duration: 3000
          });
          toast.present();
          this.url = null;
          this.filename = null;
         }
      }
)
    .catch(e => console.log(e));
  }

ValidateExtension() {
    var allowedFiles = [".xlsx"];
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
    if (!regex.test(this.filename.toLowerCase())) {
        return false;
    }
    return true;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeTaxPage');
  }

}
