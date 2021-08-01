import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { MycompComponent } from './mycomp/mycomp.component';
import { Mycomp2Component } from './mycomp2/mycomp2.component';
import { Mycomp3Component } from './mycomp3/mycomp3.component';
import { Mycomp5Component } from './mycomp5/mycomp5.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Studentinfo1Component } from './studentinfo1/studentinfo1.component';
import { Studentinfo2Component } from './studentinfo2/studentinfo2.component';
import { SchoolComponent } from './school/school.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';
import { FormComponent } from './form/form.component';
import { MyformComponent } from './myform/myform.component';
import { RegisterComponent } from './register/register.component';
import { LogComponent } from './log/log.component';
import { LoginlistComponent } from './loginlist/loginlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    Mycomp2Component,
    Mycomp3Component,
    Mycomp5Component,
    ReactiveformComponent,
    Studentinfo1Component,
    Studentinfo2Component,
    SchoolComponent,
    UpdatepageComponent,
    FormComponent,
    MyformComponent,
    RegisterComponent,
    LogComponent,
    LoginlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
