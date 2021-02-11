import { Component, OnInit } from '@angular/core';
import { JobPost } from 'src/app/services/job-service/job-post.service';
import { map } from 'rxjs/operators';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs: {};
  skills = ['html', 'css'];
  constructor(private _getJob: JobPost) {}

  ngOnInit(): void {
    this._getJob
      .getJobs()
      .pipe(
        map((response) => {
          const posts: Job[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              posts.push(response[key]);
            }
          }
          return posts;
        })
      )
      .subscribe(
        (posts) => {
          console.log(posts);
          this.jobs = posts;
          console.log(this.jobs[0]);
        },
        (error) => {
          console.log(' ايروررررر ياني');
          console.log(error);
        }
      );
  }
}
