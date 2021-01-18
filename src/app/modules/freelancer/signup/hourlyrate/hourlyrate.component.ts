import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourlyrate',
  templateUrl: './hourlyrate.component.html',
  styleUrls: ['./hourlyrate.component.css']
})
export class HourlyrateComponent implements OnInit {

  inputMoney:number = 8.00;
  deductedAmount: number = 2.00;
  formGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      HourlyRate: ['',[Validators.required,Validators.min(5)]]    
    })
  }

  totalMoney(serviceFees:number){
    this.inputMoney = serviceFees * 0.8;
    this.deductedAmount = serviceFees * 0.2;

  }

}
