import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {} ;

@Output() cancelRegister = new EventEmitter(); // output part 1 /4
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
register() {
  this.auth.register(this.model).subscribe(() => {
    console.log('registration is succssful !');
}
, error => {
      console.log(error);
    }
  );
  console.log(this.model);
}
cancel() {
  this.cancelRegister.emit(false); // output part2/4
}
}
