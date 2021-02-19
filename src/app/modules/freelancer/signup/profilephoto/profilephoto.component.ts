import { Title } from '@angular/platform-browser';
import { Freelancer } from './../../../../models/freelancer';
import { Router } from '@angular/router';
import { FreelancerService } from '../../../../services/freelancer-service/freelancer.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-profilephoto',
  templateUrl: './profilephoto.component.html',
  styleUrls: ['./profilephoto.component.css'],
})
export class ProfilephotoComponent implements OnInit {
  // url: string;
  // inputImage:any = "https://www.djelfa.req.body.info/mobi/img/avatar/avatar.png";
  inputImage: any = '../../../../../assets/images/avatar.png';
  uploadedImage: any;
  freelancerSignUpArr: Freelancer[] = [];
  formGroup: FormGroup;
  completedData: any;
  // photo: any = "";

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService,
    private _freelancerService: FreelancerService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("Sign Up - Profile Photo");
  }

  ngOnInit(): void {
    const profilePhotoData: any = this._sharingData.getProfilePhotoData();
    this.inputImage = profilePhotoData.url;
    // if (profilePhotoData.photo.name) {
    //   this.photo = `C:\\fakepath\\${profilePhotoData.photo.name}`;
    // }
    this.completedData = this._sharingData.isEligible;
    if (!this._sharingData.isEligible.profilePhoto) {
      this.router.navigateByUrl('/freelancer/titleoverview');
    }
    this.formGroup = this._formBuilder.group({
      profile: ["", [Validators.required]],
    });

  }

  //setting Profile Photo from data
  storeData() {
    const profilePhoto = {
      photo: this.uploadedImage,
      url: this.inputImage,
    };
    this._sharingData.setProfilePhotoData(profilePhoto);
  }

  onSelectImage(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.uploadedImage = event.target.files[0];
      // const file = event.target.files[0];
      // console.log(file);
      // this.formGroup.get('profile').setValue(file);

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.inputImage = event.target.result;
      };
    }
  }
}
