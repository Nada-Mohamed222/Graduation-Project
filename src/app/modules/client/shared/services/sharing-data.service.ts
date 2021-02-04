import { FixedInputComponent } from './../../post-job/budget/fixed-input/fixed-input.component';
import { PricingComponent } from './../../post-job/budget/pricing/pricing.component';
import { BudgetComponent } from './../../post-job/budget/budget.component';
import { DetailsComponent } from './../../post-job/details/details.component';
import { TitleComponent } from './../../post-job/title/title.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  constructor() {}

  start: TitleComponent;
  details: DetailsComponent;
  budget: BudgetComponent;
  pricing: PricingComponent;
  fixedPrice: FixedInputComponent;

  //seting start data
  setStartData(object: any) {
    this.start = object;
  }
  //setting details data
  setDetailsData(object: any) {
    this.details = object;
  }
  //setting budget data
  setBudgetData(object: any) {
    this.budget = object;
  }
  //setting piricng data
  setPricingData(object: any) {
    this.pricing = object;
  }

  //setting piricng data
  setFixedPricData(object: any) {
    this.fixedPrice = object;
  }
  //geting start data
  getStartData() {
    return this.start;
  }
  //geting details data
  getDetailsData() {
    console.log(this.details);
    return this.details;
  }
  //geting budget data
  getBudgetData() {
    console.log(`gettttttttttttttt${this.budget.payment}`);
    return this.budget;
  }
  //getting piricng data
  getPricingData() {
    return this.pricing;
  }
  //getting piricng data
  getFixedPriceData() {
    return this.fixedPrice;
  }
}
