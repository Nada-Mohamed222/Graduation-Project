import { SomeTextPipe } from './../modules/client/shared/pipes/some-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SomeTextPipe],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, SomeTextPipe],
  // declarations: [],
  // imports: [CommonModule, ReactiveFormsModule, FormsModule],
  // exports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
