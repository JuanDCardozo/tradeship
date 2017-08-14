import { Injectable } from '@angular/core';

@Injectable()
export class LoginSignupService {

  public redirectFacebook(){
    window.location.href="http://localhost:8080/auth/facebook/"
  }

  public redirectGoogle(){
    window.location.href='http://localhost:8080/auth/google/'
  }

  public postLogin(email, password){

  }

  public postSignup(username,email, password){

  }
}
