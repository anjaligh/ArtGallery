import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AbstractComponent } from './abstract/abstract.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MuralComponent } from './mural/mural.component';
import { NftComponent } from './nft/nft.component';
import { PastelComponent } from './pastel/pastel.component';
import { RegisterComponent } from './register/register.component';
import { WatercolorComponent } from './watercolor/watercolor.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { SellerwishlistComponent } from './sellerwishlist/sellerwishlist.component';
import { SellerhistoryComponent } from './sellerhistory/sellerhistory.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'mural',component:MuralComponent},
  {path:'abstract',component:AbstractComponent},
  {path:'acrylic',component:AcrylicComponent},
  {path:'nft',component:NftComponent},
  {path:'pastel',component:PastelComponent},
  {path:'watercolor',component:WatercolorComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'mural/product',component:ProductComponent},
  {path:'login/seller',component:SellerComponent,children:[
                    {path:'profile',component:SellerprofileComponent},
                    {path:'wishlist',component:SellerwishlistComponent},
                    {path:'sellerhistory',component:SellerhistoryComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
