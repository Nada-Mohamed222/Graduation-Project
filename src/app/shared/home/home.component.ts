import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isAppeared:boolean = false;
  isSignedUp:boolean = true;
  formGroup: FormGroup;

  constructor( private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
    this.formGroup = this._formBuilder.group({
      FirstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      LastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      Email:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.email]],
      UserName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    })

  }
  apperUserName(){
    this.isAppeared = true;
  }

  @Output() statusEvent = new EventEmitter<Boolean>();

  changeStatus() {
    this.isSignedUp = true;
    // this.statusEvent.emit(this.isSignedUp)
  }
}
