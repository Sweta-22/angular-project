import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any=[];

  constructor(private service:LoginService) { }
  ngOnInit(): void {
    
  }
  submit(form:any){
    this.service.addRecord(form).subscribe(res=>
      {
        console.log(res);
        alert("registration sucess");
      },(error)=>
      {
console.log(error);
      }
    )
    }

 
  

}
