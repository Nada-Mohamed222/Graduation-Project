import { CssSelector } from '@angular/compiler';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { JobPost } from 'src/app/services/job-service/job-post.service';
import { Job } from 'src/app/models/job';

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

  constructor() {}

  ngOnInit(): void {}
}
