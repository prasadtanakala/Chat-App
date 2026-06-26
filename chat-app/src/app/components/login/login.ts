import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [MatInputModule,MatCardModule,MatLabel,MatFormFieldModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
