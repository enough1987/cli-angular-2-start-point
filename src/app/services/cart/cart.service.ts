import { Injectable } from '@angular/core';

import { Deferred } from '../../classes/deferred/deferred';

@Injectable()
export class CartService implements Deferred {

  private _deferred = new Deferred<boolean>();
  private _cart = [];

  constructor() { }

  private _is_item_exist = function(item){
        return this._cart.filter(function(el){
            if(el.id === item.id) return true;
        }).length;
    };

  get_cart(){
        return JSON.parse ( window.localStorage.getItem('cart') ) || [];
  };

  observe_cart() {
        return this._deferred.promise;
  };

  set_cart (item) {
        this._cart =  this.get_cart();
        if( this._is_item_exist(item) ) { console.error('this item was added before'); return false; }
        this._cart.push(item);
        window.localStorage.setItem( 'cart', JSON.stringify(this._cart) );
        this._deferred.notify(this._cart);
    };


}
