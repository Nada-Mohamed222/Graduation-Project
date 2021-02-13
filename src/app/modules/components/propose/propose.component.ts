import { Client } from './../../../models/client';
import { ClientService } from '../../../services/client-service/client.service';
import { Job } from 'src/app/models/job';
import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-propose',
  templateUrl: './propose.component.html',
  styleUrls: ['./propose.component.css'],
})
export class ProposeComponent implements OnInit {
  id: string = '';
  job: Job = new Job();
  clientJobs: Array<Job> = [];
  client: Client;
  freelancer: Freelancer = new Freelancer();

  constructor(
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._freelancerService.get().subscribe(
      (response: Freelancer) => {
        this.freelancer = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
        alert('Wrong Error!');
      }
    );

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      window.scrollTo(0, 0);
      this._freelancerService.getAJob(this.id).subscribe(
        (response: any) => {
          this.job = response;

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

  submitProposal(CoverLetter: Object) {
    this._freelancerService.submitForm(this.job._id, { CoverLetter }).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigateByUrl('/freelancer/my-proposals');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
