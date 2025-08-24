import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './product.model';

@Pipe({
  name: 'filterByCategory',
  standalone: true,
  // pure: false //Don't do this.  This will fix the change detection issue .. but will have performance problems.
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(products: IProduct[], category: string | null): IProduct[] {
    if( !category ){
      return products
    }
    return products.filter(p => p.category===category);
  }
}
