import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      name: "Bitter Call Saul",
      type:"IPA",
      price:180,
      stock:5,
      image:"img/images.jpeg", //formato jpge
      clearance: false,
      quantity: 0,
    },
    {
      name: "Yellow Submarine 2",
      type:"Porter",
      price:230,
      stock:0,
      image:"img/images.jpeg",
      clearance: true, //formato jpge
      quantity: 0,
    },
    {
      name: "Red Red Wine",
      type:"Barley Wine",
      price:200,
      stock:3,
      image:"img/images.jpeg",
      clearance: false, //formato jpge
      quantity: 0,
    },
    {
      name: "Yellow Submarine",
      type:"Porter",
      price:180,
      stock:0,
      image:"img/images.jpeg",
      clearance: false, //formato jpge
      quantity: 0,
    }
  ]

  
  constructor(private cart: BeerCartService) { 
    
  }

  ngOnInit(): void {
  }

  addToCart(beer:Beer): void{
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }
  maxReached(m: string) {
    alert(m);
  }
}
