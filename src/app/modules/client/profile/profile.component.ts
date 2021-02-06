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
          this.jobs = posts.slice(1)[0];
          console.log(this.jobs);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
