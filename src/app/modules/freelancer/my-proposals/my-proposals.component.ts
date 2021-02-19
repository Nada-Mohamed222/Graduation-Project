import { FreelancerService } from 'src/app/services/freelancer-service/freelancer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.css']
})
export class MyProposalsComponent implements OnInit {
  ProposalsLength: number;
  Proposals: Array<Object>;
  constructor(private _freelancerService: FreelancerService) { }

  ngOnInit(): void {
    this._freelancerService.getAllProposals().subscribe((response: Array<object>) => {
      this.Proposals = response;
      this.ProposalsLength = response.length

    }, error => {
      console.log("Can't get proposals");
    })
  }

}
