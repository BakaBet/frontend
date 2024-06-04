import { Component } from '@angular/core';
import { ListematchComponent } from '../listematch/listematch.component';
import { ListecurrentbetuserComponent } from '../listecurrentbetuser/listecurrentbetuser.component'

@Component({
  selector: 'app-sport-bet',
  standalone: true,
  imports: [ListematchComponent, ListecurrentbetuserComponent],
  templateUrl: './sport-bet.component.html',
  styleUrl: './sport-bet.component.css'
})

export class SportBetComponent {

}
