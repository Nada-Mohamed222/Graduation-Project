import { ExpertiselevelComponent } from './expertiselevel/expertiselevel.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './../../../shared/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { LanguagesComponent } from './languages/languages.component';
import { HourlyrateComponent } from './hourlyrate/hourlyrate.component';
import { TitleoverviewComponent } from './titleoverview/titleoverview.component';
import { ProfilephotoComponent } from './profilephoto/profilephoto.component';
import { LocationComponent } from './location/location.component';
import { PhoneComponent } from './phone/phone.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';

// import { SharedModule } from 'src/app/shared/shared.module';
// import './polyfills';
// import {HttpClientModule} from '@angular/common/http';
// import {MatNativeDateModule} from '@angular/material/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {DemoMaterialModule} from './expertise/material-module';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


const routes:Routes=[
  // {path:'home',component:HomeComponent}
];
@NgModule({
  declarations: [
    // HomeComponent,
    // SharedModule,
    ExpertiseComponent,
    ExpertiselevelComponent,
    GetstartedComponent, 
    EducationComponent, 
    EmploymentComponent, 
    LanguagesComponent, 
    HourlyrateComponent, 
    TitleoverviewComponent, 
    ProfilephotoComponent, 
    LocationComponent, 
    PhoneComponent,
    SidebarComponent,
    ProfileComponent
    // FormsModule,
    // ReactiveFormsModule
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),ReactiveFormsModule,FormsModule]
    // BrowserModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    // DemoMaterialModule,
    // MatNativeDateModule,
  
  // entryComponents: [ExpertiseComponent],
  // providers: [
  //   { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  // ]
})
export class SignupModule { }
