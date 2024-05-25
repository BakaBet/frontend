import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlayPosterComponent } from './play-poster-component/play-poster-component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, PlayPosterComponent, ProfileComponent, CommonModule,], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
