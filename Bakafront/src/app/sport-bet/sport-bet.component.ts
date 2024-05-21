import { Component } from '@angular/core';
import { BettingCardComponent } from '../betting-card/betting-card.component';

@Component({
  selector: 'app-sport-bet',
  standalone: true,
  imports: [BettingCardComponent],
  templateUrl: './sport-bet.component.html',
  styleUrl: './sport-bet.component.css'
})
export class SportBetComponent {

}
