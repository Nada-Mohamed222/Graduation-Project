import { LoginComponent } from './modules/register/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './modules/components/job-details/job-details.component';

const routes: Routes = [
  {path:'freelancer',
  loadChildren:() => import('../app/modules/freelancer/freelancer.module').then(m=>m.FreelancerModule)},
  {path:'signup',
  loadChildren:() => import('../app/modules/freelancer/signup/signup.module').then(m=>m.SignupModule)},
  {path:'login',component:LoginComponent},
  {path:'job',component:JobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
