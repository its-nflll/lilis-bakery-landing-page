# Page Transitions Documentation

## Overview
Sistem transisi halus telah ditambahkan ke website Lilis Bakery untuk memberikan pengalaman navigasi yang lebih smooth dan modern.

## Fitur Transisi yang Ditambahkan

### 1. Page Transitions
- **Fade Out/In**: Transisi halus saat perpindahan halaman dengan efek fade dan translateY
- **Durasi**: 300ms untuk fade out, 400ms untuk fade in
- **Easing**: Menggunakan cubic-bezier(0.4, 0, 0.2, 1) untuk transisi yang natural

### 2. Element Animations
- **Stagger Animation**: Elemen muncul secara berurutan dengan delay
- **Smooth Appear**: Animasi slide up dari bawah
- **Fade In**: Animasi fade in untuk konten
- **Scale In**: Animasi scale untuk modal dan popup

### 3. Scroll Animations
- **Intersection Observer**: Elemen beranimasi saat masuk ke viewport
- **Progressive Loading**: Konten muncul bertahap saat di-scroll

### 4. Interactive Transitions
- **Button Hover**: Efek ripple dan scale pada tombol
- **Card Hover**: Transform dan shadow pada product cards
- **Navigation**: Underline animation pada nav links

## Implementasi

### CSS Classes
```css
.page-transition        - Transisi utama halaman
.fade-out              - State keluar halaman
.fade-in               - Animasi masuk elemen
.smooth-appear         - Animasi slide up
.stagger-animation     - Container untuk animasi berurutan
.scale-in              - Animasi scale masuk
```

### JavaScript Components

#### PageTransition Utility
- `startExitTransition()` - Memulai transisi keluar
- `startEnterTransition()` - Memulai transisi masuk
- `resetAnimations()` - Reset semua animasi
- `animateElement()` - Animasi elemen spesifik

#### App.js Integration
- Handle navigation transitions
- Error handling dengan loading states
- Auto initialization page transitions

## Browser Support
- Modern browsers dengan CSS transition support
- Fallback untuk browsers tanpa CSS animation
- Respect untuk `prefers-reduced-motion`

## Performance
- Hardware accelerated animations (transform, opacity)
- Efficient CSS selectors
- Debounced scroll events
- Lazy loading untuk intersection observer

## Usage Examples

### Basic Page Navigation
```javascript
// Automatic - handled by App.js
// Manual trigger:
PageTransition.startExitTransition(() => {
  // Navigate to new page
}, 300);
```

### Element Animation
```javascript
// Add animation class to elements
element.classList.add('fade-in');
element.classList.add('smooth-appear');
```

### Custom Delays
```javascript
PageTransition.animateElement(element, 'fade-in', 200);
```

## Responsive Considerations
- Reduced animation duration on mobile
- Touch-friendly transitions
- Orientation change handling
- Performance optimization for mobile devices

## Accessibility
- Respects `prefers-reduced-motion`
- Focus management during transitions
- Screen reader friendly
- Keyboard navigation support
