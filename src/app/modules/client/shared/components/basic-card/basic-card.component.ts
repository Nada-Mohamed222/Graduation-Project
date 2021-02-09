import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css'],
})
export class BasicCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle1: string;
  @Input() content1: string;
  @Input() subtitle2: string;
  @Input() content2: string;
  @Input() subtitle3: string;
  @Input() content3: string;
  @Input() subtitle4: string;
  @Input() content4: string;
  @Input() subtitle5: string;
  @Input() content5: string;
  @Input() route: string;
  constructor() {}

  ngOnInit(): void {}

  navigate() {}
}
