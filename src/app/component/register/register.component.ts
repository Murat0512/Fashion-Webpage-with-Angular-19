import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  message = '';
  email = '';
  password = '';
  isLoading = false;



  constructor(
    public authService: AuthService,
    private router: Router
  ) {}


  loginUser() {
    // Step 1: Check if email and password are not empty
    if (!this.email || !this.password) {
      this.message = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;
    this.message = '';

    // Step 3: Call authService.login() with credentials
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe(
      (response) => {
        // Step 4: Handle the response
        if (response.success) {
          // Step 5: If success, navigate to home
          this.message = 'Login successful!';
          this.router.navigate(['/home']);
        } else {
          // Step 6: If fail, show error message
          this.message = response.message;
        }

          // Step 7: Set isLoading to false (enable button again)
        this.isLoading = false;
      }
    );
  }
}



