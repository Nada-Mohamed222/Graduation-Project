import { SharingDataService } from './../../../shared/services/sharing-data.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  pricingForm: FormGroup;

  rangeFrom: string;
  rangeTo: string;
  projectDuration: string;
  hourlyPrice: number;

  @Output() isHourlyVaild = new EventEmitter<boolean>();

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService
  ) {}

  ngOnInit(): void {
    this.pricingForm = this._formBuilder.group({
      //controls validations
      RangeFrom: ['', [Validators.required, Validators.min(1)]],

      ProjectDuration: ['', [Validators.required]],
    });
  }

  //the event emmiting action
  checkIfValid() {
    if (this.pricingForm.valid) {
      console.log(this.pricingForm.valid);
      this.isHourlyVaild.emit(true);
      console.log('hourly' + this.pricingForm.valid);
    } else {
      console.log(this.pricingForm.valid);
      this.isHourlyVaild.emit(false);
      console.log('hourly' + this.pricingForm.valid);
    }
  }

  // settting strat form data
  storeData() {
    // const hourly = `${this.pricingForm.controls['RangeFrom'].value}$ : ${this.pricingForm.controls['RangeTo'].value}$`;
    const hourly = this.pricingForm.controls['RangeFrom'].value;

    const pricing = {
      // rangeFrom: this.pricingForm.controls['RangeFrom'].value,
      // rangeTo: this.pricingForm.controls['RangeTo'].value,
      hourlyPrice: hourly,
      projectDuration: this.pricingForm.controls['ProjectDuration'].value,
    };

    this._sharingData.setPricingData(pricing);
    console.log(pricing);
    console.log(this.pricingForm);
  }

  //event handler
  checkValidationAndStoreData() {
    this.checkIfValid();
    this.storeData();
  }
}
