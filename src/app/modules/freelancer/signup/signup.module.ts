import { FreelancerService } from 'src/app/services/freelancer-service/freelancer.service';
import { ExpertiselevelComponent } from './expertiselevel/expertiselevel.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './../../../../app/modules/register/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { LanguagesComponent } from './languages/languages.component';
import { HourlyrateComponent } from './hourlyrate/hourlyrate.component';
import { TitleoverviewComponent } from './titleoverview/titleoverview.component';
import { ProfilephotoComponent } from './profilephoto/profilephoto.component';
import { LocationComponent } from './location/location.component';
import { PhoneComponent } from './phone/phone.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewProfileComponent } from './review-profile/review-profile.component';
import { GuardedRoutesGuard } from 'src/app/services/guard/guarded-routes.guard';


const routes: Routes = [{ path: 'home', component: HomeComponent, canActivate:[GuardedRoutesGuard], data: {
  role: ["Guest"]  }}];
@NgModule({
  declarations: [
    HomeComponent,
    // SharedModule,
    ExpertiseComponent,
    ExpertiselevelComponent,
    GetstartedComponent,
    // EducationComponent,
    // EmploymentComponent,
    LanguagesComponent,
    HourlyrateComponent,
    TitleoverviewComponent,
    ProfilephotoComponent,
    LocationComponent,
    PhoneComponent,
    SidebarComponent,
    ProfileComponent,
    ReviewProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FreelancerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignupModule {}
