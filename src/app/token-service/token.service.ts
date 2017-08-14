import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  private loggedIn:boolean = false;
  private tokenKey:string = 'app_token';

  //Locally store the token and set loggedIn to true
  private store(content:Object) {
    localStorage.setItem(this.tokenKey, JSON.stringify(content));
    this.loggedIn = true;
    //DEBUG
    console.log('In private store');
  }

  //Locally retrieve the token and return it
  private retrieve() {
    let storedToken:string = localStorage.getItem(this.tokenKey);
    if(!storedToken) throw 'no token found';
    return storedToken;
  }

  private delete() {
    // let storedToken:string = localStorage.getItem(this.tokenKey)
    // localStorage.removeItem(storedToken);
    localStorage.clear();
    this.loggedIn = false;
  }

  //Function to check if logged in or not
  public isLoggedIn() {
    return this.loggedIn;
  }

  //Token Setter
  public storeToke(token:Object) {
    try {
      if (token) this.store(token);
      else console.log('token to store is undefined');
    }
    catch(err) {
      console.error(err);
    }
  }

  //Token Getter
  public retrieveToke() {
    let currentTime:number = (new Date()).getTime(), token = null;
    try {
      let storedToken = JSON.parse(this.retrieve());
      if(storedToken.tt1 < currentTime) throw 'invalid token found';
      token = storedToken;
    }
    catch(err) {
      console.error(err);
    }
    return token;
  }

  //Token Remover
  public deleteToke() {
    try {
      this.delete();
    }
    catch(err) {
      console.error(err);
    }
  }

}
