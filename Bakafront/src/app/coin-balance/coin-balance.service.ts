import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from '../environments/environments';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class CoinBalanceService {
  private balanceUpdated = new BehaviorSubject<void>(undefined);
  
  constructor(private http: HttpClient, private authService: AuthService) { }
  
  getBakacoins(): Observable<number> {
    const userId = this.authService.getUserId();
    const url = `https://localhost:7023/api/Users/${userId}/balance`;
    return this.http.get<number>(url);
  }

  onBalanceUpdated(): Observable<void> {
    return this.balanceUpdated.asObservable();
  }

  notifyBalanceChange(): void {
    this.balanceUpdated.next();
  }
}