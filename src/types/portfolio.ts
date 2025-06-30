// Personal Information
export interface PersonalInfo {
  name: string
  title: string
  subtitle?: string
  description: string
  location: string
  email: string
  phone?: string
  website?: string
  avatar: string
  resume: string
}

// Social Media Links
export interface SocialLinks {
  github?: string
  linkedin?: string
  twitter?: string
  instagram?: string
  youtube?: string
  dribbble?: string
  behance?: string
  medium?: string
  dev?: string
}

// Skills
export interface Skill {
  id: string
  name: string
  category: string
  level: number // 1-100
  icon?: string
  color?: string
  description?: string
}

export interface SkillCategory {
  name: string
  skills: Skill[]
  icon?: string
  description?: string
}

// Projects
export interface Project {
  id: string
  title: string
  description: string
  shortDescription?: string
  image: string
  images?: string[] // Additional screenshots
  technologies: string[]
  category: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  startDate: string
  endDate?: string
  links: {
    live?: string
    github?: string
    demo?: string
    case_study?: string
  }
  features?: string[]
  challenges?: string[]
  learnings?: string[]
  metrics?: ProjectMetrics
}

export interface ProjectMetrics {
  users?: number
  performance?: string
  uptime?: string
  github_stars?: number
  downloads?: number
}

// Experience
export interface Experience {
  id: string
  company: string
  position: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
  location: string
  remote: boolean
  startDate: string
  endDate?: string // undefined means current
  description: string
  responsibilities: string[]
  achievements?: string[]
  technologies: string[]
  companyLogo?: string
  companyWebsite?: string
}

// Education
export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: number
  maxGpa?: number
  description?: string
  achievements?: string[]
  courses?: string[]
  location: string
  logo?: string
  website?: string
}

// Certifications
export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
  skills?: string[]
}

// Testimonials
export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar?: string
  rating?: number
  date: string
  linkedinUrl?: string
}

// Contact Form
export interface ContactForm {
  name: string
  email: string
  subject?: string
  message: string
  phone?: string
  company?: string
  budget?: string
  timeline?: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  phone?: string
}

// Blog Posts (if you have a blog section)
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishDate: string
  updateDate?: string
  readTime: number // in minutes
  tags: string[]
  category: string
  featured: boolean
  image?: string
  author: {
    name: string
    avatar: string
  }
}

// Navigation
export interface NavItem {
  id: string
  label: string
  href: string
  external?: boolean
}

// Theme
export type Theme = 'light' | 'dark' | 'system'

// Animation
export interface AnimationConfig {
  initial: Record<string, any>
  animate: Record<string, any>
  transition?: Record<string, any>
  whileHover?: Record<string, any>
  whileTap?: Record<string, any>
}

// SEO Meta
export interface SEOMeta {
  title: string
  description: string
  keywords: string[]
  author: string
  url: string
  image: string
  type?: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

// Form submission states
export interface FormState<T = any> {
  data: T
  errors: Record<string, string>
  isSubmitting: boolean
  isSubmitted: boolean
  submitError?: string
}

// Intersection Observer
export interface IntersectionConfig {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

// Scroll Spy
export interface ScrollSpySection {
  id: string
  element: HTMLElement
  offset: number
}

// File Upload
export interface FileUpload {
  file: File
  preview?: string
  progress?: number
  error?: string
}

// Analytics (if you want to track interactions)
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Portfolio Statistics
export interface PortfolioStats {
  totalProjects: number
  completedProjects: number
  yearsOfExperience: number
  technologiesUsed: number
  clientsSatisfied?: number
  linesOfCode?: number
}

// Main Portfolio Data Structure
export interface PortfolioData {
  personal: PersonalInfo
  social: SocialLinks
  skills: SkillCategory[]
  projects: Project[]
  experience: Experience[]
  education: Education[]
  certifications?: Certification[]
  testimonials?: Testimonial[]
  stats?: PortfolioStats
  meta: SEOMeta
}