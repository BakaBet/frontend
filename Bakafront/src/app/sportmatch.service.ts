import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, switchMap, map, catchError } from 'rxjs';
import { MatchProduct } from './model/MatchProduct';
import { environment } from './environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SportmatchService {

  constructor(private http: HttpClient) { }

  getMatches(): Observable<MatchProduct[]> {  
    return this.http.get<MatchProduct[]>(environment.backendClient)
      .pipe(
        catchError(error => {
          console.error('Error fetching matches:', error);
          throw error; // Re-throw the error to be caught by the subscriber
        })
      );
  }
}
