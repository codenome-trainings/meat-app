import { Injectable } from '@angular/core';

import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = [];

    constructor() { }

    clear(): void {
        this.items = [];
    }

    addItem(item: MenuItem): void {

        let foundItem = this.items.find(
            (mItem) => mItem.menuItem.id === item.id
        );
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    increaseQty(item: CartItem): void {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItem): void {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: any): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }

}