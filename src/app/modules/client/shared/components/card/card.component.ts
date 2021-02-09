import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardIcon: string;
  @Input() cardTitle: string;
  @Input() cardText: string;
  @Input() id: string;
  @Input() checked: boolean;
  @Input() value: string;

  @Output() isChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  radioStatus: boolean;

  constructor() {}

  ngOnInit(): void {}

  radioChecked() {
    this.isChecked.emit(this.radioStatus);
    console.log('fired');
  }
}
