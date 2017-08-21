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

@Injectable()
export class ProfileDataService {

  private profileData = undefined;

  constructor(private http: Http) {}

  private getProfileData() {
    try {
      this.http.post("http://localhost:8080/profile", {
        'test': "test"
      }).map((res) => res.json()).subscribe(profileData => this.profileData = profileData);
    } catch (err) {
      console.log(err);
    }
  }

  public getName() {
    return this.profileData.facebook.name;
  }

}
