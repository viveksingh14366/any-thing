import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AddItemPage } from '../add-item/add-item';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SignupPage;
  tab3Root = SigninPage;

  constructor() {

  }
}
