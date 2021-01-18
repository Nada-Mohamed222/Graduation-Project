import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiselevelComponent } from './expertiselevel.component';

describe('ExpertiselevelComponent', () => {
  let component: ExpertiselevelComponent;
  let fixture: ComponentFixture<ExpertiselevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiselevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiselevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
