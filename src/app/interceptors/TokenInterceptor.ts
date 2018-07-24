import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { Observable } from '../../../node_modules/rxjs';


@Injectable()
export class TokenInterceptor {

  constructor(public auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.auth.getToken(),
      }
    });

    return next.handle(req);
  }
}
