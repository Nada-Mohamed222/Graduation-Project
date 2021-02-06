import { Component, OnInit } from '@angular/core';
// import { Job } from 'src/app/models/job';
import { FreelancerService } from './../../../../services/freelancer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _freelancerService:FreelancerService) { }
  
  jobs:Array<object>=[];

  ngOnInit(): void {
    console.log("Bla");
    this._freelancerService.getAllJobs().subscribe((response:any)=> {
      console.log(response)
      this.jobs = response.jobs      
    },error=>{
      alert("Error")
    }

    )

  }

}
