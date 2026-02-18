import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CartService } from '../../cart.service';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Canvas Backpack',
      price: 39.99,
      description: 'Durable everyday backpack with padded straps.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800'
    },
    {
      id: 2,
      name: 'Ceramic Mug Set',
      price: 18.5,
      description: 'Minimalist mugs, set of four.',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800'
    },
    {
      id: 3,
      name: 'Desk Lamp',
      price: 24.0,
      description: 'Warm light with adjustable neck.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800'
    },
    {
      id: 4,
      name: 'Cotton Throw',
      price: 29.95,
      description: 'Soft woven throw for cozy evenings.',
      image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addItem(product);
  }
}