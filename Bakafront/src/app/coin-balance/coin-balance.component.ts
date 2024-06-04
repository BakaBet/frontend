import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoinBalanceService } from './coin-balance.service';
import { AuthService } from '../Service/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-coin-balance',
  standalone: true,
  imports: [],
  templateUrl: './coin-balance.component.html',
  styleUrl: './coin-balance.component.css'
})

export class CoinBalanceComponent implements OnInit, OnDestroy {
  coins: number = 0;
  errorMessage: string = '';
  private authSubscription: Subscription;
  private balanceSubscription: Subscription;

  constructor(private coinBalanceService: CoinBalanceService, private authService: AuthService) {
    this.authSubscription = new Subscription();
    this.balanceSubscription = new Subscription();
  }

  ngOnInit() {
    this.loadBalance();
    this.authSubscription = this.authService.isLoggedIn$.subscribe((loggedIn) => {
      if (!loggedIn) {
        this.coins = 0;
      } else {
        this.loadBalance(); 
      }
    });

    this.balanceSubscription = this.coinBalanceService.onBalanceUpdated().subscribe(() => {
      this.loadBalance();
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.balanceSubscription) {
      this.balanceSubscription.unsubscribe();
    }
  }

  loadBalance() {
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