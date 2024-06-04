import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-life-bet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './life-bet.component.html',
  styleUrls: ['./life-bet.component.css']
})
export class LifeBetComponent implements OnInit {
  isLoggedIn = false;  

  bet = {
    title: '',
    odds: '',
    side: '',
    result1: '',
    result2: '',
    startingBetAmount: 0,
    allowNegotiation: false,
    allowJoining: false,
    result1Description: '',
    result2Description: ''
  };

  bets: any[] = [];

  constructor(private authService: AuthService) {}  

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  createBet() {
    if (!this.isLoggedIn) {
      alert('Vous devez être connecté pour créer un pari.');
      return;
    }
    this.bets.push({ ...this.bet });
    console.log(this.bets);
    this.resetBet();
  }

  resetBet() {
    this.bet = {
      title: '',
      odds: '',
      side: '',
      result1: '',
      result2: '',
      startingBetAmount: 0,
      allowNegotiation: false,
      allowJoining: false,
      result1Description: '',
      result2Description: ''
    };
  }
}
