import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, BehaviorSubject, switchMap, map, catchError } from 'rxjs';
import { MatchProduct } from '../model/MatchProduct';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SportmatchService {
  private apiUrl = 'https://localhost:7023/api/Events/sports';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month from 0 to 11
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  }

  getMatches(): Observable<MatchProduct[]> {
    return this.http.get<MatchProduct[]>(this.apiUrl).pipe(
      map(matches => matches.map(match => ({
        ...match,
        commenceTime: this.formatDate(match.commenceTime)
      }))),
      catchError(error => {
        console.error('Error fetching matches:', error);
        throw error;
      })
    );
  }

  getSportBetUser(): Observable<UserBet[]> {
    const url = `https://localhost:7023/api/Bet/${this.authService.getUserId()}`;
    return this.http.get<UserBet[]>(url).pipe(
      map(bets => bets.map(bet => ({
        ...bet,
        datePlaced: this.formatDate(bet.datePlaced)
      }))),
      catchError(error => {
        console.error('Error fetching user sport bets:', error);
        throw error;
      })
    );
  }

  getMatch(eventId: string): Observable<MatchProduct> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.get<MatchProduct>(url).pipe(
      map(match => ({
        ...match,
        commenceTime: this.formatDate(match.commenceTime)
      })),
      catchError(error => {
        console.error('Error fetching match:', error);
        throw error;
      })
    );
  }

  getBakacoins(): Observable<number> {
    const userId = this.authService.getUserId();
    const url = `https://localhost:7023/api/Users/${userId}/balance`;
    return this.http.get<number>(url);
  }
}

export interface UserBet {
  id: number;
  userId: string;
  eventId: string;
  amount: number;
  datePlaced: string;
  odd: number;
  isWon: boolean;
}
