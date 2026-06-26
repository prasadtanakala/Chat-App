import { Component, inject,  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MatInputModule,MatCardModule,MatLabel,MatFormFieldModule,MatIconModule,MatButtonModule,MatSelectModule,MatRadioModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

 router = inject(Router);

  registerbtn() {
    this.router.navigate(['/login']);
  }
}
