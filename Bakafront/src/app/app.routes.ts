import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportBetComponent } from './SportBet/sport-bet/sport-bet.component';
import { LifeBetComponent } from './life-bet/life-bet.component'
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './login/signin/signin.component';
import { RegisterComponent } from './login/register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent}, 
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sportbet', component: SportBetComponent},
  {path: 'lifebet', component: LifeBetComponent},
  {path: 'profil', component: ProfileComponent},
];