import { Component } from '@angular/core';
import { SportmatchService } from '../../sportmatch.service'
import { MatchProduct } from '../../model/MatchProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listematch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listematch.component.html',
  styleUrls: ['./listematch.component.css']
})

export class ListematchComponent {
  matches!: MatchProduct[];
  
  constructor(private matchService: SportmatchService) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data;
    });
  }
}
