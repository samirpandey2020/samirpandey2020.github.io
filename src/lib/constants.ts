// Navigation sections
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/samirpandey2020',
  linkedin: 'https://linkedin.com/in/samir-pandey-6b54b5279/',
  twitter: 'https://twitter.com/samirpandey2020',
  email: 'mailto:pandeysamir0404@example.com',
  resume: '/documents/resume.pdf',
} as const

// Contact information
export const CONTACT_INFO = {
  email: 'pandeysamir0404@gmail.com',
  phone: '+977 9860566040',
  location: 'Bhaktapur, Nepal',
} as const

// Contact methods configuration
export const CONTACT_METHODS = [
  {
    icon: 'Mail',
    title: 'Email',
    value: CONTACT_INFO.email,
    color: 'from-blue-500 to-cyan-500',
    label: 'Email',
    copyable: true,
  },
  {
    icon: 'Phone',
    title: 'Phone',
    value: CONTACT_INFO.phone,
    color: 'from-green-500 to-lime-500',
    label: 'Phone',
    copyable: true,
  },
  {
    icon: 'MapPin',
    title: 'Location',
    value: CONTACT_INFO.location,
    color: 'from-purple-500 to-pink-500',
    label: 'Location',
    copyable: false,
  },
] as const

// Animation durations (in ms)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 750,
} as const

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Theme configuration
export const THEME = {
  defaultTheme: 'system' as const,
  storageKey: 'portfolio-theme',
} as const

// Color scheme configuration
export const COLOR_SCHEME = {
  primary: {
    light: '#3b82f6', // blue-500
    dark: '#60a5fa',  // blue-400
    gradient: 'from-blue-500 to-purple-600',
    hover: 'from-blue-600 to-purple-700',
  },
  secondary: {
    light: '#8b5cf6', // purple-500
    dark: '#a78bfa',  // purple-400
    gradient: 'from-purple-500 to-indigo-600',
    hover: 'from-purple-600 to-indigo-700',
  },
  accent: {
    light: '#10b981', // emerald-500
    dark: '#34d399',  // emerald-400
    gradient: 'from-emerald-500 to-green-500',
    hover: 'from-emerald-600 to-green-600',
  },
  background: {
    light: 'from-slate-50 via-blue-50 to-indigo-100',
    dark: 'from-slate-900 via-slate-800 to-slate-900',
  },
  text: {
    primary: {
      light: '#1e293b', // slate-800
      dark: '#f8fafc',  // slate-50
    },
    secondary: {
      light: '#64748b', // slate-500
      dark: '#cbd5e1',  // slate-300
    },
  },
} as const

// Contact form configuration
export const CONTACT_CONFIG = {
  maxMessageLength: 1000,
  requiredFields: ['name', 'email', 'message'] as const,
  emailService: {
    // EmailJS Configuration
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'pandeysamir0404@gmail.com',
  },
} as const

// Project categories
export const PROJECT_CATEGORIES = [
  'All',
  'Web Development',
  'Mobile Development',
  'Full Stack',
  'Frontend',
  'Backend',
  'Open Source',
] as const

// Skill categories
export const SKILL_CATEGORIES = [
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Tools',
  'Languages',
] as const

// Experience types
export const EXPERIENCE_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
] as const

// Meta information
export const META = {
  title: 'Samir Pandey - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
  keywords: 'full stack developer, react, nodejs, typescript, web development',
  author: 'Samir Pandey',
  url: 'https://samirpandeynet.com.np',
  image: '/images/profile/og-image.jpg',
} as const

// Loading states
export const LOADING_MESSAGES = [
  'Loading awesome content...',
  'Preparing something great...',
  'Almost there...',
  'Just a moment...',
] as const

// Error messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  validation: 'Please check your input and try again.',
  email: 'Failed to send email. Please try again.',
} as const

// Success messages
export const SUCCESS_MESSAGES = {
  emailSent: 'Message sent successfully! I\'ll get back to you soon.',
  copied: 'Copied to clipboard!',
} as const

// Scroll configuration
export const SCROLL_CONFIG = {
  offset: 80, // Offset for fixed header
  duration: 800,
  easing: 'easeInOutCubic',
} as const

// File size limits
export const FILE_LIMITS = {
  maxResumeSize: 5 * 1024 * 1024, // 5MB
  allowedResumeTypes: ['application/pdf'] as const,
} as const

