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

  constructor(private coinBalanceService: CoinBalanceService, private authService: AuthService) {
    this.authSubscription = new Subscription();
}


  ngOnInit() {
    this.loadBalance();
    // Subscribe to login/logout events
    this.authSubscription = this.authService.isLoggedIn$.subscribe((loggedIn) => {
      if (!loggedIn) {
        // Clear coins when user logs out
        this.coins = 0;
      } else {
        this.loadBalance(); // Load balance again if user logs in
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
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