import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent,MatAutocomplete } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";


@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = [];
  allSkills: string[] = [
    "Design Patterns",
    "HTML 5",
    "AJAX",
    "CSS 3",
    "Javascript",
    "ES6",
    "Bootstrap",
    "jQuery",
    "jQuery UI",
    "Responsive Design",
    "Wordpress",
    "MongoDB",
    "NodeJS",
    "RESTful API",
    "GraphQL",
    "Git",
    "Jira",
    "Agile",
    "Scrum",
    "MVC",
    "Typescript",
    "Angular",
    "ReactJS",
    "VueJS",
    "React Native"
  ];

  @ViewChild("skillInput") skillInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our skill
    if ((value || "").trim()) {
      this.skills.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    this.skillCtrl.setValue(null);
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.skills.includes(event.option.viewValue) && (this.skills.length < 10)) {
      this.skills.push(event.option.viewValue);
    }
    this.skillInput.nativeElement.value = "";
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(
      skill => skill.toLowerCase().indexOf(filterValue) === 0
    );
  }


  formGroup: FormGroup;
  constructor(private _formBuilder:FormBuilder) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) =>
        skill ? this._filter(skill) : this.allSkills.slice()
      )
    );
   }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      // MainServices:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      // MainSkills:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      MainServices:['',[Validators.required]],
      MainSkills:['',[Validators.required]],
    })
  }
}
