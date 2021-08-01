import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mycom4Component } from './mycom4/mycom4.component';

const routes: Routes = [
  {
  path:"fifth",
  component:Mycom4Component
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MymoduleRoutingModule { }
