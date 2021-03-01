import { Title } from '@angular/platform-browser';
import { Proposals } from './../../../../models/proposals';
import { Router, ActivatedRoute } from '@angular/router';
import { FreelancerService } from 'src/app/services/freelancer-service/freelancer.service';
import { ClientService } from './../../../../services/client-service/client.service';
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
    private _sharingData: SharingDataService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Job Proposals');
  }

  proposals: any = [];
  userName: string;
  jobId: string;
  name: string;
  // showConfirmationPopup = false;
  jobStatus: any;
  freelancerUserName: string;
  hiredId: any;
  seeMoreFlag = false;
  tempId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.jobId = params['jobId'];
      this.getAll(this.jobId);
    });

    //   this._sharingData.jobID.subscribe((data) => {
    //     this.getAll(data);
    //   });

    this._sharingData.freelancerUsername.subscribe((data) => {
      this.freelancerUserName = data;
    });

    // this._sharingData.showConfirmationPopup.subscribe((data) => {
    //   this.showConfirmationPopup = data;
    // });
    this._sharingData.jobStatus.subscribe((data) => {
      this.jobStatus = data;
      this.hiredId = this.tempId;
      console.log(data);
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
          console.log(posts);
          // array of proposals
          this.proposals = posts[0];
          // job status
          this.jobStatus = posts[1];
          //
          this.hiredId = posts[2];
          console.log('');
          console.log(this.proposals);
          console.log(this.jobStatus);
          // console.log(this.userName);
          console.log(`recieved jobId from observale  ${this.jobId}`);
        },
        (error) => {
          console.log(`recieved jobId from observale  ${this.jobId}`);
          console.log(error);
        }
      );
  }

  confirm(
    firstName: string,
    lastName: string,
    freelancerUserName: string,
    id: any
  ) {
    this.name = firstName + ' ' + lastName;
    this.tempId = id;
    this._sharingData.freelancerUsername.next(freelancerUserName);
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
        this._sharingData.freelancerUsername.next(userName);

        console.log(response);
      });
  }

  seeMore(index: number) {
    // this.seeMoreFlag = !this.seeMoreFlag;
    this.proposals[index].seeMoreFlag = !this.proposals[index].seeMoreFlag;
  }
}
