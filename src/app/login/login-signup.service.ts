import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'

@Injectable()
export class LoginSignupService {
  private apiUrl = 'http://localhost:8080'; // URL to web api

  constructor(private http: Http) {}

  public redirectFacebook(){
    window.location.href="http://localhost:8080/auth/facebook/"
  }

  public redirectGoogle(){
    window.location.href='http://localhost:8080/auth/google/'
  }

  public postLogin(email, password){
  var params = JSON.stringify({ email:email,password:password});

  // this.http.post(this.apiUrl+"/login",params).catch(this.handleError);
  }

  public postSignup(username, email, password){
    console.log("In postSignup")
    var params = JSON.stringify({email:email,password:password});
    try {
      console.log(params)
      // this.http.post("http://localhost:8080/signup",params);
      this.http.post("http://localhost:8080/signup",{password,email}).subscribe(res => console.log(res.text()));
    }
    catch(err){
      console.log(err);
    }
  }
}
