import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titleoverview',
  templateUrl: './titleoverview.component.html',
  styleUrls: ['./titleoverview.component.css']
})
export class TitleoverviewComponent implements OnInit {

  remaningCharacters:number = 5000;
  formGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      Title:['',[Validators.required]],
      ProfessionalOverview:['',[Validators.required,Validators.maxLength(5000)]]
    })
  }
  countCharacters(inputChar:string){
    this.remaningCharacters = 5000-inputChar.length;
  }

}
