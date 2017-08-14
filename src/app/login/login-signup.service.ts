import { Injectable } from '@angular/core';

private apiUrl = 'http://localhost:8080'; // URL to web api

@Injectable()
export class LoginSignupService {

  public redirectFacebook(){
    window.location.href="http://localhost:8080/auth/facebook/"
  }

  public redirectGoogle(){
    window.location.href='http://localhost:8080/auth/google/'
  }

  public postLogin(email, password){
  var params = JSON.stringify({ email:email,password:password});

  this.http.post(this.apiUrl+"/login",params).catch(this.handleError);
}
  }

  public postSignup(username,email, password){
      var params = JSON.stringify({ email:email,password:password});
    this.http.post(this.apiUrl+"/login",params).catch(this.handleError);
  }
}
