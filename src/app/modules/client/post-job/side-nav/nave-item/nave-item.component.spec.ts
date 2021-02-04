import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveItemComponent } from './nave-item.component';

describe('NaveItemComponent', () => {
  let component: NaveItemComponent;
  let fixture: ComponentFixture<NaveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
