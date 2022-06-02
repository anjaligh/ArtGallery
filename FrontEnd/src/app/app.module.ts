import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule  } from '@angular/forms';

import { ProductComponent } from './product/product.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    ProductComponent,
    FooterComponent,
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SlickCarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
