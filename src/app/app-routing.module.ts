import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegisterComponent } from './allmodules/auth/client-register/client-register.component';
import { ForgotPasswordComponent } from './allmodules/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './allmodules/auth/register/register.component';
import { ResetPasswordComponent } from './allmodules/auth/reset-password/reset-password.component';
import { VerificationCodeComponent } from './allmodules/auth/verification-code/verification-code.component';
import { VerifyPhoneComponent } from './allmodules/auth/verify-phone/verify-phone.component';
import { VertifyEmailComponent } from './allmodules/auth/vertify-email/vertify-email.component';
import { VerifiedEmailComponent } from './allmodules/auth/verified-email/verified-email.component';
import { CongratulationComponent } from './allmodules/auth/congratulation/congratulation.component';
import { SetPasswordComponent } from './allmodules/auth/set-password/set-password.component';
import { HeaderComponent } from './allmodules/layout/header/header.component';
import { InkzerDetailsComponent } from './allmodules/pages/inkzer-details/inkzer-details.component';
import { NotFoundComponent } from './allmodules/pages/not-found/not-found.component';
import { IndexComponent } from './allmodules/main/index/index.component';
import { LoginSelectComponent } from './allmodules/auth/login/login-select/login-select.component';
import { AuthComponent } from './allmodules/auth/auth.component';
import { ArtistVerifiedComponent }  from './allmodules/auth/artist-verified/artist-verified.component';
import { BecomeInkzerComponent } from 'src/app/allmodules/pages/inkzers/become-inkzer/become-inkzer.component';
const routes: Routes = [
  { path: '', component: BecomeInkzerComponent },
  { path: 'home', component: BecomeInkzerComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'booking/:id', component: InkzerDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-code', component: VerificationCodeComponent },

  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'account', component: ClientRegisterComponent },
  { path: 'login-select', component: LoginSelectComponent },
  { path: 'email-verify', component: VertifyEmailComponent },
  { path: 'email-verified/:token', component: VerifiedEmailComponent },
  { path: 'artist_verified', component: ArtistVerifiedComponent },
  { path: 'artist_verified/:token', component: ArtistVerifiedComponent },
  { path: 'phone-verify', component: VerifyPhoneComponent },
  { path: 'resgister-success', component: CongratulationComponent },
  { path: 'set-password', component: SetPasswordComponent },
  { path: 'sidebar', component: HeaderComponent },
  { path: '404', component: NotFoundComponent },
  // {
  //   path: 'Inkzer',
  //   component: RegisterComponent,
  //   children: [{ path: '/register', component: RegisterComponent }],
  // },
  //Wild Card Route for 404 request
  // { path: '**', pathMatch: 'full', component: NotFoundComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./allmodules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./allmodules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./allmodules/pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
