import { ProfileComponent } from './modules/freelancer/signup/profile/profile.component';
import { LoginComponent } from './../app/modules/register/login/login.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './modules/components/job-details/job-details.component';

const routes: Routes = [
  {path:'freelancer',
  loadChildren:() => import('../app/modules/freelancer/freelancer.module').then(m=>m.FreelancerModule)},
  {path:'signup',
  loadChildren:() => import('../app/modules/freelancer/signup/signup.module').then(m=>m.SignupModule)},
  {path:'login',component:LoginComponent},
  {path:'job/search/:skill',component:ProfileComponent,pathMatch: 'full', data:{search: true}},
  {path:'job/:id',component:JobDetailsComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
