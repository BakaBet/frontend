import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, switchMap, map, catchError } from 'rxjs';
import { MatchProduct } from '../model/MatchProduct';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SportmatchService {
  private apiUrl = 'https://localhost:7023/api/Events/sports';
  constructor(private http: HttpClient) { }

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
}
