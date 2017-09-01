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

  constructor(private http: Http,
    private tokenService: TokenService) {}

  //************************************************************
  // Private
  //************************************************************
  private hasProfileData: boolean = false;
  private key: string = 'profileData';

  private httpGetProfileData() {
    try {
      var headers = new Headers();
      let accessToken = this.tokenService.retrieveToke();
      headers.append('Authorization', accessToken);
      this.http.get("http://localhost:8080/profile", {
        headers: headers
      }).subscribe(res => this.store(res));

    } catch (err) {
      console.log(err);
    }
  }

  //Locally store the token and set loggedIn to true
  private store(content: Object) {
    localStorage.setItem(this.key, JSON.stringify(content));
    this.hasProfileData = true;
  }

  //Locally retrieve the token and return it
  private retrieve() {
    let profileData: string = localStorage.getItem(this.key);
    if (!profileData) throw 'no profile data found';
    return JSON.stringify(profileData);
  }

  private delete() {
    localStorage.clear();
    this.hasProfileData = false;
  }

  //************************************************************
  // Public
  //************************************************************

  public requestProfileData() {
    this.httpGetProfileData();
  }
  //Function to check if logged in or not
  public isStored() {
    return this.hasProfileData;
  }

  //Token Getter
  public getName() {
    let profileData = this.retrieve();
    console.log(profileData);
    return profileData;
  }

  //Token Remover
  public deleteProfileData() {
    try {
      this.delete();
    } catch (err) {
      console.error(err);
    }
  }

}
