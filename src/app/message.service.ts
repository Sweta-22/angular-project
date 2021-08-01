import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url= environment.host;
  msgAlert()
  {
    alert("THANKS FOR CLICK");
  }

  constructor(private http:HttpClient) { }
  
  stringEqualfilter(arr:any[],key:string,matchingVal:any){
    return arr.filter(o => o[key]===matchingVal)

  }
  getAllCustomer(){
    return this.http.get(this.url.concat('/orderpath/getorder/'));
  }
  updateData(id:any,record:any){
    return this.http.put(this.url.concat('/orderpath/update/'+id),record);

  }
  deleteData(id:any){
    return this.http.delete(this.url.concat('/orderpath/delete/'+id));
  }
}
