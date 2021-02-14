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

    // if (localStorage.getItem("start") !== null){
    //   var start = JSON.parse(localStorage.getItem('start'));
    //   console.log(start)
    //   this.startForm.controls['JobName'].setValue(start.jobName);
    //   this.startForm.controls['option'].setValue(start.category),
    //   this.startForm.controls['Description'].setValue(start.description),
    //   this.startForm.controls['AdditionalFiles'].setValue(start.jobName)


    // }
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
    // localStorage.setItem("start", JSON.stringify(start))
    this._sharingData.setStartData(start);
    this._sharingData.isStartDone.next(true);
    console.log(start);
    console.log(this.startForm);
  }
}
