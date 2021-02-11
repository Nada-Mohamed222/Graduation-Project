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
<<<<<<< HEAD
  inputImage: any = '../../../../../assets/images/avatar.png';
  uploadedImage: any;
  freelancerSignUpArr: Freelancer[] = [];
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService,
    private _freelancerService: FreelancerService,
    private router: Router
  ) {}
=======
  inputImage: any = "../../../../../assets/images/avatar.png";
  uploadedImage: any;
  freelancerSignUpArr: Freelancer[] = [];
  formGroup: FormGroup;
  completedData: any;

  constructor(private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService,
    private _freelancerService: FreelancerService,
    private router: Router) { }
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8

  ngOnInit(): void {
    this.completedData = this._sharingData.isEligible;
    if (!this._sharingData.isEligible.profilePhoto) {
      this.router.navigateByUrl('/freelancer/titleoverview');
    }
    this.formGroup = this._formBuilder.group({
<<<<<<< HEAD
      profile: ['', [Validators.required]],
=======
      profile: ['', [Validators.required]]
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
    });
  }

  //setting Profile Photo from data
  storeData() {
    const profilePhoto = {
      photo: this.uploadedImage,
      url: this.inputImage,
    };
    this._sharingData.setProfilePhotoData(profilePhoto);
    console.log(profilePhoto);
  }

<<<<<<< HEAD
  onSelectImage(event) {
    // called each time file input changes
=======
  onSelectImage(event) { // called each time file input changes
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.uploadedImage = event.target.files[0];
      // const file = event.target.files[0];
      // console.log(file);
      // this.formGroup.get('profile').setValue(file);
      // console.log(file);

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.inputImage = event.target.result;
      };
    }
  }
<<<<<<< HEAD
}
=======


}
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
