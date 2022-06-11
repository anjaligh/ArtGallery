import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(public http: HttpClient) { }
  getMural() {
    return this.http.get('http://localhost:3000/mural')
  }
  getAbstract() {
    return this.http.get('http://localhost:3000/abstract')
  }
  getWatercolor() {
    return this.http.get('http://localhost:3000/watercolor')
  }
  getPastel() {
    return this.http.get('http://localhost:3000/pastel')
  }
  getCharcoal() {
    return this.http.get('http://localhost:3000/charcoal')
  }
  getAcrylic() {
    return this.http.get('http://localhost:3000/acrylic')
  }
  addPainting(data: any){
    console.log(data);
    return this.http.post<any>('http://localhost:3000/addwork',data)
  }
}
