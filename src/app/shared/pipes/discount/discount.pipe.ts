import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discount?: number): unknown {
    let resultedPrice = discount ? value - value/100 * discount : value;
    resultedPrice = +resultedPrice.toFixed(2)
    return resultedPrice
  }

}
