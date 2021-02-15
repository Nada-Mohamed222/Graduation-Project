import { ActivatedRoute, Router } from '@angular/router';
import { FreelancerService } from './../../../../../services/freelancer-service/freelancer.service';
import { ClientService } from './../../../../../services/client-service/client.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrls: ['./proposal-card.component.css'],
})
export class ProposalCardComponent implements OnInit {
  @Input() image: string =
    'https://cdn.dribbble.com/users/230875/screenshots/12163492/media/9ccf7b00b9933758d84c8f6b2bf9185f.jpg?compress=1&resize=1000x750';
  @Input() freelancerName: string = 'freelancerName';
  @Input() jobTitle: string = 'frontend ';
  @Input() coverLetter: string =
    '    Good morning sir , i will be very happy to serve you and i can do it for you with shortest time possible but we need to discuss the details ofthe project first thank you';
  @Input() userName: string;
  constructor(
    private _freelacerService: FreelancerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  visitFreelancer(userName: string) {
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
