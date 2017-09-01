import {
  OnInit,
  DoCheck,
  Component
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';
import {
  TokenService
} from './token-service/token.service';
import {
  ProfileDataService
} from './profileData-service/profile-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private profileDataService: ProfileDataService) {}

  loggedIn: boolean = false;

  ngOnInit() {
    //Get token from query string
    this.activatedRoute.queryParams.subscribe((params) => {
      let accessToken = params['accessToken'];
      console.log('accessToken: ' + accessToken);
      //Store the token
      this.tokenService.storeToke(accessToken);

    })
  }

  //Used to check for changes that Angular won't detect
  ngDoCheck() {
    //Check if loggedIn
    this.loggedIn = this.tokenService.isLoggedIn();
    //Check if token deleted
    let token = this.tokenService.retrieveToke();

  }

  Logout() {
    //this.profileDataService.getName();
    console.log('Logging out');
    try {
      this.tokenService.deleteToke();
    } catch (err) {
      console.log(err)
    }
  }

}
