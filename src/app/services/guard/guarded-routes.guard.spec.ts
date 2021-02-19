import { TestBed } from '@angular/core/testing';

import { GuardedRoutesGuard } from './guarded-routes.guard';

describe('GuardedRoutesGuard', () => {
  let guard: GuardedRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardedRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
