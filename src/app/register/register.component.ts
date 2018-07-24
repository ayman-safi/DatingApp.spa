import { AuthService } from '../_services/auth.service';
import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {} ;

@Output() cancelRegister = new EventEmitter(); // output part 1 /4
  constructor(private auth: AuthService , private alertify: AlertifyService) { }

  ngOnInit() {
  }
register() {
  this.auth.register(this.model).subscribe(() => {
    this.alertify.success('registration is succssful !');
}
, error => {
  this.alertify.error(error);
    }
  );
}
cancel() {
  this.cancelRegister.emit(false); // output part2/4
}
}
