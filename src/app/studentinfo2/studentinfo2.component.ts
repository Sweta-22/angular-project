import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-studentinfo2',
  templateUrl: './studentinfo2.component.html',
  styleUrls: ['./studentinfo2.component.css']
})
export class Studentinfo2Component implements OnInit {

  constructor(private service:MessageService) { }

  ngOnInit(): void {
  }
  btnClick()
 {
  //  const msgservice = new MessageService();
  //  msgservice.msgAlert();
   this.service.msgAlert();
 }
}
