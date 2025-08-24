import { Component } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { IProduct } from '../product.model';
import allProducts from '../products.json';
import {FilterByCategoryPipe} from '../filter-by-category-pipe';
import {CartService} from '../cart.service';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent, FilterByCategoryPipe],
  templateUrl: './catalog.component.html',
  standalone: true,
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products: IProduct[] = allProducts;
  categoryFilter: string | null = null;


  constructor(private cartService: CartService) { }

  addToCart(product: IProduct) {
    // this.availableInventory.update((p) => p - 1); will fix this later
    this.cartService.addToCart(product);
  }

  addProduct() {
    //here mutation is used to push a new Product to the array
    //if this is used for creating a "pure" pipe with products, mutation of this array will not cause change detection
    // and the new product will not be rendered
    //
    //The change detection issue is fixed by
    // - removing the push that mutates the products array
    // - create a new Array using spread operator
    // - add the new IProduct object to the end of the array

      // when working with custom pipes which takes an array or object, use immutability when making changes to array



    this.products = [
      ...this.products,
      {
      "id": 6,
      "description": "Something new",
      "name": "New Arm",
      "imageName": "arm-propeller.png",
      "category": "arms",
      "price": 100,
      "discount": 0,
    }];
  }
}
