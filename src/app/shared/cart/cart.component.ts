import { Component, OnInit } from '@angular/core';


import { CartService } from '../../services/cart.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [
    CartService,
    SearchService
  ]
})
export class CartComponent implements OnInit {

  constructor( private cartService: CartService, private searchService: SearchService ) { 
      console.log( ' CartComponent consructor ' );
  }

  ngOnInit() {
      console.log( ' CartComponent ngOnInit ' );
      this.cartService.listener.subscribe( data => {
        console.log(` CartComponent got - ${data} `);
      });    
  }

}
