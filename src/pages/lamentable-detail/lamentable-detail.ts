import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Clipboard } from '@ionic-native/clipboard';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LamentableDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lamentable-detail',
  templateUrl: 'lamentable-detail.html',
})
export class LamentableDetailPage {
  latitude:number ;
  longitude:number ;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public geolocation: Geolocation,private launchNavigator:LaunchNavigator,
     private clipboard: Clipboard, private emailComposer: EmailComposer,
     private alertCtrl: AlertController, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LamentableDetailPage');
    this.geolocation.getCurrentPosition().then(position =>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },error=>{
      console.log('error',error);
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Iban Copiado',
      buttons: ['Ok']
    });
    alert.present();
  }

  navigateLocation(direccion:string){
    let options: LaunchNavigatorOptions = {
      start:[this.latitude,this.longitude],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    this.launchNavigator.navigate(direccion, options)
    .then(success =>{
      console.log(success);
    },error=>{
      console.log(error);
    })
  }

  public callPhone(phone:string) {
    this.callNumber.callNumber(phone, true)
  }

  public copiarIban(iban:string){
    this.clipboard.copy(iban);
    this.presentAlert();

  }

  public enviarEmail(destinatario:string){
    let email = {
      to: destinatario,
      subject: 'Email App Lamentable',
      body: 'Hola Lamenable',
      isHtml: true
    };
 
    this.emailComposer.open(email);
     
  }
  
}
