import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/products/products.component';
import { CartComponent } from './shared/cart/cart.component';
import { SearchComponent } from './shared/search/search.component';


// Services
import { CartService } from './services/cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
