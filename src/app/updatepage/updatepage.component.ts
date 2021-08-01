import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})
export class UpdatepageComponent implements OnInit {
  //  id:any;
  custid:any;
  phone:any;
  data:any={};
  


  constructor(private service:MessageService) { }

  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem('data') || '{}');
    //  this.id=this.data.id;
    this.custid=this.data.custid;
    this.phone=this.data.phone;
  }
  onSubmit(form:any){
    this.service.updateData(this.data.id,form).subscribe(res=>
      {
        console.log(res);
      },(error)=>
      {
console.log(error);
      }
    )
    }
  }


