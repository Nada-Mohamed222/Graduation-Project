import { FormGroup, FormBuilder } from '@angular/forms';
import { FreelancerService } from './../../../../services/freelancer.service';
import { Freelancer } from 'src/app/models/freelancer';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-review-profile',
  templateUrl: './review-profile.component.html',
  styleUrls: ['./review-profile.component.css']
})
export class ReviewProfileComponent implements OnInit {

  expertiseData:any;
  expertiseLevelData:any;
  LanguageData:any;
  HourlyRateData:any;
  TitleOverviewData:any;
  profilePhotoData:any;
  locationData:any;
  phoneData:any;
  inputImage:any;
  isVerified:boolean = false;
  // freelancerSignUpArr :Freelancer[] = [];
  getNameOfTheFreeelancer:Freelancer = new Freelancer();
  formGroup:FormGroup;

  constructor(private _sharingData:SharingDataService,
    private _freelancerService:FreelancerService) { }

  ngOnInit(): void {
    this._freelancerService.get().subscribe((response:Freelancer)=>{
      this.getNameOfTheFreeelancer = response;
      console.log(response);
    },error=>{
      console.log(error);
      alert("Wrong Error!");
    })


    this.expertiseData = this._sharingData.getExpertiseData();
    this.expertiseLevelData = this._sharingData.getExpertiseLevelData();
    this.LanguageData = this._sharingData.getLanguageData();
    this.HourlyRateData = this._sharingData.getHourlyRateData();
    this.TitleOverviewData = this._sharingData.getTitleOverviewData();
    this.profilePhotoData = this._sharingData.getProfilePhotoData();
    this.locationData = this._sharingData.getLocationData();
    this.phoneData = this._sharingData.getPhoneData();
  }

  submitData()
  {
    // let freelancerSignUp:Freelancer = new Freelancer();
    const formData = new FormData();
    // Expertise
    formData.append('MainService', this.expertiseData.mainService);
    formData.append('Skills', this.expertiseData.mainSkills);

    //Expertise Level
    formData.append('ExpertiseLevel', this.expertiseLevelData.expertiseLevel);
    //Languages
    formData.append('Languages', this.LanguageData.language);
    //Hourly Rate
    formData.append('HourlyRate', this.HourlyRateData.hourlyRate);
    //Title and Overview
    formData.append('Title', this.TitleOverviewData.title);
    formData.append('ProfessionalOverview', this.TitleOverviewData.overview);
    //Profile Photo
    formData.append('ImageURL', this.profilePhotoData.photo);
    //Location
    formData.append('Country', this.locationData.country);
    //Phone Number
    formData.append('PhoneNumber', this.phoneData.phone);

    formData.append('isVerified', "true");

    this._freelancerService.update(formData).subscribe(response => {
      console.log("Response ",response);
    },error =>{
      console.log(error);
      alert("Sorry error occurred");
    })
  }

}
