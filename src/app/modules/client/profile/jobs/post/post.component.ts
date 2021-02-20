import { SharingDataService } from './../../../shared/services/sharing-data.service';
import { Router } from '@angular/router';
import { ClientService } from './../../../../../services/client-service/client.service';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
// import { JobPost } from 'src/app/services/job-service/job-post.service';
// import { Job } from 'src/app/models/job';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() jobName: string =
    'Seeking assistance with updating website which is currently working with WordPress with specific plugins.';
  @Input() paymentType: string;
  @Input() experienceLevel: string;
  @Input() price: string;
  @Input() description: string;
  @Input() priceType: string = 'Fixed-price';
  @Input() viewsNumber: string = '3 Views';
  @Input() hiredNumber: number = 0;
  @Input() messagesNumber: number = 0;
  @Input() skills: string;
  @Input() jobId: string;

  seeMoreFlag = false;

  // id = new Subject<string>();

  constructor(
    private _clientService: ClientService,
    private router: Router,
    private _sharingData: SharingDataService
  ) {}

  ngOnInit(): void {}

  getjobProposals(jobId: string) {
    console.log('انا هناااا');
    this._clientService.getJobProposal(jobId).subscribe(
      (response) => {
        console.log(response);

        console.log(jobId);
        this.router.navigateByUrl(`/profile/${jobId}/proposals`);
      },
      (error) => {
        console.log(' get job proposl error ');
        console.log(error);
      }
    );
  }
  seeMore() {
    this.seeMoreFlag = !this.seeMoreFlag;
  }
}
