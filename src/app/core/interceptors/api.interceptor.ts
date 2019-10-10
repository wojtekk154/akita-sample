import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const HOST = 'https://5d9c78ca66d00400145c993f.mockapi.io';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = request.clone({
      url: HOST + request.url
    });
    return next.handle(newReq);
  }
}
