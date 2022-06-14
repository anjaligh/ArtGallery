import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(private http:HttpClient) { }
  registerData(data:any) :Observable<any>{

    //console.log("data from Service file" , data)

    return this.http.post<any>("http://localhost:3000/users/register", data)
  }
  loginData(data:any):Observable<any>{
  
    console.log("data from Service file" , data)

    return this.http.post<any>("http://localhost:3000/users/login",data)
  }
  getSeller():Observable<any>{
    let headers={
      'Authorization':"CheckUsers"+localStorage.getItem('token')
    }
    return this.http.get("http://localhost:3000/users/seller",{headers:headers})

  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  
  }
  getToken(){
    return localStorage.getItem('token')
  }
 
}
