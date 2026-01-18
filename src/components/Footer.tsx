export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and tagline */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-semibold text-lg text-slate-900 dark:text-white">
                Dominitec
              </span>
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Quality software, smart pricing.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {currentYear} Dominitec. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
