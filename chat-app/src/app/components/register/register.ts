import { Component, inject,  } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports: [MatInputModule,MatCardModule,MatLabel,MatFormFieldModule,MatIconModule,MatButtonModule,MatSelectModule,MatRadioModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

 router = inject(Router);
registerForm!:FormGroup;
constructor(private fb : FormBuilder){
  this.registerForm = this.fb.group({
    fullName:['',[Validators.required]],
    middleName:[''],
    lastName:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    phone: ['', [
        Validators.required,
        Validators.pattern('^[6-9][0-9]{9}$')
      ]],
    gender:[''],
    jobrole:['']


  })
}
  registerbtn() {
    if(this.registerForm.valid){
      const userVlaues = this.registerForm.value;
      console.log(this.registerForm.value,'752::');
      const users=  JSON.parse( localStorage.getItem('users')|| '[]')
      users.push(userVlaues)
      console.log(users,'121::')
      localStorage.setItem('users',JSON.stringify(users));
      this.router.navigate(['/login']);
    }
  }
  btn1(){
    this.router.navigate([''])
  }
}
