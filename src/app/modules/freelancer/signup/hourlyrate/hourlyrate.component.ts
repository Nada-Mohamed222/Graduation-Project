import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-hourlyrate',
  templateUrl: './hourlyrate.component.html',
  styleUrls: ['./hourlyrate.component.css']
})
export class HourlyrateComponent implements OnInit {

  inputMoney: string = "";
  deductedAmount: string = "";
  formGroup: FormGroup;
  completedData: any;
  constructor(private _formBuilder: FormBuilder, private _sharingData: SharingDataService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("Sign Up - Hourly Rate");
  }

  ngOnInit(): void {
    const HourlyRateData: any = this._sharingData.getHourlyRateData();
    this.inputMoney = HourlyRateData.inputMoney;
    this.deductedAmount = HourlyRateData.deductedAmount;
    this.completedData = this._sharingData.isEligible;
    if (!this._sharingData.isEligible.hourlyRate) {
      this.router.navigateByUrl('/freelancer/languages');
    }
    this.formGroup = this._formBuilder.group({
      HourlyRate: [HourlyRateData.hourlyRate, [Validators.required, Validators.min(5), Validators.pattern(/^\d{1,3}$/)]]
    })
  }
  //setting HourlyRate from data
  storeData() {
    const HourlyRate = {
      hourlyRate: this.formGroup.controls['HourlyRate'].value,
      inputMoney: this.inputMoney,
      deductedAmount: this.deductedAmount
    };
    this._sharingData.setHourlyRateData(HourlyRate);
  }

  totalMoney(serviceFees: number) {
    this.inputMoney = (serviceFees * 0.8).toFixed(2);
    this.deductedAmount = (serviceFees * 0.2).toFixed(2);
  }

}