import { Component, OnInit } from '@angular/core';
// import { Job } from 'src/app/models/job';
import { FreelancerService } from './../../../../services/freelancer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _freelancerService:FreelancerService, 
    private route: ActivatedRoute, 
    private router: Router) { }
    
  freelancer: Freelancer = new Freelancer();
  skill:string ="";
  jobs:Array<object>=[];
  searchedValue: string;

  ngOnInit(): void {
    this._freelancerService.get().subscribe((response:Freelancer)=>{
      this.freelancer = response;
      console.log(response)
    },error=>{
      console.log(error);
      alert("Wrong Error!");
    })

    if (!this.route.snapshot.data.search){
      window.scrollTo(0, 0);
      this._freelancerService.getAllJobs().subscribe((response:any)=> {
      console.log(response)
      this.jobs = response.jobs      
    },error=>{
      alert("Error")
    }

    )}else {
      this.route.params.subscribe(params =>{this.skill =  params["skill"]
      window.scrollTo(0, 0);
      this._freelancerService.searchBySkill(this.skill).subscribe((response:any)=> {
      console.log(response)
      this.jobs = response.jobs      
    },error=>{
      alert("Error")
    }
    )})
  }}

  submitSearch(searchedValue){
    this.router.navigate([`/job/search/${searchedValue}`]);
  }
}

  
