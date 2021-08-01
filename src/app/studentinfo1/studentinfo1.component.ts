import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-studentinfo1',
  templateUrl: './studentinfo1.component.html',
  styleUrls: ['./studentinfo1.component.css']
})
export class Studentinfo1Component implements OnInit {
  staticArray:any[]=[
    {
    id:2,
    name:"sweta",
    address:"ctc"
  },
  {
    id:1,
    name:"rani",
    address:"bbsr"
  },
  {
    id:3,
    name:"sweta",
    address:"puri"
  }

  ]
  constructor(private service:MessageService) { }

  ngOnInit(): void {
    console.log(this.service.stringEqualfilter(this.staticArray,'name','sweta'))
  }
 btnClick()
 {
  //  const msgservice = new MessageService();
  //  msgservice.msgAlert();
   this.service.msgAlert();
 }
}
