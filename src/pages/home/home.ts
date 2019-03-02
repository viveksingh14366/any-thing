import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ModalController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public items = [];

  constructor(public navCtrl: NavController,
  			  public modalCtrl: ModalController
  			) {

  }
ionViewDidLoad(){

  }

  addItem(){

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });

    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  deleteTask(task){
  // let index = this.posts.indexOf(post);

  //   if(index > -1){
  //     this.posts.splice(index, 1);
  //   }
   }

}
