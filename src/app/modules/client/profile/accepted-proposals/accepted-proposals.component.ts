import { AcceptedProposals } from './../../../../models/acceptedProposals';
import { map } from 'rxjs/operators';
import { ClientService } from './../../../../services/client-service/client.service';
import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../shared/services/sharing-data.service';

@Component({
  selector: 'app-accepted-proposals',
  templateUrl: './accepted-proposals.component.html',
  styleUrls: ['./accepted-proposals.component.css'],
})
export class AcceptedProposalsComponent implements OnInit {
  constructor(private _clientService: ClientService) {}

  acceptedProposals: any = [];
  jobId: string;
  hiredFreelancerId: string;

  ngOnInit(): void {
    this._clientService
      .getAllAcceptedProposals()
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
  }
  endContract(jobId: string, freelancerId: string, index: number) {
    this._clientService
      .endContract(jobId, freelancerId)
      .subscribe((response) => {
        this.acceptedProposals.splice(index, 1);
        console.log('Patched');
        console.log(response);
      });
  }
}
