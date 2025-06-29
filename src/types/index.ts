// Export all types from portfolio
export * from './portfolio'

// Additional utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface SectionProps extends BaseComponentProps {
  id?: string
  title?: string
  subtitle?: string
}

// Common state types
export interface PaginationState {
  page: number
  limit: number
  total: number
  hasNext: boolean
  hasPrev: boolean
}

export interface FilterState {
  category?: string
  tags?: string[]
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: Record<string, any>
}

// Success response
export interface SuccessResponse<T = any> {
  success: true
  data: T
  message?: string
}

// Error response
export interface ErrorResponse {
  success: false
  error: AppError
  message: string
}