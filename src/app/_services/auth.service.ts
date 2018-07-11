import { RegisterComponent } from './../register/register.component';
import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers , Response } from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'http://localhost:50913/api/auth/';
userToken: any;
constructor(private http: Http) {

 }
login(model: any) { // nav component
  return this.http.post(this.baseUrl + 'login', model , this.requestOption()).pipe( map( (response: Response) => {
    const user = response.json();
    if (user && user.tokenString) {
    localStorage.setItem('token', user.tokenString);
  }
}));
}
register(model: any) {
  return this.http.post(this.baseUrl + 'register', model , this.requestOption());
}
private requestOption() {
  const headers = new Headers({ 'Content-type': 'application/json' });
  return new RequestOptions({headers : headers});
}
}
