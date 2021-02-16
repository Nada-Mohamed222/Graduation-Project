import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { ModalModule,  InputsModule,  } from 'angular-bootstrap-md'

const routes: Routes = [{ path: 'home', component: HomeComponent }];
@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  imports: [    
    ModalModule.forRoot(),
    InputsModule,
    NavbarModule,
    WavesModule,
CommonModule],
  // exports:[CommonModule,ReactiveFormsModule,FormsModule]
})
export class RegisterModule {}
