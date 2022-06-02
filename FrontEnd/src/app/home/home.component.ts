import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Images=['./assets/carousel1.jpg','./assets/carousel1.jpg'];
CardImages=['./assets/mural.jpg','./assets/acrylic.jpg','./assets/abstract.jpeg', './assets/water.jpg','./assets/pastel.jpg','./assets/nft.jpg'];
CardNames=['Mural','Acrylic','Abstract','Watercolor','Pastel','Charcoal'];
  constructor() { }

  ngOnInit(): void {
  }

}
