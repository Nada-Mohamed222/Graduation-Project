import { ClientService } from './../../../../../services/client-service/client.service';
import { Subscription } from 'rxjs';
import { SharingDataService } from './../../services/sharing-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(
    private router: Router,
    private _sharingData: SharingDataService,
    private _clientService: ClientService,
    private route: ActivatedRoute
  ) {}
  @Input() name: string;
  @Input() mainButton: string;
  @Input() rightButton: string;
  @Input() LeftButton: string;

  jobId: string;
  freelancerUserName: string;
  user: Subscription;

  ngOnInit(): void {
    this._sharingData.freelancerUsername.subscribe((data) => {
      this.freelancerUserName = data;
    });
    this.route.params.subscribe((params) => {
      this.jobId = params['jobId'];
    });
  }

  // handle hiring button
  hire(isHireAndNavigate: boolean) {
    if (isHireAndNavigate) {
      // emit false to close the popup
      this._sharingData.showConfirmationPopup.next(false);

      //post a new accepted proposal
      this._clientService
        .postAcceptedProposals(this.jobId, this.freelancerUserName)
        .subscribe((response) => {
          console.log('>> POSTED << ');
          console.log(response);
        });

      // navigate to the accepted proposal page
      this.router.navigateByUrl(`accepted-proposals`);
    } else {
      this._sharingData.showConfirmationPopup.next(false);
      this._clientService
      .postAcceptedProposals(this.jobId, this.freelancerUserName)
      .subscribe((response) => {
        console.log('>> POSTED << ');
        console.log(response);
      });
    }
  }

  endContract(jobId: string, freelancerId: string, index: number) {
    this._clientService
      .endContract(jobId, freelancerId)
      .subscribe((response) => {
        // this.acceptedProposals.splice(index, 1);
        console.log('Patched');
        console.log(response);
      });
  }

  //close button from icon x
  close() {
    this._sharingData.showConfirmationPopup.next(false);
  }
  
  // handleClick(){
  //   this.endContract();
  //   this.hire()
  // }

}
