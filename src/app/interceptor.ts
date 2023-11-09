import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientService } from './service/client.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(public authService: ClientService, private route: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var method = '';
    var currentUrl = request.url.split('/');
    var currentAPI = currentUrl[currentUrl.length - 1];
    if (
      currentAPI == 'login' ||
      currentAPI == 'sendVerificationtext' ||
      currentAPI == 'getStyleOFwork' ||
      currentAPI == 'getPremadeServices' ||
      currentAPI == 'getBookServices' ||
      currentAPI == 'verifyemail' ||
      currentAPI == 'verifyOtp' ||
      currentAPI == 'createInkzer' ||
      currentAPI == 'setWorkingHour' ||
      currentAPI == 'forgotPassword' ||
      currentAPI == 'sendEmailVerification' ||
      currentAPI == 'socialRegister' ||
      currentAPI == 'getArtistData' ||
      currentAPI == 'addbusinessDetails' ||
      currentAPI == 'getSingleArtistDetails' ||
      currentAPI == 'register' ||
      currentAPI == 'allArtists' ||
      currentAPI == 'getArtistServices' ||
      currentAPI == 'setPassword' ||
      currentAPI == 'resetPassword' ||
      currentAPI == 'createSubscription' ||
      currentAPI == 'socialLogin' ||
      currentAPI == 'addAddress' ||
      currentAPI == 'allSearchArtists' ||
      currentAPI == 'business-hours' ||
      currentAPI == 'getArtistPortfolio' ||
      currentAPI == 'allSearchArtistsData' ||
      currentAPI == 'getServiceDetails' ||
      currentAPI == 'checkDomain' ||
      currentAPI == 'getReviewAddInfo' ||
      currentAPI == 'addRating'
    ) {
      method = 'login';
    }
    this.authService.setHeader(method);
    request = request.clone({
      headers: this.authService.headers,
    });

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            if (event.body) {
              if (event.body.token) {
                // if (event.body.user_type == 1) {

                this.authService.setToken(event.body.token);
                // }
              }
            } else {
              console.log(event.body);
            }
            switch (event.body.status) {
              case '412':
                console.log('i am  getiing 412');
                // this.authService.logout();
                break;
              case '401':
                this.authService.logout();
                // console.log('i am  getiing 409')
                break;
              default:
                // console.log(event.body.status);

                break;
            }
          }
        },
        (error) => {
          if (error.status == 401) {
            this.authService.logout();
          }
          // console.warn(error)
          if (event instanceof HttpErrorResponse) {
            this.route.navigate(['/login']);
          }
        }
      )
    );
  }
}
