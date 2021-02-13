import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  formGroup: FormGroup;
  completedData: any;
  constructor(private _formBuilder: FormBuilder, private _sharingData: SharingDataService, private router: Router) { }

  ngOnInit(): void {
    const locationData: any = this._sharingData.getPhoneData();
    this.completedData = this._sharingData.isEligible;
    if (!this._sharingData.isEligible.location) {
      this.router.navigateByUrl('/freelancer/profilephoto');
    }
    this.formGroup = this._formBuilder.group({
      Location: [locationData.country, [Validators.required]]
    });
  }


  //setting Location from data
  storeData() {
    const location = {
      country: this.formGroup.controls['Location'].value,
    };
    this._sharingData.setLocationData(location);
  }

}
