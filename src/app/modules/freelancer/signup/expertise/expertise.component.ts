import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';



@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  skill: string = '';
  skills: string[] = [];

  formGroup: FormGroup;
  constructor(private _formBuilder:FormBuilder,private _sharingData:SharingDataService) {}
  
  ngOnInit(): void {
    const expertiseData:any =this._sharingData.getExpertiseData();
    console.log(expertiseData);
    this.formGroup = this._formBuilder.group({
      // MainServices:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      // MainSkills:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      // expertiseData.mainService ?  expertiseData.mainService  :  ''
      MainServices:['',[Validators.required]],
      MainSkills:['',[Validators.required]]
    })
  }

  //setting expertise from data
  storeData(){
    const expertise = {
      mainService: this.formGroup.controls['MainServices'].value,
      mainSkills: this.formGroup.controls['MainSkills'].value
    };
    this._sharingData.setExpertiseData(expertise);
    console.log(expertise);
  }

   //adding skills
  addSkill(skill: string) {
    if (this.skills.length < 10) {
      this.skills.push(skill);
      this.skill = '';
    }
  }
  //removeing skill
  removeSkill(skill: string) {
    let index = this.skills.indexOf(skill);
    this.skills.splice(index, 1);
  }

}
