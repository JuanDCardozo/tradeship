import { Component, OnInit } from '@angular/core';
import { LoginSignupService} from './login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showSignUp:boolean = true;

  constructor(private loginSignupService:LoginSignupService) { }

  ngOnInit() {
  }

  public facebook(){
    console.log("Redirecting to Facebook for Auth");
    try {
      this.loginSignupService.redirectFacebook();
    }
    catch(err) {
      console.log(err)
    }
  }

  public google(){
    console.log("Redirecting to Google for Auth");
    try {
      this.loginSignupService.redirectGoogle();
    }
    catch(err) {
      console.log(err)
    }
  }

  public login(email, password){
    console.log("Redirecting to Google for Auth");
    try {
      this.loginSignupService.postLogin(email,password);
    }
    catch(err) {
      console.log(err)
    }
  }

  public signup(username,email, password){
    console.log("Redirecting to Google for Auth");
    try {
      this.loginSignupService.postSignup(username,email, password);
    }
    catch(err) {
      console.log(err)
    }
  }


}
