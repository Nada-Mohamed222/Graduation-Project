import { Router } from '@angular/router';
import { Job } from './../../../../models/job';
import { JobPost } from '../../../../services/job-service/job-post.service';
import { SharingDataService } from './../../shared/services/sharing-data.service';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  constructor(
    private _sharingData: SharingDataService,
    private router: Router,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    console.log(this.startData.jobName);
  }

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

      return 'Fixed Price';
    }
  }

  checkPrice() {
    if (this.budgetData.payment === 'Hourly') {
      return this.pricingData.hourlyPrice;
    }
    if (this.budgetData.payment === 'Fixed price') {
      return this.fixedPricingData.price;
    }
  }

  paymentType = this.checkType();
  price = this.checkPrice();

  //post job data

  postJob() {
    const _postJobService = this.injector.get(JobPost);
    let start = this.startData;
    let details = this.detailsData;

    let job = new Job(
      start.jobName,
      start.category,
      start.description,
      details.projectType,
      details.skillsNeed,
      details.experienceLevel,
      this.paymentType,
      this.price,
      1
    );

    _postJobService.postJob(job).subscribe(
      (response) => {
        this.router.navigateByUrl('/profile/jobs');
        console.log(job);
        console.log('Done');
        console.log(response);
      },
      (error) => {
        console.log('ايرور يختاااااااااي');
        console.log(error);
        console.log(job);
      }
    );
  }
}
