import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendDataService } from '../services/backend-data.service';
import  {ArtModel} from '../services/ArtModel'

@Component({
  selector: 'app-buyer-cart',
  templateUrl: './buyer-cart.component.html',
  styleUrls: ['./buyer-cart.component.css']
})
export class BuyerCartComponent implements OnInit {
  myCart:ArtModel[]=[]
  constructor(private _Activatedroute:ActivatedRoute, private bdata:BackendDataService) { }
  purchased:any=false;
  idarray: string[] = [];
  namearray: string[] = []; 
  pricearray: string[] = [];
  imagearray: string[] = [];
  myCart2: object[] = [];
  id: any;
  name1:any;
  // : [] = [];
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
      // console.log(this.id)
      
  });
  var length = this.idarray.push(this.id);
  console.log(this.idarray)
  var i:number;
  // for (i=0;i<length;i++){
    const idValue=this.id
    // console.log("forloop"+this.id);
    this.bdata.getMyCart(idValue).subscribe((data)=>{
      console.log("my paintings");
      console.log(data);
      this.myCart=JSON.parse(JSON.stringify(data));
      console.log("mycart");
      console.log(this.myCart);
      

    //   this.bdata.storeMyCart(idValue).subscribe((data)=>{
    //     console.log("my paintings");
    //     console.log(data);
    //     this.myCart=JSON.parse(JSON.stringify(data));
    //     console.log("mycart");
    //     console.log(this.myCart);
        
        
    // })
  //     // let item1 =this.myCart.find(i => i._id === this.id);
  //     // console.log("arrayfind:"+this.myCart.values)
      
  })
  
  // }
//   this.bdata.getCharcoal().subscribe((data)=>{
//     this.charcoal=JSON.parse(JSON.stringify(data));
//     console.log(this.charcoal)
// })
  }
purchaseAlert(){
  alert(`Item Purchased!! Check "My Orders" `);
  this.purchased=true;
}

}
