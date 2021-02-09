import { LocationComponent } from './../location/location.component';
import { TitleoverviewComponent } from './../titleoverview/titleoverview.component';
import { LanguagesComponent } from './../languages/languages.component';
import { ExpertiseComponent } from './../expertise/expertise.component';
import { Injectable } from '@angular/core';
import { ExpertiselevelComponent } from '../expertiselevel/expertiselevel.component';
import { HourlyrateComponent } from '../hourlyrate/hourlyrate.component';
import { ProfilephotoComponent } from '../profilephoto/profilephoto.component';
import { PhoneComponent } from '../phone/phone.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  constructor() { }

  isEligible: any = {
    expertiseLevel: false,
    languages: false,
    hourlyRate: false,
    titleOverview: false,
    profilePhoto: false,
    location: false,
    phone: false,
    review: false
  }

  expertise: ExpertiseComponent;
  expertiseLevel: ExpertiselevelComponent;
  language: LanguagesComponent;
  hourlyRate: HourlyrateComponent;
  titleOverview: TitleoverviewComponent;
  profilePhoto: ProfilephotoComponent;
  location: LocationComponent;
  phone: PhoneComponent;

  //setting expertise data
  setExpertiseData(object: any) {
    this.expertise = object;
    this.isEligible.expertiseLevel = true;
  }
  //setting expertiseLevel data
  setExpertiseLevelData(object: any) {
    this.expertiseLevel = object;
    this.isEligible.languages = true;
  }
  //setting language data
  setLanguageData(object: any) {
    this.language = object;
    this.isEligible.hourlyRate = true;
  }
  //setting hourlyRate data
  setHourlyRateData(object: any) {
    this.hourlyRate = object;
    this.isEligible.titleOverview = true;
  }
  //setting titleOverview data
  setTitleOverviewData(object: any) {
    this.titleOverview = object;
    this.isEligible.profilePhoto = true;
  }
  //setting profilePhoto data
  setProfilePhotoData(object: any) {
    this.profilePhoto = object;
    this.isEligible.location = true;
  }
  //setting location data
  setLocationData(object: any) {
    this.location = object;
    this.isEligible.phone = true;
  }
  //setting phone data
  setPhoneData(object: any) {
    this.phone = object;
    this.isEligible.review = true;
  }

  //getting data
  //getting expertise 
  getExpertiseData() {
    return this.expertise;
  }
  //getting expertiseLevel data
  getExpertiseLevelData() {
    return this.expertiseLevel;
  }
  //getting language data
  getLanguageData() {
    return this.language;
  }
  //getting hourlyRate data
  getHourlyRateData() {
    return this.hourlyRate;
  }
  //getting titleOverview data
  getTitleOverviewData() {
    return this.titleOverview;
  }
  //getting profilePhoto data
  getProfilePhotoData() {
    console.log(this.profilePhoto)
    return this.profilePhoto;
  }
  //getting location data
  getLocationData() {
    return this.location;
  }
  //getting phone data
  getPhoneData() {
    return this.phone;
  }
}