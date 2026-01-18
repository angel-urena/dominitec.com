import { useEffect, useRef, useState } from 'react'

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleUp'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  threshold?: number
  once?: boolean
}

const variantStyles: Record<AnimationVariant, { initial: string; animate: string }> = {
  fadeUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  fadeLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  scaleUp: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
}

export function AnimatedSection({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [hasMounted, setHasMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Track when component mounts to avoid SSR hydration issues
  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once, hasMounted])

  const styles = variantStyles[variant]
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {}

  // Before mount, show content without animation (SSR-safe)
  // After mount, apply animation classes
  const animationClasses = hasMounted
    ? `transition-all duration-700 ease-out ${isVisible ? styles.animate : styles.initial}`
    : styles.animate // Show visible content during SSR/before hydration

  return (
    <div
      ref={ref}
      className={`${animationClasses} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  )
}

// Hook for more granular control
export function useScrollAnimation(options?: { threshold?: number; once?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { threshold = 0.1, once = true } = options || {}

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
