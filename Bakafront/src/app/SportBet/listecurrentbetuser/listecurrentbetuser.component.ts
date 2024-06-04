import { Component, Input, OnInit } from '@angular/core';
import { SportmatchService, UserBet } from '../../Service/sportmatch.service'
import { MatchProduct } from '../../model/MatchProduct';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-listecurrentbetuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listecurrentbetuser.component.html',
  styleUrl: './listecurrentbetuser.component.css'
})

export class ListecurrentbetuserComponent implements OnInit {

  userBets: UserBet[] = [];
  matches: { [key: string]: MatchProduct } = {}; 
  isBetsHidden = false;
  selectedFilter: string = 'all'; // Par défaut, afficher tous les paris

  constructor(private matchService: SportmatchService) { }

  ngOnInit() {
    this.loadBets();
    this.matchService.onBetsUpdated().subscribe(() => {
      this.loadBets();
    });
  }

  loadBets(): void {
    this.matchService.getSportBetUser().subscribe(bets => {
      if (this.selectedFilter === 'won') {
        bets = bets.filter(bet => bet.isWon);
      } else if (this.selectedFilter === 'lost') {
        bets = bets.filter(bet => !bet.isWon && bet.isEnded);
      } else if (this.selectedFilter === 'unfinished') {
        bets = bets.filter(bet => !bet.isEnded);
      }
      
      this.userBets = bets;
      
      const matchRequests = bets.map(bet => this.matchService.getMatch(bet.eventId));
      forkJoin(matchRequests).subscribe(matches => {
        matches.forEach(match => {
          this.matches[match.id] = match;
        });
      });
    });
  }

  toggleBetsVisibility(): void {
    this.isBetsHidden = !this.isBetsHidden;
  }

  changeFilter(filter: string): void {
    this.selectedFilter = filter;
    this.loadBets();
  }
}