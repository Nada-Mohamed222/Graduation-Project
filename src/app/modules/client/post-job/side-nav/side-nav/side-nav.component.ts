import { SharingDataService } from './../../../shared/services/sharing-data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  isStartDone = false;
  isDetailsDone = false;
  isBudgetDone = false;

  constructor(private _sharingData: SharingDataService) {}
  // startSubscription: Subscription;
  // detailsSubscription: Subscription;
  // budgetSubscription: Subscription;

  ngOnInit(): void {
    this._sharingData.isStartDone.subscribe((data) => {
      console.log(`sub value ${data}`);
      this.isStartDone = data;
    });
    this._sharingData.isDetailsDone.subscribe((data) => {
      this.isDetailsDone = data;
      console.log('isDetailsDone ' + data);
    });
    this._sharingData.isBudgetDone.subscribe((data) => {
      this.isBudgetDone = data;
      console.log('isBudgetDone' + data);
    });
  }
}
