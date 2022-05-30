import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Images=['./assets/carousel1.jpg','./assets/carousel1.jpg'];
CardImages=['./assets/mural.jpg','./assets/acrylic.jpg','./assets/abstract.jpeg', './assets/water.jpg','./assets/pastel.jpg','./assets/nft.jpg'];
CardNames=['Mural','Acrylic','Abstract','Watercolor','Pastel','NFTs'];
slides = [
  { img: 'https://via.placeholder.com/600.png/09f/fff' },
  { img: 'https://via.placeholder.com/600.png/021/fff' },
  { img: 'https://via.placeholder.com/600.png/321/fff' },
  { img: 'https://via.placeholder.com/600.png/422/fff' },
  { img: 'https://via.placeholder.com/600.png/654/fff' },
  { img: 'https://via.placeholder.com/600.png/09f/fff' },
  { img: 'https://via.placeholder.com/600.png/021/fff' },
  { img: 'https://via.placeholder.com/600.png/321/fff' },
  { img: 'https://via.placeholder.com/600.png/422/fff' },
  { img: 'https://via.placeholder.com/600.png/654/fff' }
];
slideConfig = { slidesToShow: 4, slidesToScroll: 2 };

  constructor() { }

  ngOnInit(): void {
  }

}
