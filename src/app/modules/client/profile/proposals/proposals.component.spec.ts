import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'angular-bootstrap-md';

import { ProposalsComponent } from './proposals.component';

describe('ProposalsComponent', () => {
  let component: ProposalsComponent;
  let fixture: ComponentFixture<ProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProposalsComponent],
      imports: [ModalModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
