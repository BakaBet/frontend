import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Email: string = '';
  Password: string = '';
  ConfirmPassword: string = '';
  ErrorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const registerData = {
      email: this.Email,
      password: this.Password,
      confirmPassword: this.ConfirmPassword
    };

    this.authService.register(registerData).subscribe(
      response => {
        // Handle successful registration
        console.log('Registration successful', response);
        this.router.navigate(['/sportbet']); // Rediriger vers la page d'accueil
      },
      error => {
        // Handle error response
        console.error('Registration failed', error);
        this.ErrorMessage = 'Registration failed. Please check your details.';
      }
    );
  }
}
