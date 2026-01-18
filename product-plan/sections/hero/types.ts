export interface TechStackItem {
  name: string
  icon: string
}

export interface HeroProps {
  headline: string
  subtext: string
  ctaText: string
  techStack: TechStackItem[]
  onCtaClick?: () => void
}
