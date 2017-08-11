import { OnInit,Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';

  path = 'https://tradeship-api.herokuapp.com/auth/facebook';


  constructor (private activatedRoute:ActivatedRoute) {}

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((params)=>{
      console.log(params);
      let accessToken = params['accessToken'];
      console.log(accessToken);
    })
  }



}
