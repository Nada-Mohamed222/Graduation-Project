import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUpworkProfileComponent } from './header-upwork-profile.component';

describe('HeaderUpworkProfileComponent', () => {
  let component: HeaderUpworkProfileComponent;
  let fixture: ComponentFixture<HeaderUpworkProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUpworkProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUpworkProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
