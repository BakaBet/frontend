import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CoinBalanceService {
  private apiUrl = 'https://localhost:7127/api/Account/bakacoins';

  constructor(private http: HttpClient) { }

  getBakaCoins(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.SportsOddsApi.ApiKey}` 
    });

    return this.http.get<{bakaCoins: number}>(this.apiUrl, { headers });
  }
}
