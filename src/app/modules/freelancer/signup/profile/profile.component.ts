import { Component, OnInit } from '@angular/core';
// import { Job } from 'src/app/models/job';
import { FreelancerService } from '../../../../services/freelancer-service/freelancer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private _freelancerService: FreelancerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  freelancer: Freelancer = new Freelancer();
  skill: string = '';
  jobs: Array<object> = [];
  searchedValue: string;
  PageNumber: any = { PageNumber: 1 }
  NoMoreJobs: boolean = false;

  ngOnInit(): void {
    this._freelancerService.getFreelancerAuth().subscribe(
      (response: Freelancer) => {
        this.freelancer = response;
      },
      (error) => {
        console.log("Can't get freelancer details");
      }
    );
    this.loadJobs()
  }

  submitSearch(searchedValue) {
    this.router.navigate([`/job/search/${searchedValue}`]);
  }

  loadJobs() {
    if (!this.route.snapshot.data.search) {
      this._freelancerService.getAllJobs(this.PageNumber).subscribe(
        (response: any) => {
          this.updateJobs(response);
        },
        (error) => {
          console.log("Can't get jobs details");
        }
      );
    } else {
      this.route.params.subscribe((params) => {
        this.skill = params['skill'];
        this._freelancerService.searchBySkill(this.skill, this.PageNumber).subscribe(
          (response: any) => {
            this.updateJobs(response);
          },
          (error) => {
            alert('Error');
          }
        );
      });
    }
  }

  updateJobs(response: any) {
    this.jobs = [...this.jobs, ...response.jobs];
    this.PageNumber.PageNumber++;
    if (response.jobs.length < 1) {
      this.NoMoreJobs = true
    }
  }
}
