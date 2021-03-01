import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FreelancerService } from './../../../../services/freelancer-service/freelancer.service';
import { AcceptedProposals } from './../../../../models/acceptedProposals';
import { map } from 'rxjs/operators';
import { ClientService } from './../../../../services/client-service/client.service';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../shared/services/sharing-data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-accepted-proposals',
  templateUrl: './accepted-proposals.component.html',
  styleUrls: ['./accepted-proposals.component.css'],
})
export class AcceptedProposalsComponent implements OnInit {
  constructor(
    private _clientService: ClientService,
    private titleService: Title,

    private _sharingData: SharingDataService,
    private _freelacerService: FreelancerService,
    private router: Router
  ) {
    this.titleService.setTitle('My Active Offers');
  }

  acceptedProposals: any = [];
  jobId: string;
  hiredFreelancerId: string;
  jobIndex: number;
  ngOnInit(): void {
    this._clientService
      .getAllAcceptedProposals('Ongoing')
      .pipe(
        map((response) => {
          const posts: AcceptedProposals[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              posts.push(response[key]);
            }
          }
          return posts;
        })
      )
      .subscribe((posts) => {
        this.acceptedProposals = posts[1];

        console.log(posts[1]);

        console.log(this.acceptedProposals);
      });

    this._sharingData.deleteContractFlag.subscribe((data) => {
      if (data) {
        this.acceptedProposals.splice(this.jobIndex, 1);
      }
    });
  }

  endContract(
    jobId: string,
    freelancerId: string,
    payment?: string,
    index?: number
  ) {
    this._sharingData.jobId.next(jobId);
    this._sharingData.freelancerId.next(freelancerId);
    this._sharingData.paymentType.next(payment);
    this.jobIndex = index;
  }
  // get the freelancer profile
  getFreelancerProfile(userName: string) {
    console.log('علي الفريلانسر يلاااااا');
    console.log(userName);
    this.router.navigateByUrl(`/freelancer/${userName}`);
  }
}
