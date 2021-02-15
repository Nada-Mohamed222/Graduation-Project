import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './shared/components/confirmation/confirmation.component';
// import { ProfileComponent } from './profile/profile.component';
// // import { HomeComponent } from "./post-job/home/home.component";

// import { Routes, RouterModule } from '@angular/router';
// import { PostComponent } from './profile/post/post.component';
// import { SliderComponent } from './profile/slider/slider.component';
// import { SomeTextPipe } from '../../modules/client/shared/pipes/some-text.pipe';
// import { ReversePipe } from './shared/pipes/reverse.pipe';
// import { ChipComponent } from './shared/components/chip/chip.component';
// import { ProposalsComponent } from './profile/proposals/proposals.component';

// const routes: Routes = [
//   { path: 'profile', component: ProfileComponent },
//   { path: 'proposals', component: ProposalsComponent },
// ];

@NgModule({
  declarations: [
    // HomeComponent,TitleComponent
    // ProfileComponent,
    // PostComponent,
    // SliderComponent,
    // SomeTextPipe,
    // ReversePipe,
    // ChipComponent,
    // ProposalsComponent,
    ConfirmationComponent,
  ],
  imports: [
    CommonModule,
    //  RouterModule.forChild(routes)
  ],

  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule {}
