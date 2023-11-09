import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
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

  getAllArtist(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/allArtists', param);
  }
  allSearchArtists(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/allSearchArtists', param);
  }

  allSearchArtistsData(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/allSearchArtistsData',
      param
    );
  }
  //Sigle artist details

  getSingleArtistDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/getSingleArtistDetails',
      param
    );
  }

  getArtistDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getArtistDetails', param);
  }

  getArtistServices(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getArtistServices', param);
  }

  getArtistPortfolios(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/getArtistPortfolio',
      param
    );
  }

  getServiceDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getServiceDetails', param);
  }

  getBookServices(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getBookServices', param);
  }

  saveInkzer(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/saveInkzer', param);
  }

  getSavedInkzer() {
    return this.http.get(this.api_url + 'api/client/getSavedInkzer');
  }

  //Booking
  AddBokingDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/addbookingDetails', param);
  }

  AddBokingTime(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/AddBokingTime', param);
  }

  getBookingSlots(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getBookingSlots', param);
  }
  getbookingDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getbookingDetails', param);
  }
  getUserPayMethod(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getUserDetails', param);
  }
  getStyleOFwork() {
    return this.http.get(this.api_url + 'api/getStyleOFwork');
  }
  saveImgVideo(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/saveImgVideo', param);
  }
  addBooking(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/addBooking', param);
  }
  bookingHistrory() {
    return this.http.get(this.api_url + 'api/client/clientBookingHistory');
  }

  getbookingConsant(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getbookingConsant', param);
  }
  updateConsantForm(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/updateConsantForm', param);
  }
  consantformDetailsClient(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/consantformDetailsClient',
      param
    );
  }

  addRating(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/addRating', param);
  }
  getReviewAddInfo(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/getReviewAddInfo', param);
  }

  clientBookingDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/clientBookingDetails',
      param
    );
  }
  bookingDetailsWithUser(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/bookingDetailsWithUser',
      param
    );
  }
  getRescheduleBookingDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/getRescheduleBookingDetails',
      param
    );
  }
  bookingRemainingPayment(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(
      this.api_url + 'api/client/bookingRemainingPayment',
      param
    );
  }
  cancelBooking(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/cancelBooking', param);
  }
  rescheduleBooking(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/rescheduleBooking', param);
  }
  paymentHistrory() {
    return this.http.get(this.api_url + 'api/client/clientPaymentHistory');
  }
  paymentDetails(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/client/paymentDetails', param);
  }
  checkDomain(data: any) {
    let param = new HttpParams();
    param = data;
    return this.http.post(this.api_url + 'api/checkDomain', param);
  }
}
