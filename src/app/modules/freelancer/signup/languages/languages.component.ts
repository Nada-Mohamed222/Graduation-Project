import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  HaveAntherLanguage: boolean = false;
  formGroup: FormGroup;
  constructor(private _formBulider: FormBuilder, private _sharingData: SharingDataService, private router: Router) { }

  ngOnInit(): void {
    if (!this._sharingData.isEligible.languages) {
      this.router.navigateByUrl('/freelancer/expertiselevel');
    }
    this.formGroup = this._formBulider.group({
      Language: ['', [Validators.required]]
    })
  }
  //setting Language from data
  storeData() {
    const languages = {
      language: this.formGroup.controls['Language'].value,
    };
    this._sharingData.setLanguageData(languages);
    console.log(languages);
  }

  addAntherLanguage() {
    this.HaveAntherLanguage = true
  }
}