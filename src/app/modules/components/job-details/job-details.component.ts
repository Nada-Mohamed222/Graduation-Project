import { Component, OnInit } from '@angular/core';
import { FreelancerService } from './../../../services/freelancer.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private _freelancerService:FreelancerService) { }

  job:Object={};

  ngOnInit(): void{
    this._freelancerService.getAJob("601c99ddcc10330028461610").subscribe((response:any)=> {
      console.log(response)
      this.job = response;   
      console.log(this.job)
    },error=>{
      alert("Error")
    }

    )
  }

}
