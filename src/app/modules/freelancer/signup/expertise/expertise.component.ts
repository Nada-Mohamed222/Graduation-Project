import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';



@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  completedData: any;
  skill: string = "";
  skills: Array<string> = [];
  formGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _sharingData: SharingDataService) { }

  ngOnInit(): void {
    const expertiseData: any = this._sharingData.getExpertiseData();
    this.skills = expertiseData.mainSkills;
    this.completedData = this._sharingData.isEligible;
    this.formGroup = this._formBuilder.group({
      MainServices: [expertiseData.mainService, [Validators.required]],
      MainSkills: [expertiseData.mainSkills]
    })
  }

  //setting expertise from data
  storeData() {
    const expertise = {
      mainService: this.formGroup.controls['MainServices'].value,
      mainSkills: this.skills
    };
    this._sharingData.setExpertiseData(expertise);
  }


  addSkill(skill: string) {
    if (this.skills.length < 10) {
      this.skills.push(skill);
      this.skill = '';
    }
  }

  removeSkill(currentIndex) {
    this.skills.splice(currentIndex, 1);
  }

}