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
  constructor(private _formBuilder:FormBuilder,private _sharingData:SharingDataService) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      ExpertiseLevel:['',[Validators.required]],
    })
  }
  //setting expertiselevel from data
  storeData(){
    const expertiseLevel = {
      expertiseLevel: this.formGroup.controls['ExpertiseLevel'].value,
    };
    this._sharingData.setExpertiseLevelData(expertiseLevel);
    console.log(expertiseLevel);
  }

}
