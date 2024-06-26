import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CoinBalanceComponent } from '../coin-balance/coin-balance.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule,FormsModule,CommonModule,ReactiveFormsModule, CoinBalanceComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/signin']);
  }
}
