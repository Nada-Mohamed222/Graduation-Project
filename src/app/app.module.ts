import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
// import { HomeComponent } from './shared/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobDetailsComponent } from './modules/components/job-details/job-details.component';
// import { SignupModule } from './modules/freelancer/signup/signup.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    // HomeComponent,
    LoginComponent,
    JobDetailsComponent,
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
    NgbModule
    // SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports:[FormsModule,ReactiveFormsModule]
})
export class AppModule { }
