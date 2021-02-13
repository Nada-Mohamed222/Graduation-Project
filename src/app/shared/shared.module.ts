import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { HeaderUpworkProfileComponent } from './header-upwork-profile/header-upwork-profile.component';




@NgModule({
  declarations: [RatingComponent, HeaderUpworkProfileComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[CommonModule,ReactiveFormsModule,FormsModule]
})

export class SharedModule { }
