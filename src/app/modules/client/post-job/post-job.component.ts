import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Post New Job");
  }

  ngOnInit(): void { }
}
