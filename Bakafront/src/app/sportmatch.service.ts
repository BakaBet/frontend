import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, switchMap, map, catchError } from 'rxjs';
import { MatchProduct } from './model/MatchProduct';
import { environment } from './environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SportmatchService {
  private apiUrl = 'https://localhost:7127/api/SportBets';
  constructor(private http: HttpClient) { }

  getMatches(): Observable<MatchProduct[]> {  
    return this.http.get<MatchProduct[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching matches:', error);
          throw error; 
        })
      );
  }
}
