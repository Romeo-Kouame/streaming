import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlansComponent } from './plans/plans.component';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqsComponent } from './faqs/faqs.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegistrationSuccessComponent } from './auth/registration-success/registration-success.component';
import { SendCodeComponent } from './auth/send-code/send-code.component';
import { PaymentComponent } from './auth/payment/payment.component';
import { PayeComponent } from './auth/paye/paye.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registration/success', component: RegistrationSuccessComponent },
  { path: 'send-code', component: SendCodeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'paye', component: PayeComponent },
  { path: 'plans', component: PlansComponent },
]



@NgModule({
  declarations: [
    WebComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PlansComponent,
    FaqsComponent,
    RegisterComponent,
    RegistrationSuccessComponent,
    SendCodeComponent,
    PaymentComponent,
    PayeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    NgbNavModule,
    RouterModule.forChild(routes)
  ],
})
export class WebModule { }
