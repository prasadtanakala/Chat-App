import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatIconModule,MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
