import { ReviewProfileComponent } from './signup/review-profile/review-profile.component';
import { ProfileComponent } from './signup/profile/profile.component';
import { PhoneComponent } from './signup/phone/phone.component';
import { LocationComponent } from './signup/location/location.component';
import { TitleoverviewComponent } from './signup/titleoverview/titleoverview.component';
import { ExpertiseComponent } from './signup/expertise/expertise.component';
import { GetstartedComponent } from './signup/getstarted/getstarted.component';
// import { HomeComponent } from './../../shared/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiselevelComponent } from './signup/expertiselevel/expertiselevel.component';
import { EducationComponent } from './signup/education/education.component';
import { EmploymentComponent } from './signup/employment/employment.component';
import { LanguagesComponent } from './signup/languages/languages.component';
import { HourlyrateComponent } from './signup/hourlyrate/hourlyrate.component';
import { ProfilephotoComponent } from './signup/profilephoto/profilephoto.component';

const routes:Routes=[
  // {path:'home',component:HomeComponent},
  {path: 'getstarted',component:GetstartedComponent},
  {path: 'expertise',component:ExpertiseComponent},
  {path: 'expertiselevel',component:ExpertiselevelComponent},
  {path: 'education',component:EducationComponent},
  {path: 'employment',component:EmploymentComponent},
  {path: 'languages',component:LanguagesComponent},
  {path: 'hourlyrate',component:HourlyrateComponent},
  {path: 'titleoverview',component:TitleoverviewComponent},
  {path: 'profilephoto',component:ProfilephotoComponent},
  {path: 'location',component:LocationComponent},
  {path: 'phone',component:PhoneComponent},
  {path: 'reviewprofile',component:ReviewProfileComponent},
  {path: 'profile',component:ProfileComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})

export class FreelancerModule { }
