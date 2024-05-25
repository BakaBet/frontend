import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7127/api/Account/currentuser'; 
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching matches:', error);
          throw error; 
        })
      );
  }

}

