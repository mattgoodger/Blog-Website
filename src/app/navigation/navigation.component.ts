import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { ConfigService } from '../config.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  menu: any;
  isLoggedIn: boolean;
  database = 'menu';
  menuOpen: boolean;
  profileImage: string;
  user: any;

  constructor(private location: Location,
    private auth: AuthenticationService,
    private config: ConfigService) { }

  ngOnInit() {

    this.getMenu(this.database);
    this.menuOpen = false;
    this.isLoggedIn = this.auth.isloggedIn();
    this.getUser();
  }

  ngAfterContentChecked() {
    of(this.auth.isloggedIn()).subscribe(
      () => {
        this.getUser();
      }
    );
  }

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

 getUser() {
   this.user = JSON.parse(localStorage.getItem('currentUser'));

  if (this.user) {
   this.profileImage = this.user.image;
 } else {
   this.profileImage = 'default-user.jpg';
 }
}

}
