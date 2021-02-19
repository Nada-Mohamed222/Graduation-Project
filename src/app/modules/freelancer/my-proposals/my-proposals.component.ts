import { Title } from '@angular/platform-browser';
import { FreelancerService } from 'src/app/services/freelancer-service/freelancer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.css']
})
export class MyProposalsComponent implements OnInit {

  Proposals: Array<Object>;
  constructor(private _freelancerService: FreelancerService, private titleService: Title) {
    this.titleService.setTitle("My Proposals");
  }

  ngOnInit(): void {
    this._freelancerService.getAllProposals().subscribe((response: Array<object>) => {
      this.Proposals = response;
    }, error => {
      console.log("Can't get proposals");
    })
  }

}
