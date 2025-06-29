// Framer Motion animation variants - Optimized for performance
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2, ease: "easeOut" }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2, ease: "easeOut" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.2, ease: "easeOut" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.2, ease: "easeOut" }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.2, ease: "easeOut" }
}

// Stagger animations for lists - Optimized
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
}

// Fast stagger for immediate response
export const fastStaggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05
    }
  }
}

export const fastStaggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2, ease: "easeOut" }
}

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
}

export const hoverLift = {
  whileHover: { y: -5 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
}

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.3, ease: "easeInOut" }
}

// Typing animation
export const typingContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
  })
}

export const typingChild = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
}

// Slide animations
export const slideInFromLeft = {
  initial: { x: '-100vw' },
  animate: { x: 0 },
  transition: { type: 'spring', stiffness: 120, damping: 20 }
}

export const slideInFromRight = {
  initial: { x: '100vw' },
  animate: { x: 0 },
  transition: { type: 'spring', stiffness: 120, damping: 20 }
}

// Floating animation
export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Rotate animation
export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

// Card flip animation
export const cardFlip = {
  initial: { rotateY: 0 },
  animate: { rotateY: 180 },
  transition: { duration: 0.6, ease: "easeInOut" }
}

// Draw SVG animation
export const drawSVG = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration: 2, ease: "easeInOut" }
}

// Progress bar animation
export const progressBar = (width: number) => ({
  initial: { width: 0 },
  animate: { width: `${width}%` },
  transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
})

// Modal animations
export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
}

export const modalContent = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 50 },
  transition: { duration: 0.3, ease: "easeOut" }
}

// Navigation menu animations
export const mobileMenuSlide = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { type: 'spring', stiffness: 300, damping: 30 }
}

// Button animations
export const buttonPress = {
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
}

// Loading animations
export const spinnerRotate = {
  animate: { rotate: 360 },
  transition: { duration: 1, repeat: Infinity, ease: "linear" }
}

export const loadingDots = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5]
  },
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }
}