import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpworkLandingPageComponent } from './upwork-landing-page.component';

describe('UpworkLandingPageComponent', () => {
  let component: UpworkLandingPageComponent;
  let fixture: ComponentFixture<UpworkLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpworkLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpworkLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
