import { Component, OnInit } from '@angular/core';
import { SportmatchService } from '../../Service/sportmatch.service'
import { MatchProduct, Outcome } from '../../model/MatchProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listematch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listematch.component.html',
  styleUrls: ['./listematch.component.css']
})

export class ListematchComponent implements OnInit {
  matches: MatchProductWithCote[] = [];
  
  constructor(private matchService: SportmatchService) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data.map(match => ({
        ...match,
        homeCote: this.getCote(match.outcomes, match.homeTeam),
        awayCote: this.getCote(match.outcomes, match.awayTeam),
        showDetails: false
      }));
    });
  }

  private getCote(outcomes: Outcome[], team: string): number {
    //const outcome = outcomes.find(outcome => outcome.name === team);
    //return outcome ? outcome.price : 0;
    return 1;
  }

  toggleDetails(match: MatchProductWithCote): void {
    match.showDetails = !match.showDetails;
  }
}

interface MatchProductWithCote extends MatchProduct {
  homeCote: number;
  awayCote: number;
  showDetails: boolean;
}