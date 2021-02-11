import { Router } from '@angular/router';
import { Proposal } from './../../../../models/proposal';
import { FreelancerService } from 'src/app/services/freelancer-service/freelancer.service';
import { ClientService } from './../../../../services/client-service/client.service';
import { JobPost } from './../../../../services/job-service/job-post.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css'],
})
export class ProposalsComponent implements OnInit {
  constructor(
    private _clientService: ClientService,
    private _freelacerService: FreelancerService,
    private router: Router
  ) {}
  proposals: {};
  userName: string;
  ngOnInit(): void {
    this._clientService
      .getJobProposal()
      .pipe(
        map((response) => {
          const posts: Proposal[] = [];
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
          this.proposals = posts;
          console.log(this.proposals[0]);
          this.userName = posts[0].TalentID.UserName;
          console.log(posts[0].TalentID.UserName);
        },
        (error) => {
          console.log(' ايروررررر ياني');
          console.log(error);
        }
      );
  }

  getFreelancerProfile() {
    this._freelacerService
      .getFreelancerProfile(this.userName)
      .subscribe((response) => {
        console.log('علي الفريلانسر يلاااااا');
        console.log(this.userName);
        this.router.navigateByUrl(`/freelancer/${this.userName}`);

        console.log(response);
      });
  }
}
