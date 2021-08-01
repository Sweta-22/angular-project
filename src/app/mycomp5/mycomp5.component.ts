import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycomp5',
  templateUrl: './mycomp5.component.html',
  styleUrls: ['./mycomp5.component.css']
})
export class Mycomp5Component implements OnInit
{
 
  email:string="swetarani@gmail.com"
  password:string="sweta@123"


  constructor() { }


  ngOnInit(): void { 

  }
        //  submit(form: any){
        //   var firstname = form.email;
        //   console.log(firstname);
        
        //   var lastname = form.password;
        //   console.log(lastname);
        
        //   var comment = form.comment;
        //   console.log(comment);
        // }
        submit(form: any){
          if ( this.email === form.email&& this.password === form.password)
          {
            alert("login sucess");
          }
          else{
            alert("invalid credentials");
          }


        }

 
      }
  

        

