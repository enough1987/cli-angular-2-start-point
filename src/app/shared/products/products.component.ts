import { Component, OnInit } from '@angular/core';

// Services
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [
    CartService
  ],
  inputs: ['products']
})
export class ProductsComponent implements OnInit {

  constructor(private cartService: CartService ) {}

  send(item){
    console.log( 'ProductsComponent send');
      this.cartService.send( item );
  }

}
