import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService , private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.loadUser();
    // console.log(this.userService.jwt()) ;
  }
loadUser() {
 return this.userService.getUsers().subscribe( ( data: User[] ) => {
    this.users = data;
  }, error => {
    this.alertifyService.error(error);
  }
);
}
}
