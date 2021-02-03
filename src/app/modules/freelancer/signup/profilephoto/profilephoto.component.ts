import { Freelancer } from './../../../../models/freelancer';
import { Router } from '@angular/router';
import { FreelancerService } from './../../../../services/freelancer.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharingDataService } from '../sharing-data-service/sharing-data.service';

@Component({
  selector: 'app-profilephoto',
  templateUrl: './profilephoto.component.html',
  styleUrls: ['./profilephoto.component.css']
})
export class ProfilephotoComponent implements OnInit {

  // url: string;
  // inputImage:any = "https://www.djelfa.req.body.info/mobi/img/avatar/avatar.png";
  inputImage:any = "../../../../../assets/images/avatar.png";
  uploadedImage:any;
  freelancerSignUpArr :Freelancer[] = [];
  formGroup:FormGroup;

  constructor(private _formBuilder:FormBuilder,
    private _sharingData:SharingDataService,
    private _freelancerService:FreelancerService,
    private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      profile: ['',[Validators.required]]     
    }); 
  }
  updatePhoto()
  {
    let freelancerSignUp:Freelancer = new Freelancer();
    const formData = new FormData();
    formData.append('ImageURL', this.formGroup.get('profile').value);
    console.log(this.formGroup.get('profile').value);
    // freelancerSignUp.ImageURL = formData.has('profile');

    console.log(formData);
    this._freelancerService.update(formData).subscribe(response => {
      this.freelancerSignUpArr.push(freelancerSignUp);
      // this.router.navigateByUrl('/freelancer/location');
      console.log("Response ",response);
    },error =>{
      alert("Sorry error occurred");
    })
  
  }

  //setting Profile Photo from data
  storeData(){
    const profilePhoto = {
      // photo: this.formGroup.controls['Title'].value,
    };
    this._sharingData.setProfilePhotoData(profilePhoto);
    console.log(profilePhoto);
  }
 
  onSelectImage(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      // this.uploadedImage = event.target.files[0];
      const file = event.target.files[0];
      this.formGroup.get('profile').setValue(file);

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.inputImage = event.target.result;
      }
    }
  }

  // processFile(image:any){
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     }
  //   }
    // this.inputImage = URL.createObjectURL(image.target.files[0]);
    // this.inputImage = image.target.files[0];
    // console.log(this.inputImage);
  }
