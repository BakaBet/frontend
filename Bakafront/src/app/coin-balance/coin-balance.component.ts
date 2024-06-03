import { Component, OnInit } from '@angular/core';
import { CoinBalanceService } from './coin-balance.service';


@Component({
  selector: 'app-coin-balance',
  standalone: true,
  imports: [],
  templateUrl: './coin-balance.component.html',
  styleUrl: './coin-balance.component.css'
})
export class CoinBalanceComponent {
  coins: number = 0;

  constructor(private coinBalanceService: CoinBalanceService) { }

  ngOnInit() {
    this.coinBalanceService.getBakaCoins().subscribe({
      next: (response) => {
        console.log('Response:', response); 
        this.coins = response.bakaCoins;
      },
      error: (error) => {
        console.error('Failed to load coins:', error);
      }
    });
  }
}
