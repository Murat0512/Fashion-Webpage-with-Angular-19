import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  itemCount$ = this.items$.pipe(
    map((items) => items.reduce((total, item) => total + item.quantity, 0))
  );

  addItem(item: Omit<CartItem, 'quantity'>): void {
    const items = this.itemsSubject.value;
    const existing = items.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
      this.itemsSubject.next([...items]);
      return;
    }

    this.itemsSubject.next([...items, { ...item, quantity: 1 }]);
  }

  removeItem(id: number): void {
    const items = this.itemsSubject.value.filter((i) => i.id !== id);
    this.itemsSubject.next(items);
  }

  clear(): void {
    this.itemsSubject.next([]);
  }
}