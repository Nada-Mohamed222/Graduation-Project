// import { GuardedRoutesGuard } from './services/guard/guarded-routes.guard';
import { InterceptorService } from './services/interceptor/interceptor.service';
// import { AuthInterceptorsService } from './services/auth-service/auth-interceptors.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './../app/modules/register/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobDetailsComponent } from './modules/components/job-details/job-details.component';
import { ViewProfileComponent } from './modules/components/view-profile/view-profile.component';
// import { SignupModule } from './modules/freelancer/signup/signup.module';

import { ProposeComponent } from './modules/components/propose/propose.component';
import { MyProposalsComponent } from './modules/freelancer/my-proposals/my-proposals.component';
import { PostJobModule } from './modules/client/post-job/post-job.module';
import { UpworkLandingPageComponent } from './modules/components/upwork-landing-page/upwork-landing-page.component';
import { ErrorComponent } from './modules/components/error/error.component';
import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  ModalModule,
} from 'angular-bootstrap-md';
import { FreelancerJobsComponent } from './modules/components/freelancer-jobs/freelancer-jobs.component';
import { SomeTextPipe } from './modules/client/shared/pipes/some-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    // HomeComponent,
    LoginComponent,
    JobDetailsComponent,
    ViewProfileComponent,
    ProposeComponent,
    MyProposalsComponent,
    UpworkLandingPageComponent,
    ErrorComponent,
    FreelancerJobsComponent,
    SomeTextPipe

    // SignupModule
  ],
  imports: [
    ModalModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    PostJobModule,
    // SignupModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    // GuardedRoutesGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
