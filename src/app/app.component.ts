import { Component, ViewChild, AfterViewInit } from '@angular/core'; 
import { HomeComponent } from './../../src/app/modules/register/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'graduation-project';

  isSignedUp:Boolean = false;

  receiveStatus($event) {
    this.isSignedUp = $event
  }

  @ViewChild(HomeComponent) home;
 
  getStatusFromHome() {
    this.isSignedUp = this.home.isSignedUp
  }
}
