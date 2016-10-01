import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class CartService {

  private _cartSource = new Subject();

  listener = this._cartSource.asObservable();

  send(cart) {
    this._cartSource.next(cart);
  }
  


}
