import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(public http:HttpClient) { }

  // addPainting(item:any){
  //   return this.http.post('http://localhost:3000/addwork',{'artwork':item})
  // }
}
