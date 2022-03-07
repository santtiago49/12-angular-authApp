import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre  : ['', [Validators.required ] ],
    email   : ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }


  register(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }
}
