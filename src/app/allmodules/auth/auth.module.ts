import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { VertifyEmailComponent } from './vertify-email/vertify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { DemoMaterialModule } from 'src/app/material-module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AuthLoaderComponent } from './auth-loader/auth-loader.component';
import { SuccessAuthComponent } from './success-auth/success-auth.component';
import { VerifiedEmailComponent } from './verified-email/verified-email.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { LoginSelectComponent } from './login/login-select/login-select.component';
import { ArtistVerifiedComponent } from './artist-verified/artist-verified.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    VertifyEmailComponent,
    ForgotPasswordComponent,
    VerificationCodeComponent,
    ResetPasswordComponent,
    ClientRegisterComponent,
    VerifyPhoneComponent,
    AuthLoaderComponent,
    SuccessAuthComponent,
    VerifiedEmailComponent,
    SetPasswordComponent,
    CongratulationComponent,
    LoginSelectComponent,
    ArtistVerifiedComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    NgOtpInputModule,
  ],
})
export class AuthModule { }
