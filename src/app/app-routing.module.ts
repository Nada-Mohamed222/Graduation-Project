import { ErrorComponent } from './modules/components/error/error.component';
import { ProposeComponent } from './modules/components/propose/propose.component';
import { UpworkLandingPageComponent } from './modules/components/upwork-landing-page/upwork-landing-page.component';
import { ViewProfileComponent } from './modules/components/view-profile/view-profile.component';
import { ProfileComponent } from './modules/freelancer/signup/profile/profile.component';
import { LoginComponent } from './../app/modules/register/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './modules/components/job-details/job-details.component';
import { MyProposalsComponent } from './modules/freelancer/my-proposals/my-proposals.component';

const routes: Routes = [
  {
    path: 'post-job',
    loadChildren: () =>
      import('./modules/client/post-job/post-job.module').then(
        (m) => m.PostJobModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../app/modules/client/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'freelancer',
    loadChildren: () =>
      import('../app/modules/freelancer/freelancer.module').then(
        (m) => m.FreelancerModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('../app/modules/freelancer/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'job/search/:skill',
    component: ProfileComponent,
    pathMatch: 'full',
    data: { search: true },
  },
  { path: 'job/:id', component: JobDetailsComponent, pathMatch: 'full' },
  {
    path: 'freelancer',
    loadChildren: () =>
      import('../app/modules/freelancer/freelancer.module').then(
        (m) => m.FreelancerModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('../app/modules/freelancer/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'job/search/:skill',
    component: ProfileComponent,
    pathMatch: 'full',
    data: { search: true },
  },
  { path: 'job/:id', component: JobDetailsComponent, pathMatch: 'full' },
  { path: 'job/:id/apply', component: ProposeComponent, pathMatch: 'full' },
  {
    path: 'freelancer/my-proposals',
    component: MyProposalsComponent,
    pathMatch: 'full',
  },
  {
    path: 'freelancer/:username',
    component: ViewProfileComponent,
    pathMatch: 'full',
  },
  {path:'', component:UpworkLandingPageComponent},
  {path:'**', component:ErrorComponent},
  {path:'error-404', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
