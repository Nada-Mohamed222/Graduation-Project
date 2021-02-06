import { SharingDataService } from '../../shared/services/sharing-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  startForm!: FormGroup;
  wordCount: number = 0;
  jobName: string;
  category: string;
  description: string;
  additionalFiles: string;

  categories = ['option1', 'option2'];

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService
  ) {}

  ngOnInit(): void {
    this.startForm = this._formBuilder.group({
      JobName: ['', [Validators.required]],
      option: ['Front-End Development', [Validators.required]],
      Description: [
        '',
        [
          Validators.required,
          Validators.maxLength(5000),
          Validators.minLength(72),
        ],
      ],
      AdditionalFiles: [''],
    });
  }

  wordCounter(text: string) {
    this.wordCount = text.length;
  }

  // settting strat form data
  storeData() {
    const start = {
      jobName: this.startForm.controls['JobName'].value,
      category: this.startForm.controls['option'].value,
      description: this.startForm.controls['Description'].value,
      additionalFiles: this.startForm.controls['AdditionalFiles'].value,
    };
    this._sharingData.setStartData(start);
    console.log(start);
    console.log(this.startForm);
  }
}
