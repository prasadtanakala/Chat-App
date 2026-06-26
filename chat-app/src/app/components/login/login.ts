import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [MatInputModule,MatCardModule,MatLabel,MatFormFieldModule,MatIconModule,MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
