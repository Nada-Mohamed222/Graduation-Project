import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Oops, Something went wrong");
  }

  ngOnInit(): void {
  }

}
