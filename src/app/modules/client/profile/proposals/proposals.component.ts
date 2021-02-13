import { Proposals } from './../../../../models/proposals';
import { Router, ActivatedRoute } from '@angular/router';
import { Proposal } from './../../../../models/proposal';
import { FreelancerService } from 'src/app/services/freelancer-service/freelancer.service';
import { ClientService } from './../../../../services/client-service/client.service';
import { JobPost } from './../../../../services/job-service/job-post.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { SharingDataService } from '../../shared/services/sharing-data.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css'],
})
export class ProposalsComponent implements OnInit {
  constructor(
    private _clientService: ClientService,
    private _freelacerService: FreelancerService,
    private router: Router,
    private route: ActivatedRoute,
    private _sharingData: SharingDataService
  ) {}

  proposals = [];
  userName: string;
  jobId: string;

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.jobId = params['jobId'];
    //   this.getAll(this.jobId);
    // });

    this._sharingData.jobID.subscribe((data) => {
      this.getAll(data);
    });
  }
  // proposal
  getAll(id: string) {
    return this._clientService
      .getJobProposal(id)
      .pipe(
        map((response) => {
          const posts: Proposals[] = [];
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
          console.log('ربنا يستر ');

          console.log(posts.slice());
          this.proposals = posts;

          console.log('يختاااي');
          // console.log(this.proposals.CoverLetter);
          // console.log(this.proposals[0].TalentID.Title);
          // console.log(this.proposals[0]);

          console.log();
          console.log(`recieved jobId from observale ${this.jobId}`);
        },
        (error) => {
          console.log(`recieved jobId from observale ${this.jobId}`);
          console.log(error);
        }
      );
  }

  // get the freelancer profile
  getFreelancerProfile(userName: string) {
    this._freelacerService
      .getFreelancerProfile(userName)
      .subscribe((response) => {
        console.log('علي الفريلانسر يلاااااا');
        // console.log(this.userName);
        console.log(userName);
        this.router.navigateByUrl(`/freelancer/${userName}`);

        console.log(response);
      });
  }
}
