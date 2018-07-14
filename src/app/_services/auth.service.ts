import { RegisterComponent } from './../register/register.component';
import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers , Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { throwError } from '../../../node_modules/rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'http://localhost:50913/api/auth/';
userToken: any;

constructor(private http: Http, public jwtHelper: JwtHelperService) {

 }
login(model: any) { // nav component
  return this.http.post(this.baseUrl + 'login', model , this.requestOption()).pipe( map( (response: Response) => {
    const user = response.json();
    if (user && user.tokenString) {
    localStorage.setItem('token', user.tokenString);
  }
}), catchError(this.handlerError));
}
register(model: any) {
  return this.http.post(this.baseUrl + 'register', model , this.requestOption()).pipe(catchError(this.handlerError));
}


 loggedIn() {
   return this.jwtHelper.isTokenExpired() ;
 }

private requestOption() {
  const headers = new Headers({ 'Content-type': 'application/json' });
  return new RequestOptions({headers : headers});
}
// the error handler
private handlerError(error: any) {
 const applicationError = error.headers.get('Application-Error');
 if (applicationError) {
  return throwError (applicationError);
 }
 const serverError = error.json();
 let modelStateErrors = '';
 if (serverError) {
   for (const key in serverError) {
     if (serverError[key]) {
       modelStateErrors += serverError[key] + '\n';
     }
   }
 }
 return throwError(
  modelStateErrors || 'Server error'
);
}
}
