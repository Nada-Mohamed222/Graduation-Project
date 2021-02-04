import { SharingDataService } from './../../shared/services/sharing-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  constructor(private _sharingData: SharingDataService) {}

  ngOnInit(): void {}

  startData = this._sharingData.getStartData();
  detailsData = this._sharingData.getDetailsData();
  budgetData = this._sharingData.getBudgetData();
  pricingData = this._sharingData.getPricingData();
  fixedPricingData = this._sharingData.getFixedPriceData();

  dutationTitle: string = '';
  projectDuration: string = '';

  checkType() {
    if (this.budgetData.payment === 'Hourly') {
      this.dutationTitle = 'Project Duration';
      this.projectDuration = this.pricingData.projectDuration;
      return 'Hourly';
    }
    if (this.budgetData.payment === 'Fixed price') {
      this.dutationTitle = '';
      this.projectDuration = '';

      return 'Fixed price';
    }
  }

  pricetype = this.checkType();

  checkPrice() {
    if (this.budgetData.payment === 'Hourly') {
      return this.pricingData.hourlyPrice;
    }
    if (this.budgetData.payment === 'Fixed price') {
      return this.fixedPricingData.price;
    }
  }
  price = this.checkPrice();
}
