import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = 'https://localhost:7127/api/Account/login';
  private apiUrlLogout = 'https://localhost:7127/api/Account/logout';
  private apiUrlRegister = 'https://localhost:7127/api/Account/register';
  private apiUrlBakacoin= 'https://localhost:7127/api/Account/bakacoins';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    const loginData = {
      email: email,
      password: password,
      rememberMe: rememberMe
    };
    return this.http.post<any>(this.apiUrlLogin, loginData)
    .pipe(
      tap(response => {
        if (response) {
          this.isLoggedInSubject.next(true);
        }
      })
    );

  }

  register(registerData: { email: string; password: string; confirmPassword: string }): Observable<any> {
    return this.http.post(this.apiUrlRegister, registerData)
    .pipe(
      tap(response => {
        if (response) {
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  getBakacoins(): Observable<number> {
    return this.http.get<{ bakaCoins: number }>(this.apiUrlBakacoin)
      .pipe(map(response => response.bakaCoins));
  }

  logout(){
    return this.http.post(this.apiUrlLogout,null);
  }
}
