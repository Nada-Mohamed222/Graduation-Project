import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerJobsComponent } from './freelancer-jobs.component';

describe('FreelancerJobsComponent', () => {
  let component: FreelancerJobsComponent;
  let fixture: ComponentFixture<FreelancerJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
