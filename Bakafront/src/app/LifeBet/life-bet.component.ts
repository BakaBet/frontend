import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-bet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './life-bet.component.html',
  styleUrls: ['./life-bet.component.css']
})
export class LifeBetComponent {
  // Initialisation de toutes les propriétés nécessaires pour le pari
  bet = {
    title: '',
    odds: '',
    side: '',
    result1: '',
    result2: '',
    startingBetAmount: 0,  // La mise de départ pour le pari
    allowNegotiation: false,  // Permettre la négociation des cotes
    allowJoining: false,  // Permettre à d'autres de rejoindre le pari
    result1Description: '',  // Description pour le résultat 1
    result2Description: ''  // Description pour le résultat 2
  };

  bets: any[] = [];  // Tableau pour stocker les paris créés

  createBet() {
    // Ajoute une copie de l'objet bet actuel au tableau bets
    this.bets.push({ ...this.bet });
    console.log(this.bets);  // Affiche la liste des paris pour le débogage
    this.resetBet();  // Réinitialise le formulaire après la création d'un pari
  }

  resetBet() {
    // Réinitialise toutes les propriétés de l'objet bet
    this.bet = {
      title: '',
      odds: '',
      side: '',
      result1: '',
      result2: '',
      startingBetAmount: 0,
      allowNegotiation: false,
      allowJoining: false,
      result1Description: '',
      result2Description: ''
    };
  }
}
