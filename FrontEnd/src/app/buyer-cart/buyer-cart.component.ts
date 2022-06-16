import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyer-cart',
  templateUrl: './buyer-cart.component.html',
  styleUrls: ['./buyer-cart.component.css']
})
export class BuyerCartComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute) { }
  purchased:any=false;

  id: any;
  name:any;
  price:any; 
  artist:any;
  dimension:any;
  category:any;
  image:any;

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      this.name = params.get('name'); 
      this.price = params.get('price');
      this.artist = params.get('artist');  
      this.dimension = params.get('dimension'); 
      this.category=params.get('category');
      this.image=params.get('image');
      console.log(this.id)
  });
  }
purchaseAlert(){
  alert(`Item Purchased!! Check "My Orders" `);
  this.purchased=true;
}

}
