import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedInputComponent } from './fixed-input.component';

describe('FixedInputComponent', () => {
  let component: FixedInputComponent;
  let fixture: ComponentFixture<FixedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
