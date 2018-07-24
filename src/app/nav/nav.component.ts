import { AuthService } from '../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Route, Router } from '@angular/router';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
user: User ;
  constructor(private authService: AuthService , private alertify: AlertifyService , private router: Router) { }

  ngOnInit() {
    console.log(this.loggedIn());
  }
  login() {
    this.authService.login(this.model).subscribe(data => {
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error('failed to login');
    }, () => {
      this.router.navigate(['/members']);
    }
    );
  }
  logout() {
    this.authService.userToken = null ;
    localStorage.removeItem('token');
    this.alertify.success('logged out ');
    this.router.navigate(['/home']);
  }
  loggedIn() {
    return this.authService.loggedIn();
    // const token = localStorage.getItem('token');
    // return !! token; // (!!) convert to boolen if it is empty return false otherwise true
  }
}
