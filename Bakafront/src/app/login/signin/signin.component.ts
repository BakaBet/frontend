import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  userName: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  login() {
    this.authService.login(this.userName, this.password, this.rememberMe).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/sportbet']); 
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    );
  }
}
