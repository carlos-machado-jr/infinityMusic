import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      const authReq = request.clone({
        headers: request.headers.set('x-rapidapi-key', `2822545084mshd6ae3b6b453d229p1df816jsn1833f1ddad57`)
                                .append('x-rapidapi-host', 'deezerdevs-deezer.p.rapidapi.com')
                                .append('useQueryString', 'true')
                                .append('Access-Control-Allow-Origin', 'http://localhost:8100/')
                                .append('Access-Control-Allow-Methods', 'POST, GET')
                                .append('Access-Control-Allow-Headers', '*')
                                .append('Access-Control-Max-Age', '86400')
                                // .append('access_token', 'fr6jomAHhH6HzxxBfsgLM7mhNFfkx2apbtw4AEIxDV3gWFNeMA8')
                                
      });
      return next.handle(authReq);
    
    
  }
}
export const HeadersInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeadersInterceptor,
  multi: true,
};