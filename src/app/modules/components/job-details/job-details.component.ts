import { Client } from './../../../models/client';
import { ClientService } from './../../../services/client.service';
import { Job } from 'src/app/models/job';
import { Component, OnInit } from '@angular/core';
import { FreelancerService } from './../../../services/freelancer.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job:Job= new Job();
  client:Client = new Client(); 

  constructor(private _freelancerService:FreelancerService, private _clientService:ClientService) { }

  ngOnInit(): void{
    this._freelancerService.getAJob("601c99ddcc10330028461610").subscribe((response:any)=> {
      this.job = response;   

      this._clientService.getClient(response.EmployerUserName).subscribe((response:Client) =>{
        console.log("Response: ",response);
        this.client = response;
      },error=>{
        console.log("Can't get the employeer data!!"); 
      })

    },error=>{
      alert("Error")
    }
    )
  }


}
