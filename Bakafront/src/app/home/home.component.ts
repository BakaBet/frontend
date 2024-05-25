import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ChoosegameComponent } from './choosegame/choosegame.component'
import { HowtoplayComponent } from './howtoplay/howtoplay.component'
import { IncommingmatchesComponent } from './incommingmatches/incommingmatches.component'
import { PlayeroftheweekComponent } from './playeroftheweek/playeroftheweek.component'
import { OtherComponent } from './other/other.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HowtoplayComponent,OtherComponent,IncommingmatchesComponent,PlayeroftheweekComponent,ChoosegameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}


