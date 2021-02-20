import { Title } from '@angular/platform-browser';
import { SharingDataService } from '../../shared/services/sharing-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  startForm?: FormGroup;
  wordCount: number = 0;
  jobName: any = '';
  category: string = '';
  description: any = '';
  additionalFiles: string;

  // initail value of the end user data
  endUserData = {
    jobName: '',
    category: 'Front-End Development',
    description: '',
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Post New Job - Get Started");
  }

  ngOnInit(): void {
    this.startForm = this._formBuilder.group({
      JobName: [this.jobName, [Validators.required]],
      option: [this.category, [Validators.required]],
      Description: [
        this.description,
        [
          Validators.required,
          Validators.maxLength(5000),
          Validators.minLength(72),
        ],
      ],
      AdditionalFiles: [''],
    });
    // set value of the end user data
    this.endUserData = this._sharingData.getStartData();
    this.jobName = this.endUserData.jobName;
    this.description = this.endUserData.description;
    this.category = this.endUserData.category;
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
    this._sharingData.isStartDone.next(true);

    console.log(start);
    console.log(this.startForm);
  }
}
