import { CommonModule } from '@angular/common';
import { ProfileComponent } from './../profile/profile.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './jobs/post/post.component';
import { SliderComponent } from './jobs/slider/slider.component';
import { SomeTextPipe } from './../../../modules/client/shared/pipes/some-text.pipe';
import { ReversePipe } from './../shared/pipes/reverse.pipe';
import { ChipComponent } from './../shared/components/chip/chip.component';
import { ProposalsComponent } from './../profile/proposals/proposals.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProposalCardComponent } from './proposals/proposal-card/proposal-card.component';
import { AcceptedProposalsComponent } from './accepted-proposals/accepted-proposals.component';
import { ConfirmationComponent } from '../shared/components/confirmation/confirmation.component';
import {
  InputsModule,
  ModalModule,
  NavbarModule,
  WavesModule,
} from 'angular-bootstrap-md';
import { GuardedRoutesGuard } from 'src/app/services/guard/guarded-routes.guard';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'jobs',
        component: JobsComponent,
        canActivate: [GuardedRoutesGuard],
        data: { noPanel: true, role: 'Employer' },
      },
      {
        path: ':jobId/proposals',
        component: ProposalsComponent,
        canActivate: [GuardedRoutesGuard],
        data: { noPanel: true, role: 'Employer' },
      },
      {
        // `employer/${localStorage.getItem('UserName')}/active-jobs`
        path: 'accepted-proposals',

        component: AcceptedProposalsComponent,
        canActivate: [GuardedRoutesGuard],
        data: { noPanel: true, role: 'Employer' },
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    PostComponent,
    SliderComponent,
    SomeTextPipe,
    ReversePipe,
    ChipComponent,
    ProposalsComponent,
    JobsComponent,
    ProposalCardComponent,
    AcceptedProposalsComponent,
    ConfirmationComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    InputsModule,
    NavbarModule,
    WavesModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
