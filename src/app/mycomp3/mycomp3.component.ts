import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mycomp3',
  templateUrl: './mycomp3.component.html',
  styleUrls: ['./mycomp3.component.css']
})
export class Mycomp3Component implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(query=>{
      console.log(query)
    })
  }

}
