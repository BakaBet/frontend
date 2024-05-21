import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { SportBetComponent } from './sport-bet/sport-bet.component'
import { LifeBetComponent } from './life-bet/life-bet.component'
import { ListematchComponent } from './listematch/listematch.component'

export const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'sportbet', component: SportBetComponent},
  {path: 'lifebet', component: LifeBetComponent},
  {path: 'test', component: ListematchComponent},
];