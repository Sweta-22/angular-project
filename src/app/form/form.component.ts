import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:FormService) { }

  ngOnInit(): void {
    this.service.getAllData().subscribe(res=>{
      console.log(res);
    })
  }

}
