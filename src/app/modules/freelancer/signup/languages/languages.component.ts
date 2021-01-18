import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  HaveAntherLanguage:boolean = false;
  formGroup:FormGroup;
  constructor(private _formBulider:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBulider.group({
      Language:['',[Validators.required]]
    })
  }

  addAntherLanguage(){
    this.HaveAntherLanguage = true
  }
}
