import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-bet',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './life-bet.component.html',
  styleUrls: ['./life-bet.component.css']
})
export class LifeBetComponent {
  bet = { title: '', odds: '', side: '', result1: '', result2: '' };
  bets: any[] = [];  

  createBet() {
    this.bets.push({...this.bet});  
    console.log(this.bets);
    this.resetBet();  
  }

  resetBet() {
    this.bet = { title: '', odds: '', side: '', result1: '', result2: '' };
  }
}
