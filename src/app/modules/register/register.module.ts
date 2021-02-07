import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomeComponent } from './../../../app/modules/register/home/home.component';
import { LoginComponent } from './../../../app/modules/register/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes:Routes=[
  {path:'home',component:HomeComponent}
];
@NgModule({
  declarations: [LoginComponent,HomeComponent],
  imports: [
    CommonModule
  ],
  // exports:[CommonModule,ReactiveFormsModule,FormsModule]
})
export class RegisterModule { }
