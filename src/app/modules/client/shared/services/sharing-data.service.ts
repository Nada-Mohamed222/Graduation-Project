import { FixedInputComponent } from './../../post-job/budget/fixed-input/fixed-input.component';
import { PricingComponent } from './../../post-job/budget/pricing/pricing.component';
import { BudgetComponent } from './../../post-job/budget/budget.component';
import { DetailsComponent } from './../../post-job/details/details.component';
import { TitleComponent } from '../../post-job/title/title.component';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  constructor() {}

  //strat observable to activate details nav
  isStartDone = new Subject<boolean>();
  //details observable to activate budget nav
  isDetailsDone = new Subject<boolean>();
  //budget observable to activate review nav
  isBudgetDone = new Subject<boolean>();

  // jobId observable
  // jobID = new Subject<string>();
  jobID = new BehaviorSubject<string>(null);
  //freelancer observale
  freelancerUsername = new BehaviorSubject<string>(null);
  //show popup
  showConfirmationPopup = new Subject<boolean>();
  //job Id only for end contract
  jobId = new Subject<string>();
  //freelancer id for end contract
  freelancerId = new Subject<string>();
  //payment type for ending contract in confermation
  paymentType = new Subject<string>();

  // job index observable to end contract (ui purpose)
  deleteContractFlag = new Subject<boolean>();

  // jobStatus observable to update hire ui
  jobStatus = new Subject<string>();

  // instanse of components
  // start: TitleComponent;

  start = { jobName: '', category: 'Front-End Development', description: '' };
  details = {
    projectType: 'One Time',
    skillsNeed: [],
    screeningQuestion: '',
    freelancerNumber: '',
    experienceLevel: 'Entry',
  };
  // details: DetailsComponent;
  budget: BudgetComponent;
  pricing: PricingComponent;
  fixedPrice: FixedInputComponent;

  //seting start data
  setStartData(object: any) {
    this.start = object;
    // this.startObservale.next(object);
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
