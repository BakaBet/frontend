import { Component, Input, OnInit } from '@angular/core';
import { SportmatchService, UserBet } from '../../Service/sportmatch.service'
import { MatchProduct } from '../../model/MatchProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listecurrentbetuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listecurrentbetuser.component.html',
  styleUrl: './listecurrentbetuser.component.css'
})

export class ListecurrentbetuserComponent implements OnInit {

  userBets: UserBet[] = [];
  isBetsHidden = false; // Flag to track visibility

  constructor(private matchService: SportmatchService) { }

  ngOnInit() { 
    const userId = 'user-id-example'; // Replace this with actual user ID logic
    this.matchService.getSportBetUser().subscribe(data => {
      this.userBets = data;
    });
  }

  toggleBetsVisibility(): void {
    this.isBetsHidden = !this.isBetsHidden;
  }
}