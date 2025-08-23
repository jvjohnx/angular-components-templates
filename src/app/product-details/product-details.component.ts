import {Component, input, signal} from '@angular/core';
import {IProduct} from '../product.model';
import {CurrencyPipe, NgClass} from '@angular/common';
import {CategoryToPartTypePipe} from '../category-to-part-type-pipe'

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass, CategoryToPartTypePipe ],
  templateUrl: './product-details.component.html',
  standalone: true,
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  //tighten up input to make it specific type IProduct
  //currently below product().discount is used we are getting error "Qualifier of 'discount' is possibly undefined "
  //since product is necessary for this component, make it required by using input.required
  //now the error below product().discount and in html are gone
  product = input.required<IProduct>();
  availableInventory = signal(5);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  // addToCart() moved to parent - CatalogComponent

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 }
  }
}
