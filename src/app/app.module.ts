import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  AppRoutingModule
} from './app-routing/app-routing.module'
import {
  HttpModule
} from '@angular/http'
import {
  AppComponent
} from './app.component';
import {
  HomeComponent
} from './home/home.component';
import {
  LoginComponent
} from './login/login.component';
import {
  TokenService
} from './token-service/token.service';
import {
  SearchResultsComponent
} from './search-results/search-results.component';
import {
  DevelopersComponent
} from './developers/developers.component';
import {
  ProductDetailsComponent
} from './product-details/product-details.component';
import {
  ProfileComponent
} from './profile/profile.component';
import {
  ProductUploadComponent
} from './product-upload/product-upload.component';
import {
  LoginSignupService
} from './login/login-signup.service';
import {
  FormsModule
} from '@angular/forms';
import {
  ProfileDataService
} from './profileData-service/profile-data.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchResultsComponent,
    DevelopersComponent,
    ProductDetailsComponent,
    ProfileComponent,
    ProductUploadComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    TokenService,
    LoginSignupService,
    ProfileDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
