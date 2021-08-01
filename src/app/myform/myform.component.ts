import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  form: any;
 
   

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)]),
      body: new FormControl('', Validators.required)
    });

  }

  get f(){
    return this.form.controls;
}
 
submit(){
    if(this.form.status === 'VALID'){
      console.log(this.form.value);
      this.ngOnInit();
    }
}

setValue(){
    this.form.setValue({name: 'sweta pradhan', email: 'swetarani@gmail.com',password:'swetaaa', body: 'reactive form'});
}

resetValue(){
    this.form.reset({name: '', email: '', body: ''});
}
  
}


