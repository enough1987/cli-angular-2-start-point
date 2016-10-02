import { Component, OnInit } from '@angular/core';


import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [
    CartService
  ]
})
export class CartComponent implements OnInit {

  constructor( private cartService: CartService ) {}

  ngOnInit() {
      console.log( ' CartComponent ngOnInit ' );
      this.cartService.listener.subscribe( data => {
        console.log(` CartComponent got - ${data} `);
      });    
  }

}
