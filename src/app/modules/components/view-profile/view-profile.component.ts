import { Freelancer } from './../../../models/freelancer';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client-service/client.service';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  username: string = '';
  freelancer: Freelancer = new Freelancer();

  constructor(
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this._freelancerService.getByUserName(this.username).subscribe(
        (response: Freelancer) => {
          this.freelancer = response;
          console.log(response)
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/error-404']);
        }
      );
    });
  }
}
