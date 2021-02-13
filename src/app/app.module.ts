import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
// import { HomeComponent } from './shared/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './../app/modules/register/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobDetailsComponent } from './modules/components/job-details/job-details.component';
import { ViewProfileComponent } from './modules/components/view-profile/view-profile.component';
// import { SignupModule } from './modules/freelancer/signup/signup.module';
import { PostJobModule } from './modules/client/post-job/post-job.module';
import { ProposeComponent } from './modules/components/propose/propose.component';
import { UpworkLandingPageComponent } from './modules/components/upwork-landing-page/upwork-landing-page.component';

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
    UpworkLandingPageComponent,
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
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
