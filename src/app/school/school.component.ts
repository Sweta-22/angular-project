import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  custdata:any[]=[];

  constructor(private service:MessageService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllCustomer().subscribe(
      (result:any)=>{
        console.log(result);
        this.custdata=result.data;
      },(error)=>
      {
        console.log(error);
      }
    )
   

  }
  EditUser(val:any)
  {
    localStorage.setItem('data', JSON.stringify(val))
    this.router.navigate(['/emp']);
  }


  deleteUser(val:any) {
    this.service.deleteData(val).subscribe(res =>{
      console.log(res);
      this.ngOnInit();
    },(error) =>{
      console.log(error);
    })
  }
 
}
