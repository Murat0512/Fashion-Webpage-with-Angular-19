
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itemCount$: Observable<number>;
  currentYear = new Date().getFullYear();
  showUserSection = false;

  constructor(
    public authService: AuthService,
    private cartService: CartService
  ) {
    this.itemCount$ = this.cartService.itemCount$;
  }

  logout(): void {
    this.authService.logout();
  }
}