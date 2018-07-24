import { AlertifyService } from './../../_services/alertify.service';
import { UserService } from './../../_services/user.service';
import { User } from './../../_models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
user: User ;
  constructor(private userService: UserService ,
              private alertify: AlertifyService ,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.loadUser();
  }
loadUser() {
  this.userService.getUser(this.route.snapshot.params['id']).subscribe((user: User) => {
    this.user = user ;
  }, error => { this.alertify.error(error); }
);
}
}
