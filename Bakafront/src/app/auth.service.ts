import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = 'https://localhost:7127/api/Account/login';
  private apiUrlBakacoin= 'https://localhost:7127/api/Account/bakacoins';
  constructor(private http: HttpClient) {}

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    const loginData = {
      email: email,
      password: password,
      rememberMe: rememberMe
    };
    return this.http.post<any>(this.apiUrlLogin, loginData);
  }

  getBakacoins(): Observable<number> {
    return this.http.get<{ bakaCoins: number }>(this.apiUrlBakacoin)
      .pipe(map(response => response.bakaCoins));
  }
}
