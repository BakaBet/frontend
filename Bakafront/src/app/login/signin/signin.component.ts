import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}
  login() {
    this.authService.login(this.email, this.password, this.rememberMe).subscribe(
      response => {
        // Handle successful response
        console.log('Login successful', response);
      },
      error => {
        // Handle error response
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    );
  }
}
