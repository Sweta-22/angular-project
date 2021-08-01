import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mycomp2',
  templateUrl: './mycomp2.component.html',
  styleUrls: ['./mycomp2.component.css']
})
export class Mycomp2Component implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      console.log(param.name);
    })
  }

}



