import { LocationComponent } from './../location/location.component';
import { TitleoverviewComponent } from './../titleoverview/titleoverview.component';
import { LanguagesComponent } from './../languages/languages.component';
import { ExpertiseComponent } from './../expertise/expertise.component';
import { Injectable } from '@angular/core';
import { ExpertiselevelComponent } from '../expertiselevel/expertiselevel.component';
import { HourlyrateComponent } from '../hourlyrate/hourlyrate.component';
import { ProfilephotoComponent } from '../profilephoto/profilephoto.component';
import { PhoneComponent } from '../phone/phone.component';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  constructor() { }

  expertise: ExpertiseComponent;
  expertiseLevel: ExpertiselevelComponent;
  language: LanguagesComponent;
  hourlyRate: HourlyrateComponent;
  titleOverview: TitleoverviewComponent;
  profilePhoto: ProfilephotoComponent;
  location: LocationComponent;
  phone: PhoneComponent;

  //setting expertise data
  setExpertiseData(object:any)
  {
    this.expertise = object;
  }
  //setting expertiseLevel data
  setExpertiseLevelData(object:any)
  {
    this.expertiseLevel= object;
  }
  //setting language data
  setLanguageData(object:any)
  {
    this.language= object;
  }
  //setting hourlyRate data
  setHourlyRateData(object:any)
  {
    this.hourlyRate= object;
  }
  //setting titleOverview data
  setTitleOverviewData(object:any)
  {
    this.titleOverview= object;
  }
  //setting profilePhoto data
  setProfilePhotoData(object:any)
  {
    this.profilePhoto= object;
  }
  //setting location data
  setLocationData(object:any)
  {
    this.location= object;
  }
  //setting phone data
  setPhoneData(object:any)
  {
    this.phone= object;
  }

  //getting data
  //getting expertise 
  getExpertiseData()
  {
    console.log(this.expertise);
    return this.expertise;
  }
  //getting expertiseLevel data
  getExpertiseLevelData()
  {
    return this.expertiseLevel;
  }
  //getting language data
  getLanguageData()
  {
    return this.language;
  }
  //getting hourlyRate data
  getHourlyRateData()
  {
    return this.hourlyRate;
  }
  //getting titleOverview data
  getTitleOverviewData()
  {
    return this.titleOverview;
  }
  //getting profilePhoto data
  getProfilePhotoData()
  {
    console.log(this.profilePhoto)
   return this.profilePhoto;
  }
  //getting location data
  getLocationData()
  {
    return this.location;
  }
  //getting phone data
  getPhoneData()
  {
    return this.phone;
  }
}
