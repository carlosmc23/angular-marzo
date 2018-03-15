import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInyectorService {

  tokenIntercepted;
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token') == null)
      this.tokenIntercepted = 'faketoken';
    else
      this.tokenIntercepted = sessionStorage.getItem('token');
    request = request.clone({
     setHeaders: {
          "auth-access-token": this.tokenIntercepted
        }
      });
      return next.handle(request);
    }

}
