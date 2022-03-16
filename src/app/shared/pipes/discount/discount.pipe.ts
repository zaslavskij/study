import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discount?: number): unknown {
    if (discount){
      const pricePart = 1 - (discount / 100);
      const newPrice = price * pricePart;
      const viewPrice = Number(newPrice.toFixed(2))
      return viewPrice;
    }
    return price;
  }

}
