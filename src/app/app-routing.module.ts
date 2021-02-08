<<<<<<< HEAD
// import { HomeComponent } from './components/freelancer/post-job/home/home.component';
=======
import { ProfileComponent } from './modules/freelancer/signup/profile/profile.component';
import { LoginComponent } from './../app/modules/register/login/login.component'
>>>>>>> 80810d95dad3b0c51d406ba4f772ecc9f964ceaf
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './modules/components/job-details/job-details.component';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'post-job',
    loadChildren: () =>
      import('./modules/client/post-job/post-job.module').then(
        (m) => m.PostJobModule
      ),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('../app/modules/client/client.module').then((m) => m.ClientModule),
  },
=======
  {path:'freelancer',
  loadChildren:() => import('../app/modules/freelancer/freelancer.module').then(m=>m.FreelancerModule)},
  {path:'signup',
  loadChildren:() => import('../app/modules/freelancer/signup/signup.module').then(m=>m.SignupModule)},
  {path:'login',component:LoginComponent},
  {path:'job/search/:skill',component:ProfileComponent,pathMatch: 'full', data:{search: true}},
  {path:'job/:id',component:JobDetailsComponent,pathMatch: 'full'},
>>>>>>> 80810d95dad3b0c51d406ba4f772ecc9f964ceaf
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
