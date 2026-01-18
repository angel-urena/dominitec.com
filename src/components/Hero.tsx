import {
  SiReact,
  SiSvelte,
  SiVuedotjs,
  SiTypescript,
  SiPython,
  SiElixir,
  SiGo,
  SiRust,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
} from 'react-icons/si'
import { TypeWriter } from './TypeWriter'

interface TechStackItem {
  name: string
  icon: string
}

interface HeroProps {
  headline: string
  subtext: string
  ctaText: string
  techStack: TechStackItem[]
  onCtaClick?: () => void
}

function TechIcon({ icon, className }: { icon: string; className?: string }) {
  const iconProps = { className }

  const icons: Record<string, JSX.Element> = {
    react: <SiReact {...iconProps} />,
    svelte: <SiSvelte {...iconProps} />,
    vuejs: <SiVuedotjs {...iconProps} />,
    typescript: <SiTypescript {...iconProps} />,
    python: <SiPython {...iconProps} />,
    elixir: <SiElixir {...iconProps} />,
    go: <SiGo {...iconProps} />,
    rust: <SiRust {...iconProps} />,
    postgresql: <SiPostgresql {...iconProps} />,
    docker: <SiDocker {...iconProps} />,
    kubernetes: <SiKubernetes {...iconProps} />,
  }

  return icons[icon] || null
}

export function Hero({ headline, subtext, ctaText, techStack, onCtaClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rotate-45 bg-blue-500/20 dark:bg-blue-400/30" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-red-500/20 dark:bg-red-400/20" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rotate-12 bg-blue-600/15 dark:bg-blue-400/20" />
        <div className="absolute top-2/3 right-1/4 w-5 h-5 rotate-45 border-2 border-blue-500/20 dark:border-blue-400/30" />

        {/* Diagonal lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="currentColor" strokeWidth="1" className="text-blue-600 dark:text-blue-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              <span className="block">{headline.split(',')[0]},</span>
              <span className="block mt-2 text-blue-600 dark:text-blue-400">
                {headline.split(',')[1]?.trim() || 'Smart Pricing'}
              </span>
            </h1>

            <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {subtext}
            </p>

            {/* CTA Button */}
            <div className="mt-8 lg:mt-10">
              <button
                onClick={() => onCtaClick?.()}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30"
              >
                {ctaText}
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Tech Stack */}
            <div className="mt-12 lg:mt-16">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                Technologies we work with
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600/50 transition-all duration-200"
                  >
                    <TechIcon icon={tech.icon} className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative background shapes */}
              <div className="absolute -inset-4">
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/15 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 dark:bg-red-400/10 rounded-full blur-2xl" />
              </div>

              {/* Main illustration container */}
              <div className="relative bg-white dark:bg-slate-800/80 rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-black/30 border border-slate-200/50 dark:border-slate-700/50 p-8 backdrop-blur-sm">
                {/* Code window mockup */}
                <div className="bg-slate-900 dark:bg-slate-950 rounded-xl overflow-hidden">
                  {/* Window header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-900 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-slate-400 font-mono">dominitec-app</span>
                  </div>

                  {/* Code content with typing animation */}
                  <TypeWriter
                    lines={[
                      {
                        lineNumber: 1,
                        text: 'const project = {',
                        content: <><span className="text-purple-400">const</span> <span className="text-blue-300">project</span> <span className="text-white">=</span> <span className="text-orange-300">{'{'}</span></>,
                      },
                      {
                        lineNumber: 2,
                        text: '    quality: "exceptional",',
                        content: <span className="pl-4"><span className="text-blue-300">quality</span><span className="text-white">:</span> <span className="text-green-400">"exceptional"</span><span className="text-white">,</span></span>,
                      },
                      {
                        lineNumber: 3,
                        text: '    price: "competitive",',
                        content: <span className="pl-4"><span className="text-blue-300">price</span><span className="text-white">:</span> <span className="text-green-400">"competitive"</span><span className="text-white">,</span></span>,
                      },
                      {
                        lineNumber: 4,
                        text: '    delivery: "fast"',
                        content: <span className="pl-4"><span className="text-blue-300">delivery</span><span className="text-white">:</span> <span className="text-green-400">"fast"</span></span>,
                      },
                      {
                        lineNumber: 5,
                        text: '};',
                        content: <><span className="text-orange-300">{'}'}</span><span className="text-white">;</span></>,
                      },
                    ]}
                    typingSpeed={40}
                    startDelay={800}
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  DR-Based Team
                </div>
                <div className="absolute -bottom-3 -left-3 bg-red-500 dark:bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Bilingual
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
