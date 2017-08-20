import {
  TestBed,
  inject
} from '@angular/core/testing';

import {
  LoginSignupService
} from './login-signup.service';

describe('LoginSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSignupService]
    });
  });

  it('should be created', inject([LoginSignupService], (service: LoginSignupService) => {
    expect(service).toBeTruthy();
  }));
});
