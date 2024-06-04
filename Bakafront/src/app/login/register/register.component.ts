import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Email: string = '';
  Password: string = '';
  ConfirmPassword: string = '';
  FirstName: string = '';
  LastName: string = '';
  PhoneNumber: string = '';
  UserName: string = '';
  ErrorMessage: string = ''; // Initialize to an empty string

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const registerData = {
      email: this.Email,
      password: this.Password,
      confirmPassword: this.ConfirmPassword,
      firstName: this.FirstName,
      lastName: this.LastName,
      phoneNumber: this.PhoneNumber,
      userName: this.UserName,
      normalizedEmail: this.Email.toLowerCase(),
      normalizedUserName: this.UserName.toLowerCase()
    };

    this.authService.register(registerData)
      .subscribe(
        response => {
          console.log('Registration successful', response);
          this.router.navigate(['/sportbet']); // Rediriger vers la page d'accueil
        },
        error => {
          console.error('Registration failed', error);
          this.handleRegistrationError(error); // Call new error handling function
        }
      );
  }

  private handleRegistrationError(error: any) {
    // Check for expected error format (application/problem+json)
    if (error.error && error.error.errors) {
      // Extract specific error messages for each field
      this.ErrorMessage = ''; // Clear any existing error message
      const errors = error.error.errors;
      for (const field in errors) {
        errors[field].forEach((message: any) => {
          this.ErrorMessage += `- ${message}\n`; // Build a formatted error message
        });
      }
    } else {
      // Handle unexpected error format or network issues
      this.ErrorMessage = 'An error occurred during registration. Please try again.';
    }
  }
}
