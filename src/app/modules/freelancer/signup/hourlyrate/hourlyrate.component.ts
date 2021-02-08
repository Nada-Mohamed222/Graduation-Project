import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-hourlyrate',
  templateUrl: './hourlyrate.component.html',
  styleUrls: ['./hourlyrate.component.css']
})
export class HourlyrateComponent implements OnInit {

  inputMoney:number = 8.00;
  deductedAmount: number = 2.00;
  formGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder,private _sharingData:SharingDataService) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      HourlyRate: ['',[Validators.required,Validators.min(5)]]    
    })
  }
  //setting HourlyRate from data
  storeData(){
    const HourlyRate = {
      hourlyRate: this.formGroup.controls['HourlyRate'].value,
    };
    this._sharingData.setHourlyRateData(HourlyRate);
    console.log(HourlyRate);
  }

  totalMoney(serviceFees:number){
    this.inputMoney = serviceFees * 0.8;
    this.deductedAmount = serviceFees * 0.2;
  }

}
