import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";


@Component({
  selector: 'app-upwork-landing-page',
  templateUrl: './upwork-landing-page.component.html',
  styleUrls: ['./upwork-landing-page.component.css']
})
export class UpworkLandingPageComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Upwork");
  }

  ngOnInit(): void {
  }

}
