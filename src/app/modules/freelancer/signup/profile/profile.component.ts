import { Title } from '@angular/platform-browser';
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
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("My Job Feed");
  }
  freelancer: Freelancer = new Freelancer();
  skill: string = '';
  jobs: Array<object> = [];
  PageNumber: any = { PageNumber: 1 }
  NoMoreJobs: boolean = false;
  isSearching: boolean = false;

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

  submitSearch(searchedValue: string) {
    if (searchedValue) {
      this.PageNumber = { PageNumber: 1 };
      this.router.navigate([`/job/search/${searchedValue.toLowerCase()}`]);
    }
  }

  loadJobs() {
    if (!this.route.snapshot.data.search) {
      this._freelancerService.getAllJobs(this.PageNumber).subscribe(
        (response: any) => {
          this.updateJobs(response);
          this.isSearching = false;
        },
        (error) => {
          console.log("Can't get jobs details");
        }
      );
    } else {
      this.route.params.subscribe((params) => {
        this.skill = params['skill'].toLowerCase();
        this._freelancerService.searchBySkill(this.skill, this.PageNumber).subscribe(
          (response: any) => {
            this.updateJobs(response);
            this.titleService.setTitle(`Search for ${this.skill} jobs`);
            this.isSearching = true;
          },
          (error) => {
            alert('Error');
          }
        );
      });
    }
  }

  updateJobs(response: any) {
    if (this.PageNumber.PageNumber == 1) this.jobs = response.jobs
    else this.jobs = [...this.jobs, ...response.jobs]

    this.PageNumber.PageNumber++;

    if (response.jobs.length < 1) {
      this.NoMoreJobs = true
    }
  }

  addToSaved(jobID: string) {
    this._freelancerService.saveNewJob(jobID).subscribe(response => {
      this.freelancer.SavedJobs.push(jobID);
    }, error => {
      console.log("Can't add this job to your saved collection")
    })
  }

  removeFromSaved(jobID: String) {
    const index = this.freelancer.SavedJobs.indexOf(jobID);
    this._freelancerService.removeSavedJob(jobID).subscribe(response => {
      this.freelancer.SavedJobs.splice(index, 1);
    }, error => {
      console.log("Can't remove this job from your saved collection")
    })
  }
}
