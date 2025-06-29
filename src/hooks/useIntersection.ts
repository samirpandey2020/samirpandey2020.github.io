import { useState, useEffect, useRef } from 'react'
import type { IntersectionConfig } from '@/types'

export function useIntersection({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: IntersectionConfig = {}) {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)
        
        if (inView && !hasBeenInView) {
          setHasBeenInView(true)
        }

        // If triggerOnce is true and element has been in view, stop observing
        if (triggerOnce && inView && !hasBeenInView) {
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasBeenInView])

  return {
    ref: elementRef,
    isInView: triggerOnce ? hasBeenInView : isInView,
    hasBeenInView
  }
}

// Hook for multiple elements
export function useIntersectionList(
  config: IntersectionConfig = {}
) {
  const [entries, setEntries] = useState<Map<Element, IntersectionObserverEntry>>(new Map())
  const elementsRef = useRef<Set<Element>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const observe = (element: Element) => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (observerEntries) => {
          setEntries((prev) => {
            const newEntries = new Map(prev)
            observerEntries.forEach((entry) => {
              newEntries.set(entry.target, entry)
            })
            return newEntries
          })
        },
        {
          threshold: config.threshold || 0.1,
          rootMargin: config.rootMargin || '0px'
        }
      )
    }

    elementsRef.current.add(element)
    observerRef.current.observe(element)
  }

  const unobserve = (element: Element) => {
    if (observerRef.current) {
      observerRef.current.unobserve(element)
    }
    elementsRef.current.delete(element)
    setEntries((prev) => {
      const newEntries = new Map(prev)
      newEntries.delete(element)
      return newEntries
    })
  }

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return { observe, unobserve, entries }
}