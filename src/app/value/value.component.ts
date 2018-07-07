import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any ;

  constructor(private http: Http) { }

  ngOnInit() {
    this.GetValue();
  }
  GetValue() {
    this.http.get('http://localhost:5000/api/values').subscribe( Response => {
      this.values = Response.json();
    });
  }
}