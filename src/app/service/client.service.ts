import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  api_url: any;
  base_url: any;
  secretKey: any;
  customHeader: any;
  headers: HttpHeaders = new HttpHeaders();
  body: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private route: Router) {
    this.api_url = environment.api_url;
    this.base_url = environment.base_url;
    this.secretKey = environment.secretKey;
  }

  isLoggeddIn() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  // loginUser(data: any) {
  //   let param = new HttpParams();
  //   param = data;
  //   return this.http.post(this.api_url+'api/admin/login', param)
  // }

  logout() {
    localStorage.removeItem('expiry');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('profile_img');
    localStorage.removeItem('user_type');
    // localStorage.removeItem('url');
    // localStorage.removeItem('rating');
    this.route.navigate(['/login']);
    return this.http.get(this.api_url + 'api/client/logout');
  }

  forcelogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rememberMe');
    this.route.navigate(['/login']);
  }

  setToken(token: any) {
    if (token) {
      localStorage.setItem('token', token);
      this.setRemberToken(token);
    }
  }

  getToken() {
    var token = localStorage.getItem('token');
    if (token) {
      //return 'Bearer '+token;
      return ('Bearer ' + token) as any;
    }
    this.route.navigate(['/login']);
    return;
  }

  setHeader(method = '') {
    if (method == '') {
      this.headers = new HttpHeaders({ Authorization: this.getToken() });
      // console.log('header set', this.headers)
    } else {
      this.headers = new HttpHeaders({
        secretKey: this.secretKey,
        'Access-Control-Allow-Origin': '*',
      });
    }
  }

  setRemberToken(token: any) {
    var rememberMe = localStorage.getItem('rememberMe');
    if (rememberMe) {
      localStorage.setItem('rememberMe', token);
    }
  }

  // register
  registerClient(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/register', param);
  }
  sendVerifyEmail(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/sendEmailVerification',
      param
    );
  }
  sendOtp(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/sendVerificationtext', param);
  }
  verifyOtp(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/verifyOtp', param);
  }
  verifyEmail(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/verifyemail', param);
  }

  verifyEmailartist(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/admin/verifyemail', param);
  }

  //login
  clientLogin(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/login', param);
  }

  SocialLogin(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/socialLogin', param);
  }

  ArtistSocialRegister(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/socialRegister', param);
  }

  forgotPassword(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/forgotPassword', param);
  }
  setPassword(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/setPassword', param);
  }

  resetPassword(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/resetPassword', param);
  }

  //Profile
  getProfile() {
    return this.http.get(this.api_url + 'api/client/profile');
  }

  //checkLogin
  checkLogin() {
    return this.http.get(this.api_url + 'api/client/checkLoginClient');
  }
  editProfile(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/editProfile', param);
  }

  changePassword(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/changePassword', param);
  }

  addCard(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/addCard', param);
  }

  deleteCard(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/removeCard', param);
  }

  //chat messaging
  getMessages() {
    return this.http.get(this.api_url + 'api/chat/getMessages');
  }

  getUserId() {
    return this.http.get(this.api_url + 'api/chat/getUserId');
  }
  sendMessage(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/chat/sendMessage', param);
  }
  getconversation(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/chat/getconversation', param);
  }
  startMessaging(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/chat/startMessaging', param);
  }
  getUnreadMsg() {
    return this.http.get(this.api_url + 'api/client/getUnreadMsg');
  }
}
