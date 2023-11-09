import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingCardAddComponent } from './booking/booking-card-add/booking-card-add.component';
import { BookingConfirmComponent } from './booking/booking-confirm/booking-confirm.component';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { BookingPaymentComponent } from './booking/booking-payment/booking-payment.component';
import { BookingTimeComponent } from './booking/booking-time/booking-time.component';
import { BookingComponent } from './booking/booking.component';
import { ConsentFormComponent } from './booking/consent-form/consent-form.component';
import { ClientConsantFormComponent } from './client-consant-form/client-consant-form.component';
import { ViewBookingComponent } from './booking/view-booking/view-booking.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { InkzerDetailsComponent } from './inkzer-details/inkzer-details.component';
import { BecomeInkzerComponent } from './inkzers/become-inkzer/become-inkzer.component';
import { InkzersComponent } from './inkzers/inkzers.component';
import { AddCardComponent } from './inkzers/profile/add-card/add-card.component';
import { ProfileComponent } from './inkzers/profile/profile.component';
import { SaveInkzerComponent } from './inkzers/save-inkzer/save-inkzer.component';
import { MessageComponent } from './message/message.component';
import { PagesComponent } from './pages.component';
import { InvoiceComponent } from './payment/invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RatingReviewSubmitComponent } from './rating-review-submit/rating-review-submit.component';
import { RatingReviewComponent } from './rating-review/rating-review.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { ServiceComponent } from './service/service.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { UploadConsantComponent } from '../pages/upload-consant/upload-consant.component';
import { IndexComponent } from '../main/index/index.component';
import { BookingRescheduleComponent } from './booking/view-booking/booking-reschedule/booking-reschedule.component';
import { RemainingPaymentComponent } from './booking/remaining-payment/remaining-payment.component';
import { PaymentSuccessComponent } from './booking/remaining-payment/payment-success/payment-success.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'inkzers', component: InkzersComponent },
      { path: 'artist-profile/:id', component: InkzerDetailsComponent },
      { path: 'service/:uuid', component: ServiceComponent },
      { path: 'service-detail/:id', component: ServiceDetailComponent },
      { path: 'my-booking', component: BookingComponent },
      {
        path: 'booking-reschedule/:uuid',
        component: BookingRescheduleComponent,
      },
      { path: 'payment-success', component: PaymentSuccessComponent },
      { path: 'view-booking/:uuid', component: ViewBookingComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'invoice/:uuid', component: InvoiceComponent },
      { path: 'message', component: MessageComponent },
      { path: 'save-inkzer', component: SaveInkzerComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add-card', component: AddCardComponent },
      { path: 'cancellation-policy', component: CancellationPolicyComponent },
      { path: 'terms-conditions', component: TermsConditionsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'rating-review/:artist_id', component: RatingReviewComponent },
      { path: 'rating-review-submit', component: RatingReviewSubmitComponent },
      { path: 'booking-details/:uuid', component: BookingDetailsComponent },
      { path: 'consent-form', component: ConsentFormComponent },
      { path: 'Inkzers-list', component: BecomeInkzerComponent },
      { path: 'booking-time', component: BookingTimeComponent },
      { path: 'booking-payment', component: BookingPaymentComponent },
      { path: 'remaining-payment/:uuid', component: RemainingPaymentComponent },
      { path: 'booking-card-add', component: BookingCardAddComponent },
      { path: 'booking-confirm', component: BookingConfirmComponent },
      { path: 'upload-form/:uuid', component: UploadConsantComponent },
      {
        path: 'consant-form-details/:uuid',
        component: ClientConsantFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
