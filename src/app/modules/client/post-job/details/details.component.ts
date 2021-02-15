import { SharingDataService } from './../../shared/services/sharing-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  skill: string = '';
  skills: string[] = [];

  isOneTime = true;
  isEntery = true;
  isOne: boolean = true;
  isMoreThanOne: boolean = false;

  detailsForm: FormGroup;
  projectType: string;
  skillsNeed: string;
  screeningQuestion: string;
  freelancerNumber: string;
  experienceLevel: string;

  isFreelancerNumberValid: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService
  ) {}

  ngOnInit(): void {
    //building form

    this.detailsForm = this._formBuilder.group({
      ProjectType: ['One Time'],
      Skills: [''],
      ScreeningQuestion: [''],
      FreelancerNumber: ['One freelancer'],
      ExperienceLevel: ['Entry'],
    });

    // if (localStorage.getItem("details") !== null){
    //   var details = JSON.parse(localStorage.getItem('details'));
    //   this.detailsForm.controls['ProjectType'].setValue(details.projectType),
    //   console.log(this.detailsForm.controls['ProjectType'].value);
    //   this.detailsForm.controls["Skills"].setValue(details.skillsNeed)
    //   this.detailsForm.controls['screeningQuestion'].setValue(details.screeningQuestion),
    //   this.detailsForm.controls['FreelancerNumber'].setValue(details.freelancerNumber),
    //    this.detailsForm.controls['ExperienceLevel'].setValue(details.ExperienceLevel)}
    
  }

  //adding skills
  addSkill(skill: string) {
    if (this.skills.length < 4) {
      this.skills.push(skill);
      this.skill = '';
    }
  }
  //removeing skill
  removeSkill(skill: string) {
    let index = this.skills.indexOf(skill);
    this.skills.splice(index, 1);
  }

  //check whixh selected
  isChecked(type: string) {
    if (type == 'One freelancer') {
      this.isOne = true;
      this.isMoreThanOne = false;
      this.isFreelancerNumberValid = false;

      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~ ${this.detailsForm.valid}`);
    } else if (type == 'More than one freelancer') {
      this.isMoreThanOne = true;
      this.isOne = false;
      console.log(`~~~~~~~~~~~~~~~~~~~~~~~~${this.detailsForm.valid}`);
    }
    console.log(
      `isOne : ${this.isOne} -- isMoretThan1 : ${this.isMoreThanOne}`
    );
    // this.customValidation();
  }

  FixedValidation(data: any) {
    this.isFreelancerNumberValid = data;
    console.log(data);
  }

  //form vaildtion
  isDetailsValid() {
    console.log(`****** freelancer# ${this.isFreelancerNumberValid}`);
    console.log(
      `**************************details# ${this.detailsForm.valid}*******`
    );
    if (
      (this.isOne && this.detailsForm.valid) ||
      this.isFreelancerNumberValid
    ) {
      console.log(`>> freelancer# ${this.isFreelancerNumberValid}`);
      console.log(
        `>>>>>>>>>>>>>>>>>>>>>>>>>>details# ${this.detailsForm.valid}<<<<<`
      );
      return true;
    } else {
      console.log('not valid');
      return false;
    }
  }
  //store data
  storeData() {
    const details = {
      projectType: this.detailsForm.controls['ProjectType'].value,
      skillsNeed: this.skills,
      screeningQuestion: this.detailsForm.controls['ScreeningQuestion'].value,
      freelancerNumber: this.detailsForm.controls['FreelancerNumber'].value,
      experienceLevel: this.detailsForm.controls['ExperienceLevel'].value,
    };
    // localStorage.setItem("details", JSON.stringify(details))
    this._sharingData.setDetailsData(details);
    // console.log(details);
    // console.log(this.detailsForm);
  }
  //store if vaild
  StoreDataAndNavigate() {
    if (this.isDetailsValid()) {
      this.storeData();
      this._sharingData.isDetailsDone.next(true);
    } else console.log('not valid');
  }
}
