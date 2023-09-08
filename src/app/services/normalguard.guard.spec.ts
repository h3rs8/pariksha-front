import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { normalguardGuard } from './normalguard.guard';

describe('normalguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => normalguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
