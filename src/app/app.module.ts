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
<<<<<<< HEAD
=======
import { ViewProfileComponent } from './modules/components/view-profile/view-profile.component';
// import { SignupModule } from './modules/freelancer/signup/signup.module';

>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8

import { PostJobModule } from './modules/client/post-job/post-job.module';
import { ProposeComponent } from './modules/components/propose/propose.component';
import { MyProposalsComponent } from "./modules/freelancer/my-proposals/my-proposals.component";

@NgModule({
  declarations: [
    AppComponent,

    // SomeTextPipe,
    // SideNavComponent
    // CardComponent,
    // PostJobComponent
    FooterComponent,
    HeaderComponent,
    // HomeComponent,
    LoginComponent,
    JobDetailsComponent,
    ViewProfileComponent,
    ProposeComponent,
    MyProposalsComponent,
    // SignupModule
  ],
  imports: [
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
  // imports: [BrowserModule, AppRoutingModule, PostJobModule, HttpClientModule],
  //   exports: [
  //     SomeTextPipe,
  //  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorsService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
