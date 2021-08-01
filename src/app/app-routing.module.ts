import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LogComponent } from './log/log.component';
import { LoginlistComponent } from './loginlist/loginlist.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { Mycomp2Component } from './mycomp2/mycomp2.component';
import { Mycomp3Component } from './mycomp3/mycomp3.component';
import { Mycomp5Component } from './mycomp5/mycomp5.component';
import { MyformComponent } from './myform/myform.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegisterComponent } from './register/register.component';
import { SchoolComponent } from './school/school.component';
import { Studentinfo1Component } from './studentinfo1/studentinfo1.component';
import { Studentinfo2Component } from './studentinfo2/studentinfo2.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';

const routes: Routes = [
  {
  path:"first",
  component:MycompComponent
},
{
  path:"second/:name",
  
  component:Mycomp2Component
},
  {
    path: "third",
    component: Mycomp3Component
  },

  {
    path: "html",
    component: Mycomp5Component
  },
  {
    path: "reactive",
    component: ReactiveformComponent
  },
  {
    path: "fourth",
    loadChildren: () => MymoduleModule
  },
  // {
  //   path: "school",
  //   component:SchoolComponent
  // },
  {
    path: "student1",
    component:Studentinfo1Component
  },
  {
    path: "student2",
    component:Studentinfo2Component
  },
  {
    path: "school",
    component:SchoolComponent
  },
  {
    path: "emp",
    component:UpdatepageComponent
  },
  {
    path: "form2",
    component:MyformComponent
  },
  {
    path: "form3",
    component:FormComponent
  },
  {
    path: "form4",
    component:RegisterComponent
  },
  {
    path: "form5",
    component:LogComponent
  },
  {
    path: "form6",
    component:LoginlistComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
