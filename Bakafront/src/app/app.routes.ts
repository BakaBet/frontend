import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportBetComponent } from './sportbet/sport-bet/sport-bet.component'
import { LifeBetComponent } from './life-bet/life-bet.component'
import { SigninComponent } from './login/signin/signin.component';
import { RegisterComponent } from './login/register/register.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sportbet', component: SportBetComponent},
  {path: 'lifebet', component: LifeBetComponent},
];