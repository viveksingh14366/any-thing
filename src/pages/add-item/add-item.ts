import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController, ViewController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';


/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  public title;
  public description;
  public setAlert:boolean=true;
  public dateTime;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view: ViewController, 
              public datePicker: DatePicker) {
  }

  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

  showDate(){
    
    
  }

  showPrompt(){
    console.log('value',this.setAlert)
    if(this.setAlert){
      this.datePicker.show({
        date: new Date(),
        mode: 'datetime',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(
        date => {
          console.log('Got date: ', date)
          console.log()
          this.dateTime=date
        },
        err => console.log('Error occurred while getting date: ', err)
      );

    }

  }
  

}
