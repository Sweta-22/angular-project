import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  data:any;

  constructor(private service:LoginService,private router:Router) { }
  ngOnInit(): void {
  
  }
  submit(form:any){
    this.service.login(form).subscribe((res:any)=>{
      console.log(res);
      this.data=res.token;
      sessionStorage.setItem('sessionData',res.token);
      // sessionStorage.setItem('sessiondata', JSON.stringify(res.token))
      if(res.token){
      this.router.navigate(['/form6']);
      alert("login sucess");
      }
      else{
       alert("login failed");
      }
    },(error)=>
    {
console.log(error);
    }
  )
  }}

 

    


