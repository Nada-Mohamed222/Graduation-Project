import { Job } from './../../../models/job';
import { Freelancer } from './../../../models/freelancer';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client-service/client.service';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  username: string = '';
  freelancer: Freelancer = new Freelancer();
  freelancerJobs: Array<Job>;
  LastNameFirstLetter: String;
  FreelancerSkills: Array<string>
  FreelancerJobsLength: number

  constructor(
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this._freelancerService.getFreelancerPublic(this.username).subscribe(
        (response: Freelancer) => {
          this.freelancer = response;
          this.LastNameFirstLetter = response.LastName.slice(0,1)
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
}
