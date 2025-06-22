# Famous Rotisserie & Grill Website

A modern, responsive React.js website for Famous Rotisserie & Grill, featuring fresh Mexican rostisado style chicken and comfort food. Built with React, Tailwind CSS, and Framer Motion for smooth animations.

## 🌟 Features

### Core Features
- **Responsive Design**: Mobile-first approach with beautiful design on all devices
- **SEO Optimized**: Meta tags, structured data, and search engine friendly
- **Fast Performance**: Optimized loading times and smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### Business-Specific Features
- **Delivery Focused**: Integration with DoorDash and phone ordering
- **Menu Management**: Comprehensive menu with Mexican rostisado style chicken
- **Location Services**: Multiple locations in New York and Maryland
- **Catering Services**: Professional catering for events and corporate functions
- **Franchise Opportunities**: Information about franchise opportunities
- **Career Opportunities**: Job listings and application process
- **Special Offers**: Current promotions and loyalty program

### Technical Features
- **Modern React**: Built with React 18 and functional components
- **Routing**: React Router for seamless navigation
- **Animations**: Framer Motion for smooth, engaging animations
- **Styling**: Tailwind CSS for consistent, responsive design
- **Icons**: Lucide React for beautiful, consistent icons
- **SEO**: React Helmet Async for dynamic meta tags

## 📋 Pages

1. **Home** (`/`) - Hero section, features, menu highlights, and call-to-action
2. **Menu** (`/menu`) - Complete menu with filtering by category
3. **About** (`/about`) - Company history, values, team, and timeline
4. **Locations** (`/locations`) - Service areas in New York and Maryland
5. **Catering** (`/catering`) - Catering services and packages
6. **Franchising** (`/franchising`) - Franchise opportunities and information
7. **Careers** (`/careers`) - Job openings and application process
8. **Offers** (`/offers`) - Current promotions and loyalty program
9. **Contact** (`/contact`) - Contact form, hours, and FAQ

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/famous-rotisserie.git
   cd famous-rotisserie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🏗️ Project Structure

```
famous-rotisserie/
├── public/
│   ├── index.html          # Main HTML file with SEO meta tags
│   ├── robots.txt          # Search engine crawling instructions
│   └── sitemap.xml         # XML sitemap for SEO
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.js       # Navigation component
│   │   └── Footer.js       # Footer component
│   ├── pages/              # Page components
│   │   ├── Home.js         # Homepage
│   │   ├── Menu.js         # Menu page
│   │   ├── About.js        # About page
│   │   ├── Locations.js    # Locations page
│   │   ├── Catering.js     # Catering page
│   │   ├── Franchising.js  # Franchising page
│   │   ├── Careers.js      # Careers page
│   │   ├── Offers.js       # Offers page
│   │   └── Contact.js      # Contact page
│   ├── App.js              # Main app component with routing
│   ├── index.js            # App entry point
│   └── index.css           # Global styles and Tailwind imports
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Amber/Orange gradient (`#f59e0b` to `#ea580c`)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Amber for highlights and CTAs

### Typography
- **Headings**: Playfair Display (elegant serif font)
- **Body**: System fonts for optimal readability

### Components
- **Buttons**: Consistent styling with hover effects
- **Cards**: Clean, modern card design with shadows
- **Forms**: Accessible form elements with proper validation
- **Navigation**: Responsive navbar with mobile menu

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Customization

### Updating Content
- **Menu Items**: Edit `src/pages/Menu.js` to modify menu items
- **Company Info**: Update business information in respective page components
- **Contact Details**: Modify contact information in `src/components/Footer.js`

### Styling
- **Colors**: Update color scheme in `tailwind.config.js`
- **Typography**: Modify font families in CSS and Tailwind config
- **Layout**: Adjust spacing and layout in component files

### SEO
- **Meta Tags**: Update meta descriptions and titles in each page component
- **Structured Data**: Add JSON-LD structured data for better search results
- **Sitemap**: Update `public/sitemap.xml` with new pages

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
1. **Netlify**: Connect GitHub repository for automatic deployments
2. **Vercel**: Deploy with Vercel for optimal performance
3. **AWS S3**: Upload build folder to S3 with CloudFront
4. **Traditional Hosting**: Upload build folder to any web server

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
REACT_APP_GOOGLE_ANALYTICS_ID=your-ga-id
REACT_APP_CONTACT_EMAIL=contact@famousrotisserie.com
```

## 📊 Performance Optimization

- **Code Splitting**: Automatic code splitting with React Router
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Size**: Minimal bundle size with tree shaking
- **Caching**: Proper cache headers for static assets

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta titles and descriptions
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD markup for rich snippets
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Helmet Async** - Document head management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions about the website:
- Email: info@famousrotisserie.com
- Phone: (123) 456-7890
- Website: [famousrotisserie.com](http://www.famousrotisserie.com)

## 🎯 Business Information

**Famous Rotisserie & Grill**
- **Founded**: 2010
- **Locations**: New York and Maryland
- **Specialty**: Mexican rostisado style chicken
- **Focus**: Fresh, locally-sourced ingredients
- **Services**: Delivery, takeout, catering, franchising

---

Built with ❤️ for Famous Rotisserie & Grill 