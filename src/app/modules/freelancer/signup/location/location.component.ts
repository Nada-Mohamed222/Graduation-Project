import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  formGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder,private _sharingData:SharingDataService) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      Location: ['',[Validators.required]]     
    }); 
  }


  //setting Location from data
  storeData(){
    const location = {
      country: this.formGroup.controls['Location'].value,
    };
    this._sharingData.setLocationData(location);
    console.log(location);
  }

}
