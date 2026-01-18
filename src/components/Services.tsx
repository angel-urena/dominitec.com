import { AnimatedSection } from './AnimatedSection'

interface Service {
  id: string
  icon: string
  title: string
  description: string
}

interface ServicesProps {
  services: Service[]
}

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const isFirst = index === 0

  return (
    <div className="group relative">
      {/* Card glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

      <div className="relative h-full bg-white dark:bg-slate-800/80 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-slate-900/5 dark:shadow-black/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-500/5 group-hover:-translate-y-1">
        {/* Icon with gradient background */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl shadow-lg"
          style={{
            background: isFirst
              ? 'linear-gradient(to bottom right, #3b82f6, #2563eb)'
              : 'linear-gradient(to bottom right, #ef4444, #dc2626)',
            boxShadow: isFirst
              ? '0 10px 15px -3px rgba(59, 130, 246, 0.25)'
              : '0 10px 15px -3px rgba(239, 68, 68, 0.25)',
          }}
        >
          {service.icon === 'cog' ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {service.description}
        </p>

        {/* Decorative arrow */}
        <div className="mt-6 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rotate-45 bg-blue-500/20 dark:bg-blue-400/30" />
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-red-500/15 dark:bg-red-400/20" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 rotate-12 bg-blue-600/15 dark:bg-blue-400/20" />

        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0H0v60" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900 dark:text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Specialized development services tailored to bring your ideas to life
          </p>
        </AnimatedSection>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 150} variant="fadeUp">
              <ServiceCard service={service} index={index} />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            Ready to start your project?{' '}
            <a href="#contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
