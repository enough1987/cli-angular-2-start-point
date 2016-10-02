import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CartService {

  static instance: CartService;

  private subject = new Subject();

  constructor() {
    return CartService.instance = CartService.instance || this;
  }

  get_listener() {
    return this.subject.asObservable();
  }

  send(cart) {
    this.subject.next(cart);
  }
  

}
