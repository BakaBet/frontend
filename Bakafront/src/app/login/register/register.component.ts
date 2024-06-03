import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
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
  FirstName: string = '';
  LastName: string = '';
  PhoneNumber: string = '';
  UserName: string = '';
  ErrorMessage: string = '';

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

    this.authService.register(registerData).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/sportbet']); // Rediriger vers la page d'accueil
      },
      error => {
        console.error('Registration failed', error);
        this.ErrorMessage = 'Registration failed. Please check your details.';
      }
    );
  }
}