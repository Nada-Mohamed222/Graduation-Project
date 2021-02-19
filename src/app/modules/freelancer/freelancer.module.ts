import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewProfileComponent } from './signup/review-profile/review-profile.component';
import { ProfileComponent } from './signup/profile/profile.component';
import { PhoneComponent } from './signup/phone/phone.component';
import { LocationComponent } from './signup/location/location.component';
import { TitleoverviewComponent } from './signup/titleoverview/titleoverview.component';
import { ExpertiseComponent } from './signup/expertise/expertise.component';
import { GetstartedComponent } from './signup/getstarted/getstarted.component';
// import { HomeComponent } from './../../shared/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiselevelComponent } from './signup/expertiselevel/expertiselevel.component';
import { EducationComponent } from './signup/education/education.component';
import { EmploymentComponent } from './signup/employment/employment.component';
import { LanguagesComponent } from './signup/languages/languages.component';
import { HourlyrateComponent } from './signup/hourlyrate/hourlyrate.component';
import { ProfilephotoComponent } from './signup/profilephoto/profilephoto.component';
import { MyProposalsComponent } from './my-proposals/my-proposals.component';
import { GuardedRoutesGuard } from 'src/app/services/guard/guarded-routes.guard';

const routes: Routes = [
  // {path:'home',component:HomeComponent},
  { path: 'getstarted', component: GetstartedComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'expertise', component: ExpertiseComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'expertiselevel', component: ExpertiselevelComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'education', component: EducationComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'employment', component: EmploymentComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'languages', component: LanguagesComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'hourlyrate', component: HourlyrateComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'titleoverview', component: TitleoverviewComponent , canActivate:[GuardedRoutesGuard]},
  { path: 'profilephoto', component: ProfilephotoComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'location', component: LocationComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'phone', component: PhoneComponent, canActivate:[GuardedRoutesGuard] },
  { path: 'reviewprofile', component: ReviewProfileComponent, canActivate:[GuardedRoutesGuard]  },
  { path: 'profile', component: ProfileComponent, canActivate:[GuardedRoutesGuard] },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FreelancerModule {}
