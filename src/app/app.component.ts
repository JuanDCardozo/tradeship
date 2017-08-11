import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';

  path = 'https://tradeship-api.herokuapp.com/auth/facebook';


  constructor (private http: Http) {}

  TestMethod() {
    this.http.get(this.path)
    .subscribe (
      (res: Response) => {
        console.log(res)
      }
    )
  }



}
