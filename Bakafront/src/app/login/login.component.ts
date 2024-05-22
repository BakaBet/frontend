import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';

  registerEmail: string = '';
  registerPassword: string = '';
  registerConfirmPassword: string = '';
  registerErrorMessage: string = '';

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

  register() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      this.registerErrorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }
  }
}
