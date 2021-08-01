import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { hostViewClassName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url=environment.host;
 

  constructor(private http:HttpClient) { }

   httpOptions = {
    headers:new HttpHeaders({
    'x-access-token':sessionStorage.getItem('sessionData')||"",
    })
  };
  addRecord(record:any){
    return this.http.post(this.url.concat('/paths/add3/'),record);
  }
  login(record:any){
    return this.http.post(this.url.concat('/paths/getone/'),record);
  }
  getRecord(){
    return this.http.get(this.url.concat('/paths/get/'),this.httpOptions);
  }
 
}
