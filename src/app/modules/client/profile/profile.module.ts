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

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'jobs', component: JobsComponent, data: { noPanel: true } },
      {
        path: ':jobId/proposals',
        component: ProposalsComponent,
        data: { noPanel: true },
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
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
