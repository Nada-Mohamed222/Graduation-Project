import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  formGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder,private _sharingData:SharingDataService) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      Phone:['',[Validators.required,Validators.minLength(8),Validators.maxLength(11)]],
    })
  }

  //setting Phone from data
  storeData(){
    const phone = {
      phone: this.formGroup.controls['Phone'].value, 
    };
    this._sharingData.setPhoneData(phone);
    console.log(phone);
  }
}
