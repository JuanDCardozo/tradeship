import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http'
import {
  Observable
} from 'rxjs';
import {
  TokenService
} from '../token-service/token.service';

@Injectable()
export class ProfileDataService {

  private profileData = undefined;

  constructor(private http: Http,
    private tokenService: TokenService) {}

  private getProfileData() {
    try {
      //DEBUG
      console.log('In getProfileData');
      var headers = new Headers();
      let accessToken = this.tokenService.retrieveToke();
      headers.append('Authorization', accessToken );
      console.log('headers: '+headers.get('Authorization'));
      this.http.get("http://localhost:8080/profile", {
        headers: headers
      })

      // this.http.post("http://localhost:8080/profile", {} , {}
      // token ).map((res) => res.json()).subscribe(profileData => this.profileData = profileData);
    } catch (err) {
      console.log(err);
    }
  }

  public getName() {
    this.getProfileData();
    // return this.profileData.facebook.name;
  }

}
