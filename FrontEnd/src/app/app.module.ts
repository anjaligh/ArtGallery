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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
