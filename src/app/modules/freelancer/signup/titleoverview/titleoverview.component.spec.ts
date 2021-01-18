import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleoverviewComponent } from './titleoverview.component';

describe('TitleoverviewComponent', () => {
  let component: TitleoverviewComponent;
  let fixture: ComponentFixture<TitleoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
