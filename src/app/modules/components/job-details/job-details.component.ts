import { Component, OnInit } from '@angular/core';
import { FreelancerService } from './../../../services/freelancer.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private _freelancerService:FreelancerService) { }

  job:Object;

  ngOnInit(): void {
  }

}
