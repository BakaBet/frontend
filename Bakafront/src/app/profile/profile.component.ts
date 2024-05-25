import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.profileService.getUserProfile().subscribe({
      next: (data) => {
        this.userProfile = data;
      },
      error: (error) => {
        console.error('Error fetching profile', error);
      }
    });
  }
}
