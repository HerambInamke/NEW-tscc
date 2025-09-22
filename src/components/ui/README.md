# UI Components

This folder contains reusable UI components following the shadcn/ui pattern.

## Footer Component

### Usage

```tsx
import Footer4Col from '@/components/ui/footer-column';

export default function MyPage() {
  return (
    <div>
      {/* Your page content */}
      <Footer4Col />
    </div>
  );
}
```

### Features

- **Responsive Design**: Adapts to different screen sizes
- **TSCC Branding**: Customized with TSCC colors and content
- **Social Links**: Facebook, Instagram, Twitter, GitHub, LinkedIn, YouTube
- **Navigation Links**: About, Team, Activities, Help
- **Contact Information**: Email, Phone, Address
- **Accessibility**: Screen reader friendly with proper ARIA labels

### Customization

The footer data can be customized in the `data` object at the top of the component:

- `company`: Company name, description, and logo
- `socialLinks`: Social media links and icons
- `aboutLinks`: About section navigation
- `serviceLinks`: Services/Activities navigation
- `helpfulLinks`: Help and support links
- `contactInfo`: Contact information

### Styling

The component uses Tailwind CSS classes and follows the TSCC design system:
- Colors: `forest`, `olive`, `technical-gray`
- Fonts: `font-serif-heading`, `font-sans-body`
- Responsive breakpoints: `sm:`, `md:`, `lg:`
