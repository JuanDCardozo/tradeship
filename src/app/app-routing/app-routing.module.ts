import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { DevelopersComponent } from '../developers/developers.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { ProductUploadComponent} from '../product-upload/product-upload.component';
import { ProductDetailsComponent} from '../product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'product-upload', component: ProductUploadComponent },
  { path: 'product-details', component: ProductDetailsComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
