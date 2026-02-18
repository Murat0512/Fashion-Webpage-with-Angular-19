
# Shoppers Angular E-Commerce App

## Overview
Shoppers is a modern, fully client-side Angular e-commerce demo application. It demonstrates best practices in Angular development, including standalone components, reactive state management, authentication, dynamic UI, and responsive design. The app is designed for learning, experimentation, and as a foundation for real-world Angular projects.

---

## Technical Foundation

### 1. **Framework & Structure**
- **Angular 15+**: Uses the latest Angular features, including standalone components and functional routing.
- **Component-Based Architecture**: Each feature (Home, Products, Cart, About, User Profile, etc.) is encapsulated in its own component for modularity and reusability.
- **Folder Structure**:
  - `src/app/component/`: All main UI components (home, products, cart, about, register, user-profile)
  - `src/app/guards/`: Route guards for authentication
  - `src/app/`: Core services (auth, cart), app root, and routing

### 2. **Routing & Navigation**
- **Angular Router**: Implements client-side routing with lazy loading for products.
- **Route Guards**: Protects routes like Cart and About using `authGuard`.
- **Default Route**: Home page is the landing page; login/register is available for authentication.

### 3. **Authentication**
- **AuthService**: Manages login state, user info, and token storage (mocked for demo, but easily extendable).
- **Reactive State**: Uses RxJS `BehaviorSubject` for current user and authentication state, enabling real-time UI updates.
- **Login/Logout**: Login sets user and token in localStorage; logout clears them and redirects to home.

### 4. **Cart Management**
- **CartService**: Uses RxJS `BehaviorSubject` to manage cart items and item count reactively.
- **Add/Remove Items**: Products can be added/removed from the cart, with updates reflected instantly in the UI.

### 5. **UI/UX & Styling**
- **Modern Responsive Design**: Uses CSS flexbox, grid, and media queries for a clean, adaptive layout.
- **Dynamic Animations**: Home and About pages feature animated backgrounds, parallax effects, and animated cards/images for a lively experience.
- **Image-Driven**: Uses Unsplash images for a visually rich interface.
- **Consistent Theming**: Custom color palette and button styles for a cohesive look.

### 6. **User Profile**
- **Editable Profile**: Users can view and edit their name, email, and address in a modal overlay.
- **State Persistence**: Profile changes are saved to localStorage and reflected in the UI immediately.

### 7. **Server-Side Rendering (SSR) Ready**
- **Platform Checks**: Uses Angular's `isPlatformBrowser` to safely access browser APIs (like localStorage) for SSR compatibility.

### 8. **Extensibility**
- **Easy to Extend**: The modular structure and use of Angular best practices make it easy to add new features (e.g., product details, order history, real API integration).
- **Demo-Ready**: All features are implemented with mock data/services for easy local development and demonstration.

---

## Getting Started
1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the app:**
	```bash
	ng serve
	```
3. **Open in browser:**
	Visit [http://localhost:4200](http://localhost:4200)

---

## Key Features
- Home page with animated hero, dynamic cards, and immersive background
- Products page with add-to-cart functionality
- Cart page with real-time updates
- About page with animated gallery
- User profile modal with edit/save
- Authentication (mocked)
- Responsive and modern UI

---

## License
This project is for educational and demonstration purposes. Images are from [Unsplash](https://unsplash.com/).

---

## Credits
- Built with Angular
- Images by Unsplash
- UI/UX inspired by modern e-commerce trends
