import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  editing = false;
  name = '';
  email = '';
  address = '';
  message = '';

  constructor(public authService: AuthService) {
    const user = this.authService.currentUserValue;
    if (user) {
      this.name = user.name || '';
      this.email = user.email || '';
      this.address = user.address || '';
    }
  }

  edit() {
    this.editing = true;
  }

  save() {
    if (!this.name || !this.email) {
      this.message = 'Name and email are required.';
      return;
    }
    const updatedUser = {
      ...this.authService.currentUserValue,
      name: this.name,
      email: this.email,
      address: this.address
    };
    this.authService.updateCurrentUser(updatedUser);
    this.editing = false;
    this.message = 'Profile updated!';
  }
}
