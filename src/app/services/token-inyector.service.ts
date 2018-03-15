import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInyectorService {

  constructor() { }

  intercept(request:HttpRequest<any>, next:HttpHandler):
  Observable<HttpEvent<any>>{
    request= request.clone({
      setHeaders:{
        "auth-access-token":"tokenFake"
      }
    });
    return next.handle(request);
  }

}
