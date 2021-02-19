import { Title } from '@angular/platform-browser';
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
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {

  id: string = '';
  job: Job = new Job();
  clientJobs: Array<Job> = [];
  client: Client = new Client();
  isSubmitted: Boolean = false;
  freelancer: Freelancer = new Freelancer();
  // proposal: Proposals['Proposals'] = new Proposals().Proposals;
  proposals: number = 0;
  isSaved: Boolean = false

  constructor(
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.titleService.setTitle("Upwork");
  }

  ngOnInit(): void {
    this._freelancerService.getFreelancerAuth().subscribe(
      async (response: Freelancer) => {
        this.freelancer = await response;
      },
      (error) => {
        console.log("Can't get freelancer details!");
      }
    );

    this.route.params.subscribe(async (params) => {
      this.id = await params['id'];
      this._freelancerService.getAJob(this.id).subscribe(
        async (response: any) => {
          this.job = await response;
          this.proposals = await response.TotalProposals;
          this.titleService.setTitle(`${this.job.Name.slice(0, 30)} - ${this.job.Category.slice(0, 25)}`);
          this.checkSubmition();
          this.checkSaved();
          // FIXME: remove params
          this._clientService.getPublicClient(this.job.EmployerUserName).subscribe(
            (response: Client) => {
              this.client = response;
            },
            (error) => {
              console.log("Can't get the employeer data!!");
            }
          );

          this._clientService
            .getAllEmployerJob(response.EmployerUserName)
            .subscribe(
              (response: any) => {
                this.clientJobs = response;
              },
              (error) => {
                console.log("Can't get the employeer data!!");
              }
            );
        },
        (error) => {
          alert('Error');
        }
      );
    });

  }

  checkSaved() {
    this.freelancer.SavedJobs.includes(this.id) ? this.isSaved = true : this.isSaved = false;
  }

  checkSubmition() {
    const check = this.freelancer.Proposals.find((item) => {
      return item.Job == this.job._id;
    });

    if (check) {
      this.isSubmitted = true;
    }
  }

  addToSaved() {
    this._freelancerService.saveNewJob(this.id).subscribe(response => {
      this.isSaved = true;
    }, error => {
      console.log("Can't add this job to your saved collection")
    })
  }

  removeFromSaved() {
    this._freelancerService.removeSavedJob(this.id).subscribe(response => {
      this.isSaved = false;
    }, error => {
      console.log("Can't remove this job from your saved collection")
    })
  }
}
