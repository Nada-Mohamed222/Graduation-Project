import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job } from './../../../models/job';
import { Freelancer } from './../../../models/freelancer';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client-service/client.service';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  username: string = '';
  freelancer: Freelancer = new Freelancer();
  freelancerJobs: Array<Job>;
  formGroup: FormGroup;
  uploadedImage: any;
  inputImage: any = "uploads/avatar.png";
  remaningCharacters: number = 5000;
  skill: string = "";
  skills: any = [];
  isMyAccount: boolean = false;


  LastNameFirstLetter: String;
  FreelancerSkills: Array<string>
  FreelancerJobsLength: number

  constructor(
    private _freelancerService: FreelancerService,
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder,
    private titleService: Title
  ) {
    this.titleService.setTitle(`Upwork`);
  }

  ngOnInit(): void {
    this.loadData()
  }


  loadData() {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.username == localStorage.getItem('UserName') ? this.isMyAccount = true : this.isMyAccount = false;
      this._freelancerService.getFreelancerPublic(this.username).subscribe(
        (response: Freelancer) => {
          this.freelancer = response;
          this.formGroup = this._formBuilder.group({
            Hidden2: [""],
            Hidden: [""],
            FirstName: [this.freelancer.FirstName, [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
            LastName: [this.freelancer.LastName, [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
            profile: [""],
            MainServices: [this.freelancer.MainService, [Validators.required]],
            Availability: [this.freelancer.Availability, [Validators.required]],
            Language: [this.freelancer.EnglishProficiency, [Validators.required]],
            Title: [this.freelancer.Title, [Validators.required]],
            ProfessionalOverview: [this.freelancer.ProfessionalOverview, [Validators.required, Validators.maxLength(5000)]],
            HourlyRate: [this.freelancer.HourlyRate, [Validators.required, Validators.min(5), Validators.pattern(/^\d{1,3}$/)]],
            MainSkills: [""],
            Location: [this.freelancer.Country, [Validators.required]]
          })
          this.isMyAccount ? this.titleService.setTitle(`${this.freelancer.FirstName} ${this.freelancer.LastName} - ${this.freelancer.Title.slice(0, 20)}`) : this.titleService.setTitle(`${this.freelancer.FirstName} ${this.freelancer.LastName.slice(0, 1)}. - ${this.freelancer.Title.slice(0, 20)}`);
          this.skills = this.freelancer.Skills;
          this.inputImage = `${this.freelancer.ImageURL}`;
          this.LastNameFirstLetter = response.LastName.slice(0, 1)
          this.FreelancerSkills = response.Skills[0].split(',')
          this._freelancerService.getFreelancerJobsPublic(this.username).subscribe((response: Array<Job>) => {
            this.freelancerJobs = response;
            this.FreelancerJobsLength = response.length

          }, err => {
            console.log("Can't get jobs")
          })
        },
        (error) => {
          this.router.navigate(['/error-404']);
        }
      );
    });
  }

  onSelectImage(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.uploadedImage = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.inputImage = event.target.result;
      };
    }
  }

  countCharacters(inputChar: string) {
    this.remaningCharacters = 5000 - inputChar.length;
  }

  addSkill(skill: string) {
    if (this.skills.length < 10) {
      this.skills.push(skill);
      this.skill = '';
    }
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  updateData() {
    // let freelancerSignUp:Freelancer = new Freelancer();
    const formData = new FormData();
    // Name
    formData.append('FirstName', this.formGroup.controls['FirstName'].value);
    formData.append('LastName', this.formGroup.controls['LastName'].value);

    // Availability
    formData.append('Availability', this.formGroup.controls['Availability'].value);

    // Expertise
    formData.append('MainService', this.formGroup.controls['MainServices'].value);
    for (var i = 0; i < this.skills.length; i++) {
      formData.append('Skills[]', this.skills[i].toLowerCase());
    }
    //Languages
    formData.append('EnglishProficiency', this.formGroup.controls['Language'].value);
    //Hourly Rate
    formData.append('HourlyRate', this.formGroup.controls['HourlyRate'].value);
    //Title and Overview
    formData.append('Title', this.formGroup.controls['Title'].value);
    formData.append('ProfessionalOverview', this.formGroup.controls['ProfessionalOverview'].value);
    //Profile Photo
    this.uploadedImage ? formData.append('ImageURL', this.uploadedImage) : "";
    //Location
    formData.append('Country', this.formGroup.controls['Location'].value);
    console.log(formData)
    this._freelancerService.update(formData).subscribe(
      (response) => {
        this.loadData()
      },
      (error) => {
        console.log('Sorry error occurred');
      }
    );
  }
}
