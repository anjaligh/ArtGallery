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
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
