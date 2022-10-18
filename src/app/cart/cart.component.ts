import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$ : Observable<Beer[]>;
  constructor(private cart: BeerCartService) { 
    this.cartList$ = cart.cartList.asObservable();
    //cart.cartList.subscribe((observable)=>this.cartList = observable);
  }

  ngOnInit(): void {
  }
  
}
