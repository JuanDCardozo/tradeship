import { OnInit,Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { TokenService } from './token-service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor (private activatedRoute:ActivatedRoute,
    private tokenService: TokenService) {}

  loggedIn:boolean;

  ngOnInit(){
    //Get token from query string
    this.activatedRoute.queryParams.subscribe((params)=>{
      let accessToken = params['accessToken'];
      console.log('accessToken: '+ accessToken);
      //Store the token
      this.tokenService.storeToke(accessToken);
      //DEBUG
      // let testToken = this.tokenService.retrieveToke();
      //Check if loggedIn
      this.loggedIn = this.tokenService.isLoggedIn();
      //DEBUG
      // console.log('testToken: '+ testToken);
      console.log('LoggedIn: '+ this.loggedIn);
    })
  }

  Logout(){
    console.log('Logging out');
    try {
      this.tokenService.deleteToke();
    }
    catch(err) {
      console.log(err)
    }
  }

}
