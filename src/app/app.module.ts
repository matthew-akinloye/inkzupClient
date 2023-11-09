import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './allmodules/auth/login/login.component';
import { HeaderComponent } from './allmodules/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HashLocationStrategy,
  LocationStrategy,
  Location,
  PathLocationStrategy,
} from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { NgwWowModule } from 'ngx-wow';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgxPaginationModule } from 'ngx-pagination';

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { Interceptor } from './interceptor';
import { LoaderComponent } from './allmodules/loader/loader.component';
import { AuthModule } from './allmodules/auth/auth.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    NgwWowModule,
    NgOtpInputModule,
    NgxPaginationModule,
    AuthModule,
  ],
  providers: [
    Location,
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '564808505251-87oasag253ou381dln8d04pndsj0i7oe.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('307618951111264'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
