import { Component, OnInit } from '@angular/core';
import { LoginSignupService} from './login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showSignUp:boolean = true;
  isAvailable:boolean;

  constructor(private loginSignupService:LoginSignupService) {
    this.isAvailable = true;
  }

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

  public login(value: any){
    try {
      console.log(value)
      console.log("In login");
      this.loginSignupService.postLogin(value.username_email,value.password);
    }
    catch(err) {
      console.log(err)
    }
  }

  public signup(value: any){
    try {
        console.log(value);
        console.log("In signup");
        this.loginSignupService.postSignup(value.username, value.email, value.password);
    }
    catch(err) {
      console.log(err)
    }
  }

}
