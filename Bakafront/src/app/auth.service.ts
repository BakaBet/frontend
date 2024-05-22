import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7127/api/Account/login';
  constructor(private http: HttpClient) {}

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    const loginData = {
      email: email,
      password: password,
      rememberMe: rememberMe
    };
    return this.http.post<any>(this.apiUrl, loginData);
  }
}
