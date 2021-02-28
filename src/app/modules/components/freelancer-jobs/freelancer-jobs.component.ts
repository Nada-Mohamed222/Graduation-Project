import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FreelancerService } from 'src/app/services/freelancer-service/freelancer.service';

@Component({
  selector: 'app-freelancer-jobs',
  templateUrl: './freelancer-jobs.component.html',
  styleUrls: ['./freelancer-jobs.component.css']
})
export class FreelancerJobsComponent implements OnInit {

  Jobs: any = [];
  Status: String = "Ongoing"
  constructor(private _freelancerService: FreelancerService, private titleService: Title) {
    this.titleService.setTitle("My Jobs");
  }

  ngOnInit(): void {
    this.getJobs()
  }


  getJobs() {
    this._freelancerService.getAllJobsAuth(this.Status).subscribe((response: Array<object>) => {
      this.Jobs = response;
      if (this.Status === "Done") {
        this.Jobs = this.Jobs.sort(function (a, b) {
          return +new Date(b.EndDate) - +new Date(a.EndDate);
        })
      } else {
        this.Jobs = this.Jobs.sort(function (a, b) {
          return +new Date(b.StartDate) - +new Date(a.StartDate);
        })
      }
    }, error => {
      console.log("Can't get Jobs");
    })
  }

  showActive() {
    this.Status = "Ongoing";
    this.getJobs();
  }

  SortByEndDatethis(a, b) {
    return +new Date(b.EndDate) - +new Date(a.EndDate);
  };

  async showFinished() {
    this.Status = "Done";
    this.getJobs();

  }

  seeMore(index: number) {
    this.Jobs[index].seeMoreFlag = !this.Jobs[index].seeMoreFlag;
  }
}