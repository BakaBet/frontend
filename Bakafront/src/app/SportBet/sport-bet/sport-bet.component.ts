import { Component } from '@angular/core';
import { ListematchComponent } from '../listematch/listematch.component';
import { ListecurrentbetuserComponent } from '../listecurrentbetuser/listecurrentbetuser.component'
import { AuthService } from '../../Service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-sport-bet',
  standalone: true,
  imports: [CommonModule,FormsModule,ListematchComponent, ListecurrentbetuserComponent],
  templateUrl: './sport-bet.component.html',
  styleUrl: './sport-bet.component.css'
})

export class SportBetComponent {
  isLoggedIn: boolean = false;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
