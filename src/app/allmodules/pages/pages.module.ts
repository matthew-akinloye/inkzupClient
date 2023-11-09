import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { InkzersComponent } from './inkzers/inkzers.component';
import { InkzerDetailsComponent } from './inkzer-details/inkzer-details.component';
import { DemoMaterialModule } from 'src/app/material-module';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewBookingComponent } from './booking/view-booking/view-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './payment/invoice/invoice.component';
import { MessageComponent } from './message/message.component';
import { SaveInkzerComponent } from './inkzers/save-inkzer/save-inkzer.component';
import { ProfileComponent } from './inkzers/profile/profile.component';
import { AddCardComponent } from './inkzers/profile/add-card/add-card.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { RatingReviewComponent } from './rating-review/rating-review.component';
import { RatingReviewSubmitComponent } from './rating-review-submit/rating-review-submit.component';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { ConsentFormComponent } from './booking/consent-form/consent-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BecomeInkzerComponent } from './inkzers/become-inkzer/become-inkzer.component';
import { BookingTimeComponent } from './booking/booking-time/booking-time.component';
import { IgxTimePickerModule } from 'igniteui-angular';
import { BookingPaymentComponent } from './booking/booking-payment/booking-payment.component';
import { BookingCardAddComponent } from './booking/booking-card-add/booking-card-add.component';
import { BookingConfirmComponent } from './booking/booking-confirm/booking-confirm.component';
import { SuccessComponent } from './success/success.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { DeleteCardComponent } from './inkzers/profile/delete-card/delete-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConsantFormViewComponent } from './booking/view-booking/consant-form-view/consant-form-view.component';
import { NgxStarsModule } from 'ngx-stars';
import { NotFoundComponent } from './not-found/not-found.component';
import { UploadConsantComponent } from './upload-consant/upload-consant.component';
import { ClientConsantFormComponent } from './client-consant-form/client-consant-form.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CancelBookingComponent } from './booking/view-booking/cancel-booking/cancel-booking.component';
import { BookingRescheduleComponent } from './booking/view-booking/booking-reschedule/booking-reschedule.component';
import { RemainingPaymentComponent } from './booking/remaining-payment/remaining-payment.component';
import { PaymentSuccessComponent } from './booking/remaining-payment/payment-success/payment-success.component';
@NgModule({
  declarations: [
    PagesComponent,
    InkzersComponent,
    InkzerDetailsComponent,
    ServiceComponent,
    ServiceDetailComponent,
    BookingComponent,
    ViewBookingComponent,
    PaymentComponent,
    InvoiceComponent,
    MessageComponent,
    SaveInkzerComponent,
    ProfileComponent,
    AddCardComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    CancellationPolicyComponent,
    RatingReviewComponent,
    RatingReviewSubmitComponent,
    BookingDetailsComponent,
    ConsentFormComponent,
    BecomeInkzerComponent,
    BookingTimeComponent,
    BookingPaymentComponent,
    BookingCardAddComponent,
    BookingConfirmComponent,
    SuccessComponent,
    PageLoaderComponent,
    DeleteCardComponent,
    ConsantFormViewComponent,
    NotFoundComponent,
    UploadConsantComponent,
    ClientConsantFormComponent,
    CancelBookingComponent,
    BookingRescheduleComponent,
    RemainingPaymentComponent,
    PaymentSuccessComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxTimePickerModule,
    NgxPaginationModule,
    NgxStarsModule,
    GooglePlaceModule,
  ],

  entryComponents: [DeleteCardComponent],
})
export class PagesModule { }
