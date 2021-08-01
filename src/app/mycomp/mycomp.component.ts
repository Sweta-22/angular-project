import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(val:any)
  {
    if(val === 'sec')
    this.router.navigate(['/second/sweta']);
    else
    this.router.navigate(['/third'],{queryParams: {name:"sweta"}});
  }

}
