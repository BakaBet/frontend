import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  userInfo: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(
      (response) => {
        this.userInfo = response;
        console.log('User Info:', this.userInfo);
      },
      (error) => {
        console.error('Failed to fetch user info:', error);
      }
    );
  }
}