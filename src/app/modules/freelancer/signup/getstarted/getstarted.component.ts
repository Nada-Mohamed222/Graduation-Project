import { Title } from '@angular/platform-browser';
import { SharingDataService } from './../sharing-data-service/sharing-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {
  completedData: any;

  constructor(private _sharingData: SharingDataService, private titleService: Title) {
    this.titleService.setTitle("Sign Up - Get Started");
  }

  ngOnInit(): void {
    this.completedData = this._sharingData.isEligible;
  }

}
