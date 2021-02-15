import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';




@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[CommonModule,ReactiveFormsModule,FormsModule]
})

export class SharedModule { }
