import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  registerForm: any;


  constructor(private formBuilder:FormBuilder) { 

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
       mobile: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
   })
  }
  get f() { return this.registerForm.controls;
   }
   onSubmit(){
     let res = confirm('SUCESS!!:)\n\n' + JSON.stringify(this.registerForm.value));
    if(res){
      this.registerForm.reset();
    }

   }



}
