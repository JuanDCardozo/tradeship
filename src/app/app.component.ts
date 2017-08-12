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

  loggedIn = this.tokenService.isLoggedIn();

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((params)=>{
      let accessToken = params['accessToken'];
      console.log('accessToken: '+ accessToken);
      //Store the token
      this.tokenService.storeToke(accessToken);
      let testToken = this.tokenService.retrieveToke();
      console.log('testToken: '+ testToken);
    })
  }



}
