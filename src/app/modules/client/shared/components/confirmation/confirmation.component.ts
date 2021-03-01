import { ClientService } from './../../../../../services/client-service/client.service';
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
  @Input() question: string;
  @Input() mainButton: string;
  @Input() rightButton: string;
  @Input() LeftButton: string;
  @Input() functionName: string;
  @Input() TextAreaLabel: string;

  hired_jobId: string;
  freelancerUserName: string;
  encontract_jobId: string;
  freelncerId: string;
  textArea = 'Thank you grate experience';
  paymentType: string;

  stars: number[] = [1, 2, 3, 4, 5];
  rating: number;
  hoursNumber: number;

  ngOnInit(): void {
    // observe hire method parameter
    this._sharingData.freelancerUsername.subscribe((data) => {
      this.freelancerUserName = data;
    });
    this.route.params.subscribe((params) => {
      this.hired_jobId = params['jobId'];
    });

    //observe end contract method parameter
    this._sharingData.jobId.subscribe((data) => {
      this.encontract_jobId = data;
    });
    this._sharingData.freelancerId.subscribe((data) => {
      this.freelncerId = data;
    });
    this._sharingData.paymentType.subscribe((data) => {
      this.paymentType = data;
    });
  }

  //------------------ handle hiring button
  hire(isHireAndNavigate: boolean) {
    if (isHireAndNavigate) {
      // emit false to close the popup
      this._sharingData.showConfirmationPopup.next(false);

      //post a new accepted proposal
      this._clientService
        .postAcceptedProposals(this.hired_jobId, this.freelancerUserName)
        .subscribe((response) => {
          console.log('>> POSTED << ');
          console.log(response);
        });

      // navigate to the accepted proposal page
      this.router.navigateByUrl(`profile/accepted-proposals`);
    } else {
      this._sharingData.showConfirmationPopup.next(false);
      this._clientService
        .postAcceptedProposals(this.hired_jobId, this.freelancerUserName)
        .subscribe((response) => {
          console.log('>> POSTED << ');
          console.log(response);
        });
    }
  }

  //----------------------------
  textValue(text: string) {
    this.textArea = text;
  }

  //--------------------------- ending contract req for accepted proposal component
  endContract(jobId: string, freelancerId: string, contract?: boolean) {
    if (!contract) {
      this._clientService
        .endContract(
          jobId,
          freelancerId,
          this.textArea,
          this.rating,
          this.hoursNumber
        )
        .subscribe((response) => {
          // this.acceptedProposals.splice(index, 1);
          console.log('Contract Ended successfully');
          console.log(response);
          console.log(this.textArea);
        });
    } else {
      console.log('Ending contract ended');
    }
  }

  //close button from icon x
  // close() {
  //   this._sharingData.showConfirmationPopup.next(false);
  // }

  handleClick(functionName: string, flag: boolean) {
    switch (functionName) {
      case 'hire':
        this.hire(flag);
        break;
      case 'endContract':
        this.endContract(this.encontract_jobId, this.freelncerId, flag);
        break;
      default:
        console.log('no Function matched');
        break;
    }
  }
  countStar(star) {
    this.rating = star;
    console.log('Value of star', star);
  }
  hoursValue(hoursNumber: number) {
    this.hoursNumber = hoursNumber;
  }
}
