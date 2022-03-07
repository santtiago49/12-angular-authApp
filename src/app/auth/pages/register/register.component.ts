import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre  : ['', [Validators.required ] ],
    email   : ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder,
               private router: Router) { }

  register(){
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard');
  }
}
