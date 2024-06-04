import { Component, Input, OnInit } from '@angular/core';
import { SportmatchService } from '../../Service/sportmatch.service'
import { MatchProduct, Outcome } from '../../model/MatchProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listecurrentbetuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listecurrentbetuser.component.html',
  styleUrl: './listecurrentbetuser.component.css'
})

export class ListecurrentbetuserComponent implements OnInit {

  @Input() matches: MatchProduct[] | undefined;
  
  userBets: any[] = [
    {
      matchId: 1,
      homeTeam: "Team A",
      awayTeam: "Team B",
      commenceTime: "2024-06-05 10:00:00",
      betAmount: 10,
      selection: "Team A",
      playCote: 2.5,
    },
    {
      matchId: 2,
      homeTeam: "Team C",
      awayTeam: "Team D",
      commenceTime: "2024-06-06 15:00:00",
      betAmount: 20,
      selection: "Draw",
      playCote: 3.0,
    }
  ];  // Array to store user's bets (hardcoded for demo)

  isBetsHidden = false; // Flag to track visibility

  constructor() { }

  ngOnInit() { }

  toggleBetsVisibility(): void {
    this.isBetsHidden = !this.isBetsHidden;
  }
}