import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerEmail: string = '';
  registerPassword: string = '';
  registerConfirmPassword: string = '';
  registerErrorMessage: string = '';

  constructor(private authService: AuthService) {}
  register() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      this.registerErrorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }
  }
}
