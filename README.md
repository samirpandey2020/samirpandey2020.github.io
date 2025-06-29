# Samir Pandey - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a comprehensive showcase of skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Beautiful dark theme with consistent styling
- **Interactive**: Smooth scroll animations and hover effects
- **Contact Form**: Functional contact form with EmailJS integration
- **Resume Download**: Download resume in PDF format
- **Centralized Data**: All content managed from a single source of truth

## 📋 Sections

- **Hero**: Introduction with animated background and call-to-action
- **About**: Personal information and professional summary
- **Skills**: Technical skills with proficiency levels and categories
- **Projects**: Portfolio projects with technologies and links
- **Experience**: Work experience with achievements and technologies
- **Contact**: Contact form and social links

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samirpandey2020/samirpandey2020.github.io.git
   cd samirpandey2020.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install PDF generation dependencies**
   ```bash
   npm install --save-dev puppeteer markdown-it
   ```

4. **Generate PDF Resume**
   ```bash
   npm run generate-resume
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 📄 Resume Download Feature

The portfolio includes a comprehensive resume download feature:

### How it works:
1. **PDF Generation**: The resume is generated from `public/documents/resume.md`
2. **Download Function**: Uses a utility function that handles both PDF and Markdown downloads
3. **Fallback**: If PDF doesn't exist, downloads the Markdown version
4. **Multiple Locations**: Download buttons in Header, Hero section, and mobile menu

### Generate PDF Resume:
```bash
npm run generate-resume
```

This will:
- Read `public/documents/resume.md`
- Convert it to HTML with professional styling
- Generate `public/documents/resume.pdf`
- Apply proper formatting and layout

### Download Locations:
- **Header**: Resume button in the top navigation
- **Hero Section**: "Download Resume" button below the main CTA
- **Mobile Menu**: Download option in mobile navigation

## 🎨 Customization

### Update Content
All content is managed from `src/data/portfolio.ts`. Update this file to change:
- Personal information
- Skills and proficiency levels
- Projects and descriptions
- Work experience
- Contact information

### Update Resume
1. Edit `public/documents/resume.md`
2. Run `npm run generate-resume` to update the PDF
3. The download feature will automatically use the new version

### Styling
- **Colors**: Update Tailwind CSS classes in components
- **Animations**: Modify `src/lib/animations.ts`
- **Layout**: Edit component structure and CSS classes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions or main branch

### Vercel/Netlify
1. Connect repository to Vercel/Netlify
2. Build command: `npm run build`
3. Deploy automatically on push

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality:

1. **Create EmailJS Account**: Sign up at [emailjs.com](https://emailjs.com)
2. **Add Service**: Configure email service (Gmail, Outlook, etc.)
3. **Create Templates**: Set up email templates
4. **Update Configuration**: Add service ID, template ID, and public key

### Fallback
If EmailJS is not configured, the form falls back to `mailto:` links.

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run generate-resume` - Generate PDF resume

### File Structure
```
src/
├── components/          # React components
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   ├── theme/          # Theme components
│   └── ui/             # UI components
├── data/               # Portfolio data
├── lib/                # Utilities and animations
├── types/              # TypeScript types
└── hooks/              # Custom hooks
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: pandeysamir0404@gmail.com
- **GitHub**: [samirpandey2020](https://github.com/samirpandey2020)
- **LinkedIn**: [samir-pandey-6b54b5279](https://linkedin.com/in/samir-pandey-6b54b5279/)

---

Made with ❤️ by Samir Pandey