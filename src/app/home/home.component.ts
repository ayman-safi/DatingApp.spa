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
    this.GetValue();
  }
registerToggle() {
  this.registerMode = true ;
}
GetValue() {
  this.http.get('http://localhost:50913/api/values').subscribe( Response => {
    this.values = Response.json();
  });
}
cancelRegisterMode(registerMode: boolean) { // part 4
this.registerMode = registerMode;
}
}
