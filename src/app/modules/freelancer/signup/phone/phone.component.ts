import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  formGroup: FormGroup;
  completedData: any;
  constructor(private _formBuilder: FormBuilder, private _sharingData: SharingDataService, private router: Router) { }

  ngOnInit(): void {
    this.completedData = this._sharingData.isEligible;
    if (!this._sharingData.isEligible.phone) {
      this.router.navigateByUrl('/freelancer/location');
    }
    this.formGroup = this._formBuilder.group({
      Phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
    })
  }

  //setting Phone from data
  storeData() {
    const phone = {
      phone: this.formGroup.controls['Phone'].value,
    };
    this._sharingData.setPhoneData(phone);
    console.log(phone);
  }
}