import { Component, OnInit } from '@angular/core';
import { SportmatchService } from '../../Service/sportmatch.service'
import { MatchProduct, Outcome } from '../../model/MatchProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  filteredMatches: MatchProductWithCote[] = [];
  
  constructor(private matchService: SportmatchService) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data.map(match => ({
        ...match,
        homeCote: this.getCote(match.outcomes, match.homeTeam),
        awayCote: this.getCote(match.outcomes, match.awayTeam),
        showDetails: false
      }));
      this.applyFilters();
    });
  }

  private getCote(outcomes: Outcome[], team: string): number {
    const outcome = outcomes.find(outcome => outcome.name === team);
    return outcome ? outcome.price : 0;
  }

  toggleDetails(match: MatchProductWithCote): void {
    match.showDetails = !match.showDetails;
  }

  applyFilters(): void {
    this.filteredMatches = this.matches.filter(match => {
      const teamMatch = this.searchTeam ? match.homeTeam.toLowerCase().includes(this.searchTeam.toLowerCase()) || match.awayTeam.toLowerCase().includes(this.searchTeam.toLowerCase()) : true;
      const sportMatch = this.searchSport ? match.sportTitle.toLowerCase().includes(this.searchSport.toLowerCase()) : true;
      return teamMatch && sportMatch;
    });
  }
}

interface MatchProductWithCote extends MatchProduct {
  homeCote: number;
  awayCote: number;
  showDetails: boolean;
}