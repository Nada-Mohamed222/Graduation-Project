// import { HomeComponent } from './components/freelancer/post-job/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
