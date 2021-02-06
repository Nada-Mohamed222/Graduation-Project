import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostJobModule } from './modules/client/post-job/post-job.module';
import { HttpClientModule } from '@angular/common/http';

// import { CardComponent } from './modules/shared/card/card.component';
// import {ClientModule} from "./modules/client/client.module";
// import { PostJobComponent } from "./modules/client/post-job/post-job.component";
// import { SideNavComponent } from './modules/client/post-job/side-nav/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,

    // SomeTextPipe,
    // SideNavComponent
    // CardComponent,
    // PostJobComponent
  ],
  imports: [BrowserModule, AppRoutingModule, PostJobModule, HttpClientModule],
  //   exports: [
  //     SomeTextPipe,
  //  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
