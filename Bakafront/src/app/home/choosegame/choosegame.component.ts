import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choosegame',
  standalone: true,
  imports: [],
  templateUrl: './choosegame.component.html',
  styleUrl: './choosegame.component.css'
})
export class ChoosegameComponent {
  constructor(private router: Router) { }

  navigateToLifeBetting() {
    this.router.navigate(['/lifebet']); 
  }

  navigateToSportsBetting() {
    this.router.navigate(['/sportbet']);
  }
}
