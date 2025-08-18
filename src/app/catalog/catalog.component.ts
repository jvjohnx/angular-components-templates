import { Component } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { IProduct } from '../product.model';
import allProducts from '../products.json';
import {FilterByCategoryPipe} from '../filter-by-category-pipe';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent, FilterByCategoryPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products: IProduct[] = allProducts;
  categoryFilter: string | null = null;

  addProduct() {
    //here mutation is used to push a new Product to the array
    //if this is used for creating a "pure" pipe with products, mutation of this array will not cause change detection
    // and the new product will not be rendered
    this.products.push({
      "id": 6,
      "description": "Something new",
      "name": "New Arm",
      "imageName": "arm-propeller.png",
      "category": "arms",
      "price": 100,
      "discount": 0,
    });
  }
}
