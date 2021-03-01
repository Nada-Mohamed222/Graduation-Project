import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ClientService } from './../../../../services/client-service/client.service';
import { Component, OnInit } from '@angular/core';
import { JobPost } from 'src/app/services/job-service/job-post.service';
import { map } from 'rxjs/operators';
import { Job } from 'src/app/models/job';
import { SharingDataService } from '../../shared/services/sharing-data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs: any = [];
  skills = ['html', 'css'];
  jobId: string;
  jobFilter = 'all';
  jobStatusTitle = 'My Postings';

  p = 0;
  d = 0;
  o = 0;

  constructor(
    private _getJob: JobPost,
    private _clientService: ClientService,
    private router: Router,
    private _sharingData: SharingDataService,
    private titleService: Title
  ) {
    this.titleService.setTitle('My Jobs');
  }

  ngOnInit(): void {
    // get all job
    this._getJob
      .getJobs()
      .pipe(
        map((response) => {
          const posts: Job[] = [];

          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              if (response[key].Status === 'Pending') {
                this.p += 1;
              } else if (response[key].Status === 'Done') {
                this.d += 1;
              } else {
                this.o += 1;
              }
              posts.push(response[key]);
            }
          }
          return posts;
        })
      )
      .subscribe(
        (posts) => {
          console.log(posts);
          this.jobs = posts.slice();

          console.log(this.jobs[0]);
        },
        (error) => {
          console.log(' ايروررررر ياني');
          console.log(error);
        }
      );
  }
  // navigate
  getjobProposals(jobId: string) {
    console.log(`berfore emmitiing  ${jobId}`);
    // console.log('انا هنااا اهههههه');
    this._clientService.getJobProposal(jobId).subscribe(
      (response) => {
        // emit job id
        this._sharingData.jobID.next(jobId);
        console.log(response);
        console.log(jobId);
        this.router.navigateByUrl(`/profile/${jobId}/proposals`);
      },
      (error) => {
        console.log(' get job proposl error ');
        console.log(error);
      }
    );
  }

  handleFilterclick(filter: string) {
    switch (filter) {
      case 'all':
        this.jobFilter = 'all';
        this.jobStatusTitle = 'My postings';
        break;
      case 'Pending':
        this.jobFilter = 'Pending';
        this.jobStatusTitle = 'Pending jobs';
        break;
      case 'Ongoing':
        this.jobFilter = 'Ongoing';
        this.jobStatusTitle = 'Active jobs';
        break;
      case 'Done':
        this.jobFilter = 'Done';
        this.jobStatusTitle = 'Done jobs';
        break;

      default:
        break;
    }
  }
}
