import { Proposals } from './../../../models/proposals';
import { Client } from './../../../models/client';
import { ClientService } from '../../../services/client-service/client.service';
import { Job } from 'src/app/models/job';
import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { ActivatedRoute } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id: string = "";
  job: Job = new Job();
  clientJobs: Array<Job> = [];
  client: Client = new Client();
  isSubmitted: Boolean= false;
  freelancer: Freelancer = new Freelancer();
  proposal: Proposals["Proposals"] = new Proposals().Proposals;

  constructor(private _freelancerService: FreelancerService, private _clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._freelancerService.get().subscribe((response: Freelancer) => {
      this.freelancer = response;
      console.log(response)
    }, error => {
      console.log(error);
      alert("Wrong Error!");
    })

    this.route.params.subscribe(params => {
      this.id = params["id"]
      window.scrollTo(0, 0);
      this._freelancerService.getAJob(this.id).subscribe((response: any) => {
        this.job = response;
        this.proposal = response.Proposals;
        console.log(this.proposal);
        this.checkSubmition();


        this._clientService.getClient(response.EmployerUserName).subscribe((response: Client) => {
          this.client = response;
        }, error => {
          console.log("Can't get the employeer data!!");
        })

        this._clientService.getAllEmployerJob(response.EmployerUserName).subscribe((response: any) => {
          this.clientJobs = response;
        }, error => {
          console.log("Can't get the employeer data!!");
        })

      }, error => {
        alert("Error")
      }
      )
    })
  }

  
  checkSubmition(){
   const check = this.freelancer.Proposals.find(item =>{
        console.log(item.Job)
    return item.Job == this.job._id;
         
    })
    console.log(check);
    
    if(check){
      this.isSubmitted = true;
    }
  }

}
