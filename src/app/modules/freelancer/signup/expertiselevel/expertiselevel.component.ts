import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-expertiselevel',
  templateUrl: './expertiselevel.component.html',
  styleUrls: ['./expertiselevel.component.css']
})
export class ExpertiselevelComponent implements OnInit {
  formGroup: FormGroup;
  completedData: any;
  constructor(private _formBuilder: FormBuilder, private _sharingData: SharingDataService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("Sign Up - Expertise Level");
  }

  ngOnInit(): void {
    const expertiseLevelData: any = this._sharingData.getExpertiseLevelData();
    if (!this._sharingData.isEligible.expertiseLevel) {
      this.router.navigateByUrl('/freelancer/expertise');
    }
    this.completedData = this._sharingData.isEligible;
    this.formGroup = this._formBuilder.group({
      ExpertiseLevel: [expertiseLevelData.expertiseLevel, [Validators.required]],
    })
    console.log(this.formGroup.controls['ExpertiseLevel'].value)
  }
  //setting expertiselevel from data
  storeData() {
    const expertiseLevel = {
      expertiseLevel: this.formGroup.controls['ExpertiseLevel'].value,
    };
    this._sharingData.setExpertiseLevelData(expertiseLevel);
  }

}