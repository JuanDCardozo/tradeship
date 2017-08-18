import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginSignupService {
  private apiUrl = 'http://localhost:8080'; // URL to web api

  constructor(private http: Http,
    private router: Router) {}

  public redirectFacebook(){
    window.location.href="http://localhost:8080/auth/facebook/"
  }

  public redirectGoogle(){
    window.location.href='http://localhost:8080/auth/google/'
  }

  public postLogin(email, password){
    console.log("In postLogin")
    var params = JSON.stringify({email:email,password:password});
    try {
      console.log(params)
      this.http.post("http://localhost:8080/login",{password, email}).subscribe(res => console.log(res.text()));
    }
    catch(err){
      console.log(err);
    }
  }

  public postSignup(username, email, password){
    console.log("In postSignup")
    var params = JSON.stringify({email:email,password:password});
    try {
      console.log(params)
      // this.http.post("http://localhost:8080/signup",params);
      this.http.post("http://localhost:8080/signup",{password,email}).subscribe(res => window.location.href = res.text());
    }
    catch(err){
      console.log(err);
    }
  }
}
