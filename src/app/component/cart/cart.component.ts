// Removed duplicate goToCheckout outside the class
import { Component } from '@angular/core';
import { NgFor, NgIf, AsyncPipe, NgClass } from '@angular/common';
import { CartService, CartItem } from '../../cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [NgFor, NgIf, AsyncPipe, NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.items$;
    this.total$ = this.items$.pipe(
      map(items => items.reduce((sum, item) => sum + item.price * item.quantity, 0))
    );
  }

  items = [
    { id: 1, name: 'Canvas Backpack', price: 39.99, quantity: 1 },
    { id: 2, name: 'Ceramic Mug Set', price: 18.5, quantity: 2 },
    { id: 3, name: 'Desk Lamp', price: 24.0, quantity: 1 },
    { id: 4, name: 'Cotton Throw', price: 29.95, quantity: 1 }
  ];
  
  removeItem(id: number): void {
    this.cartService.removeItem(id);
  }

  clear(): void {
    this.cartService.clear();
  }

  goToCheckout(): void {
    alert('Proceeding to checkout!');
  }
}