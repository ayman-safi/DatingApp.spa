import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode = false;
values: any ;
  constructor(private http: Http) { }

  ngOnInit() {
  }
registerToggle() {
  this.registerMode = true ;
}

cancelRegisterMode(registerMode: boolean) { // part 4
this.registerMode = registerMode;
}
}
