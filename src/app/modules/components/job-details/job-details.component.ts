import { Client } from './../../../models/client';
import { ClientService } from './../../../services/client.service';
import { Job } from 'src/app/models/job';
import { Component, OnInit } from '@angular/core';
import { FreelancerService } from './../../../services/freelancer.service';
import { ActivatedRoute } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id:string = "";
  job:Job;
  clientJobs:Array<Job>=[];
  client:Client = new Client(); 
  freelancer: Freelancer= new Freelancer();

  constructor(private _freelancerService:FreelancerService, private _clientService:ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this._freelancerService.get().subscribe((response:Freelancer)=>{
      this.freelancer = response;
      console.log(response)
    },error=>{
      console.log(error);
      alert("Wrong Error!");
    })

    this.route.params.subscribe(params =>{this.id =  params["id"]
    window.scrollTo(0, 0);
    this._freelancerService.getAJob(this.id).subscribe((response:any)=> {
      this.job = response;   

      this._clientService.getClient(response.EmployerUserName).subscribe((response:Client) =>{
        this.client = response;
      },error=>{
        console.log("Can't get the employeer data!!"); 
      })

      this._clientService.getAllEmployerJob(response.EmployerUserName).subscribe((response:any) =>{
        this.clientJobs = response;
      },error=>{
        console.log("Can't get the employeer data!!"); 
      })

    },error=>{
      alert("Error")
    }
    )})
  }


}
