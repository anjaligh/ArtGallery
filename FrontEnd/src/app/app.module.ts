import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PastelComponent } from './pastel/pastel.component';
import { NftComponent } from './nft/nft.component';
import { AbstractComponent } from './abstract/abstract.component';
import { WatercolorComponent } from './watercolor/watercolor.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { MuralComponent } from './mural/mural.component';

import { SellerComponent } from './seller/seller.component';
import { SellerwishlistComponent } from './sellerwishlist/sellerwishlist.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { SellerhistoryComponent } from './sellerhistory/sellerhistory.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerhistoryComponent } from './buyerhistory/buyerhistory.component';
import { BuyerwishlistComponent } from './buyerwishlist/buyerwishlist.component';
import { AdminComponent } from './admin/admin.component';

import { HeaderComponent } from './header/header.component';
import { AddworkformComponent } from './addworkform/addworkform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    AboutusComponent,
    PastelComponent,
    NftComponent,
    AbstractComponent,
    WatercolorComponent,
    AcrylicComponent,
    MuralComponent,
    SellerComponent,
    SellerwishlistComponent,
    SellerprofileComponent,
    SellerhistoryComponent,
    ArtistsComponent,
    ArtistComponent,
    BuyerComponent,
    BuyerhistoryComponent,
    BuyerwishlistComponent,
    AdminComponent,
    HeaderComponent,
    AddworkformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
