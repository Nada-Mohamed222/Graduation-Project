import { SharingDataService } from './../../../shared/services/sharing-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-fixed-input',
  templateUrl: './fixed-input.component.html',
  styleUrls: ['./fixed-input.component.css'],
})
export class FixedInputComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;

  fixedInput: FormGroup;
  price: number;

  @Output() isFixedVaild = new EventEmitter<boolean>();

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService
  ) {}

  ngOnInit(): void {
    this.fixedInput = this._formBuilder.group({
      //controls validations
      Price: ['', [Validators.required]],
    });
  }

  //the event emmiting action
  checkIfValid() {
    if (this.fixedInput.valid) {
      console.log(this.fixedInput.valid);
      this.isFixedVaild.emit(true);
    } else {
      console.log(this.fixedInput.valid);
      this.isFixedVaild.emit(false);
    }
  }
  // settting strat form data
  storeData() {
    const fixedPrice = {
      price: this.fixedInput.controls['Price'].value,
    };

    this._sharingData.setFixedPricData(fixedPrice);
    console.log(fixedPrice);
    // console.log(this.fixedInput);
  }

  //event handler
  checkValidationAndStoreData() {
    this.checkIfValid();
    this.storeData();
  }
}
