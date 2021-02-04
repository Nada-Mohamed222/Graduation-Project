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

  detailsForm: FormGroup;
  projectType: string;
  skillsNeed: string;
  screeningQuestion: string;
  freelancerNumber: string;
  experienceLevel: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService
  ) {}

  ngOnInit(): void {
    //building form
    this.detailsForm = this._formBuilder.group({
      ProjectType: ['', [Validators.required]],
      Skills: [''],
      ScreeningQuestion: [''],
      FreelancerNumber: ['', [Validators.required]],
      ExperienceLevel: ['', [Validators.required]],
    });
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

  storeData() {
    const details = {
      projectType: this.detailsForm.controls['ProjectType'].value,
      skillsNeed: this.skills,
      screeningQuestion: this.detailsForm.controls['ScreeningQuestion'].value,
      freelancerNumber: this.detailsForm.controls['FreelancerNumber'].value,
      experienceLevel: this.detailsForm.controls['ExperienceLevel'].value,
    };
    this._sharingData.setDetailsData(details);
    console.log(details);
    console.log(this.detailsForm);
  }
}
