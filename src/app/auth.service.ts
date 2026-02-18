// ...existing code...
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated$: Observable<boolean>;

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser$: Observable<any>;

  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    const storedUser = this.isBrowser
      ? localStorage.getItem('currentUser')
      : null;
    this.currentUserSubject = new BehaviorSubject<any>(
      storedUser ? JSON.parse(storedUser) : null,
    );
    this.currentUser$ = this.currentUserSubject.asObservable();

    const token = this.isBrowser ? localStorage.getItem('authToken') : null;
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(!!token);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  public get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.mockLogin(credentials);
  }

  private mockLogin(credentials: LoginCredentials): Observable<AuthResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (credentials.email && credentials.password) {
          const mockToken = 'mock-jwt-token-' + Date.now();
          const mockUser = {
            id: '1',
            email: credentials.email,
            name: credentials.email.split('@')[0],
          };

          if (this.isBrowser) {
            localStorage.setItem('authToken', mockToken);
            localStorage.setItem('currentUser', JSON.stringify(mockUser));
          }

          this.currentUserSubject.next(mockUser);
          this.isAuthenticatedSubject.next(true);

          observer.next({
            success: true,
            message: 'Login successful',
            token: mockToken,
            user: mockUser,
          });
        } else {
          observer.next({
            success: false,
            message: 'Invalid email or password',
          });
        }
        observer.complete();
      }, 500);
    });
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/home']);
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem('authToken') : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  /**
   * Update the current user and notify subscribers
   */
  updateCurrentUser(updatedUser: any) {
    if (this.isBrowser) {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
    this.currentUserSubject.next(updatedUser);
  }
}
