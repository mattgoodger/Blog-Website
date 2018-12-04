import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menu: any;
  isLoggedIn$: Observable<boolean>;
  database = 'menu';
  menuOpen: boolean;

  constructor(private location: Location,
    private auth: AuthenticationService,
    private config: ConfigService) { }

  ngOnInit() {

    this.getMenu(this.database);
    this.menuOpen = false;
  }

  // getActiveTab(tabname: string) {
  //  this.activetab = tabname;
  // }

  getMenu(database) {
    this.config.getSettings(database).subscribe(
      settings => {
        this.menu = settings;
      console.log(settings);
      }
    );
 }


 toggleMenu(state) {

   this.menuOpen = state;
 }



  logout() {
    console.log('Logout works');
    this.auth.logout();

  }

}
