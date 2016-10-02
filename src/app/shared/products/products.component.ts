import { Component, OnInit } from '@angular/core';

// Services
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [
    CartService
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private cartService: CartService) {}

  ngOnInit() {
      console.log( ' ProductsComponent ngOnInit ' );     
      this.cartService.send( 'test' );     
  }

  send(){
    console.log( 'ProductsComponent send');
      this.cartService.send( 'test' );
  }

}
