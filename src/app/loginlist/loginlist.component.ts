import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginlist',
  templateUrl: './loginlist.component.html',
  styleUrls: ['./loginlist.component.css']
})
export class LoginlistComponent implements OnInit {
  list:any[]=[];

  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.service.getRecord().subscribe((res:any)=>{
      console.log(res);
      this.list = res.data;
    })

  
    }

  }



