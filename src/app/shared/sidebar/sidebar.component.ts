import { SharingDataService } from './../../modules/freelancer/signup/sharing-data-service/sharing-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  completedData: any;

  constructor(private _sharingData: SharingDataService) { }

  ngOnInit(): void {
    this.completedData = this._sharingData.isEligible;
  }

}
