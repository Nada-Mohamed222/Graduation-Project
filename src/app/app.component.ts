import { Component, ViewChild, AfterViewInit } from '@angular/core'; 
import { HomeComponent } from './../../src/app/modules/register/home/home.component';
import { SpinnerService } from './services/loader/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(public spinnerService: SpinnerService){
    
  }
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
