import { SomeTextPipe } from './../modules/client/shared/pipes/some-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';




@NgModule({
  declarations: [RatingComponent, SomeTextPipe
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, SomeTextPipe
  ]
})

export class SharedModule { }
