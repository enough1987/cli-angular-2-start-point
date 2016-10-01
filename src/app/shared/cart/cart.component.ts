import { Component, OnInit } from '@angular/core';

// Services
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [
    CartService
  ]
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { 
      console.log( ' CartComponent consructor ' );
      cartService.listener.subscribe( data => {
        console.log(` we got - ${data} `);
      });
  }

  ngOnInit() {
  }

}
