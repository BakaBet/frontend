import { Component, OnInit } from '@angular/core';
import { CoinBalanceService } from './coin-balance.service';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-coin-balance',
  standalone: true,
  imports: [],
  templateUrl: './coin-balance.component.html',
  styleUrl: './coin-balance.component.css'
})
export class CoinBalanceComponent implements OnInit {
  coins: number = 0;
  errorMessage: string = '';

  constructor(private coinBalanceService: CoinBalanceService, private authService: AuthService) { }

  ngOnInit() {
    const userId = this.authService.getUserId();
    if (!userId) {
      this.errorMessage = 'User is not logged in';
      return;
    }
    
    this.coinBalanceService.getBakacoins().subscribe({
      next: (response) => {
        console.log('Response:', response); 
        this.coins = response;
      },
      error: (error) => {
        console.error('Failed to load coins:', error);
        this.errorMessage = 'Failed to load coins';
      }
    });
  }
}