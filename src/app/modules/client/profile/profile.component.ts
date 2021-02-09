import { Component, OnInit } from '@angular/core';
import { JobPost } from 'src/app/api-service/job-post.service';
import { map } from 'rxjs/operators';
import { Job } from 'src/app/models/job';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
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
