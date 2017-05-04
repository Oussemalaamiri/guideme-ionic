import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventTagPage} from '../event-tag/event-tag';
import {EventCategoriesPage} from '../event-categories/event-categories';
import {EventsPage} from '../events/events';
import {InterestsPage} from '../interests/interests';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  //tagPage : EventTagPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  goToTag() {
    this.navCtrl.push(EventTagPage);
  }
  goToCat() {
    this.navCtrl.push(EventCategoriesPage);
  }
  goToEvent() {
    this.navCtrl.push(EventsPage);
  }
  goToInterests(){
    this.navCtrl.push(InterestsPage);
  }

}
