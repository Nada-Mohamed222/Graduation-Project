import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { ModalModule, InputsModule } from 'angular-bootstrap-md';
// import { ChipComponent } from './shared/components/chip/chip.component';

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
    // ConfirmationComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    InputsModule,
    NavbarModule,
    WavesModule,
    //  RouterModule.forChild(routes)
  ],

  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule {}
