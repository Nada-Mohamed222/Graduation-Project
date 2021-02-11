import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: 'home', component: HomeComponent }];
@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  imports: [CommonModule],
  // exports:[CommonModule,ReactiveFormsModule,FormsModule]
})
export class RegisterModule {}
