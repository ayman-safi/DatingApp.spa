import { Observable } from 'rxjs';
import { Http, RequestOptions , Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/User';
import {map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders , HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  const httpHeaders = new HttpHeaders()
  .set('Accept', 'application/json');
// let httpParams = new HttpParams()
//  .set('category', category)
// .set('year', year);
// console.log(httpParams.toString());
console.log(httpHeaders.keys());
return this.http.get<User[]>(this.baseUrl + 'users', {
headers: httpHeaders,
// params: httpParams,
responseType: 'json'
});
}

getUser(id): Observable<User> {
  const httpHeaders = new HttpHeaders()
  .set('Accept', 'application/json');
  return this.http.get<User>(this.baseUrl + 'users/' + id , {
    headers: httpHeaders,
    // params: httpParams,
    responseType: 'json'
    });
}
//   return this.http.get(this.baseUrl + 'users')
//   .pipe<User[]>( map( response => response.json()));
// }
// jwt() {
//   let token = localStorage.getItem('token');
//   if (token) {
//     const headers = new Headers({'Authorization' : 'Bearer ' + token});
//     headers.append('Content-Type', 'application/json');
//     return new RequestOptions({headers: headers});
//   }
// }

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
