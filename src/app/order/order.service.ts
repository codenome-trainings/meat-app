import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'

import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from 'app/order/order.model'
import { MEAT_API } from 'app/app.api'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem): void {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem): void {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem): void {
    this.cartService.removeItem(item)
  }

  itemsValue(): number {
    return this.cartService.total()
  }

  clear(): void {
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(
      `${MEAT_API}/orders`, order).map(order => order.id)
  }

}
