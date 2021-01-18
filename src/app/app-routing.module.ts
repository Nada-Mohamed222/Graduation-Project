import { LoginComponent } from './modules/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'freelancer',
  loadChildren:() => import('../app/modules/freelancer/freelancer.module').then(m=>m.FreelancerModule)},
  {path:'signup',
  loadChildren:() => import('../app/modules/freelancer/signup/signup.module').then(m=>m.SignupModule)},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
