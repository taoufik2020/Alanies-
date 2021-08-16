import { TestBed } from '@angular/core/testing';

import { JwtInterveptorInterceptor } from './jwt-interveptor.interceptor';

describe('JwtInterveptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInterveptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtInterveptorInterceptor = TestBed.inject(JwtInterveptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
