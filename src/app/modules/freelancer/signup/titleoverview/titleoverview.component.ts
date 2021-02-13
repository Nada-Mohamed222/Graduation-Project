import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-titleoverview',
  templateUrl: './titleoverview.component.html',
  styleUrls: ['./titleoverview.component.css']
})
export class TitleoverviewComponent implements OnInit {

  remaningCharacters: number = 5000;
  formGroup: FormGroup;
  completedData: any;
  constructor(private _formBuilder: FormBuilder, private _sharingData: SharingDataService, private router: Router) { }

  ngOnInit(): void {
    const TitleOverviewData: any = this._sharingData.getTitleOverviewData();
    console.log(TitleOverviewData);

    this.completedData = this._sharingData.isEligible;
    if (!this._sharingData.isEligible.titleOverview) {
      this.router.navigateByUrl('/freelancer/hourlyrate');
    }
    this.formGroup = this._formBuilder.group({
      Title: [TitleOverviewData.title, [Validators.required]],
      ProfessionalOverview: [TitleOverviewData.overview, [Validators.required, Validators.maxLength(5000)]]
    })
  }
  countCharacters(inputChar: string) {
    this.remaningCharacters = 5000 - inputChar.length;
  }

  //setting Title-Overivew from data
  storeData() {
    const titleOverview = {
      title: this.formGroup.controls['Title'].value,
      overview: this.formGroup.controls['ProfessionalOverview'].value,
    };
    this._sharingData.setTitleOverviewData(titleOverview);
    console.log(titleOverview);
  }

}