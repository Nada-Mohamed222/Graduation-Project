import { Title } from '@angular/platform-browser';
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
  completedData: any;
  constructor(private _formBulider: FormBuilder, private _sharingData: SharingDataService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("Sign Up - English Proficiency");
  }

  ngOnInit(): void {
    const LanguageData: any = this._sharingData.getLanguageData();
    this.completedData = this._sharingData.isEligible;
    if (!this._sharingData.isEligible.languages) {
      this.router.navigateByUrl('/freelancer/expertiselevel');
    }
    this.formGroup = this._formBulider.group({
      EnglishProficiency: [LanguageData.EnglishProficiency, [Validators.required]]
    })
  }
  //setting Language from data
  storeData() {
    const languages = {
      EnglishProficiency: this.formGroup.controls['EnglishProficiency'].value,
    };
    this._sharingData.setLanguageData(languages);
  }

  addAntherLanguage() {
    this.HaveAntherLanguage = true
  }
}