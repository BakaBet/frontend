import { Component, OnInit } from '@angular/core';
import { SportmatchService } from '../../Service/sportmatch.service'; // Assuming this import exists
import { MatchProduct } from '../../model/MatchProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { CoinBalanceService } from '../../coin-balance/coin-balance.service';

@Component({
  selector: 'app-listematch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listematch.component.html',
  styleUrls: ['./listematch.component.css']
})

export class ListematchComponent implements OnInit {
  matches: MatchProductWithCote[] = [];
  searchTeam: string = '';
  searchSport: string = '';
  searchDate: string = '';
  filteredMatches: MatchProductWithCote[] = [];
  amountInput: number = 0;

  
  constructor(private matchService: SportmatchService, private authService : AuthService, private coinBalanceService : CoinBalanceService) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data.map(match => ({
        ...match,
        commenceTimeFormatted: this.formatDate(match.commenceTime),
        showDetails: false,
        inputAmount: 0 // Initialize inputAmount to 0 (optional)
      }));
      this.filteredMatches = this.matches;
    });
  }

  private formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('fr-FR', options);
  }

  toggleDetails(match: MatchProductWithCote): void {
    match.showDetails = !match.showDetails;
  }

  onHomeWinClick(match : MatchProductWithCote) : void {
    const dataBet = {
      userId: this.authService.getUserId(),
      eventId: match.id,
      amount: match.inputAmount,
      team: match.homeTeam,
    };
    this.matchService.postBet(dataBet)     
    .subscribe(
      response => {
        console.log('Bet register', response);
        this.coinBalanceService.notifyBalanceChange();
      },
      error => {
        console.error('Bet failed', error);
      }
    );
   }

   onAwayWinClick(match : MatchProductWithCote) : void {
    const dataBet = {
      userId: this.authService.getUserId(),
      eventId: match.id,
      amount: match.inputAmount,
      team: match.awayTeam,
    };
    this.matchService.postBet(dataBet)     
    .subscribe(
      response => {
        console.log('Bet register', response);
        this.coinBalanceService.notifyBalanceChange();
      },
      error => {
        console.error('Bet failed', error);
      }
    );
   }

  applyFilters(): void {
    this.filteredMatches = this.matches.filter(match =>
      (this.searchTeam ? match.homeTeam.includes(this.searchTeam) || match.awayTeam.includes(this.searchTeam) : true) &&
      (this.searchSport ? match.sportTitle.includes(this.searchSport) : true) &&
      (this.searchDate ? new Date(match.commenceTime).toLocaleDateString('en-US') === new Date(this.searchDate).toLocaleDateString('en-US') : true)
      
    );
  }
}

interface MatchProductWithCote extends MatchProduct {
  showDetails: boolean;
  inputAmount: number;
}