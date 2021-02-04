import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  PostTitle:string="Seeking assistance with updating website which is currently working with WordPress with specific plugins.";
  priceType:string="Fixed-price";
  viewsNumber:string='3 Views'
  hiredNumber:number=0;
  messagesNumber:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
