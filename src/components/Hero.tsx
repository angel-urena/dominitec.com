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
  const icons: Record<string, JSX.Element> = {
    react: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-9.82 1.12c.54.16 1.11.31 1.71.44l-.56-.73-.4-.72c-.23.59-.45 1.06-.65 1.48l-.1-.47m-.46-6.76c.19.54.46 1.12.73 1.71.16-.54.35-1.08.56-1.62-.53.16-.91.32-1.29-.09m0 6.76c.38.23.76.39 1.29.09-.21-.54-.4-1.08-.56-1.62-.27.59-.54 1.17-.73 1.53m9.82-1.12c-.54-.16-1.11-.31-1.71-.44l.56.73.4.72c.23-.59.45-1.06.65-1.48l.1.47m.46-5.64c-.19-.54-.46-1.12-.73-1.71-.16.54-.35 1.08-.56 1.62.53-.16.91-.32 1.29.09m0 0" />
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.12-.21V7.71c0-.09.05-.17.12-.21l7.44-4.29c.07-.04.16-.04.23 0l7.44 4.29c.07.04.12.12.12.21v8.58c0 .08-.05.17-.12.21l-7.44 4.29c-.07.04-.16.04-.23 0L10 19.65c-.06-.03-.13-.04-.18-.02-.5.18-.59.2-.87.31-.11.04-.28.1.06.28l2.01 1.18c.24.14.51.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2m2.46 5.36c-2.17 0-3.46.92-3.46 2.46 0 1.67 1.29 2.13 3.37 2.34 2.48.25 2.67.63 2.67 1.13 0 .87-.7 1.24-2.35 1.24-2.07 0-2.53-.52-2.68-1.54-.02-.11-.11-.19-.22-.19H10.8c-.13 0-.23.1-.23.23 0 1.33.72 2.92 3.65 2.92 2.19 0 3.45-.86 3.45-2.37 0-1.67-1.13-2.11-3.51-2.42-2.41-.32-2.54-.48-2.54-1.05 0-.47.21-1.09 2-1.09 1.6 0 2.19.35 2.44 1.43.02.1.11.18.22.18h.99c.06 0 .12-.03.16-.08.04-.05.06-.11.05-.17-.15-1.8-1.35-2.63-3.56-2.63" />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02a10.922 10.922 0 00-1.612.509l-.129.056c-.459.186-.894.4-1.312.644a9.547 9.547 0 00-.743-.129 10.138 10.138 0 00-1.476-.086c-.988.005-1.906.151-2.77.422-1.147-.246-2.107-.356-2.954-.352-1.073.006-1.943.156-2.629.488C.224 2.38.003 3.016 0 3.61a4.24 4.24 0 00.5 1.88c.153.328.334.632.534.911.167.244.344.471.528.69a8.33 8.33 0 00-.204.89c-.083.46-.118.937-.099 1.409.063 1.525.517 2.854 1.196 3.826l.005.007c.52.761 1.155 1.234 1.862 1.425.378.103.773.116 1.177.05l.059-.01c.35-.063.69-.175.996-.348l.195-.11a6.72 6.72 0 00.222.315c.07.092.138.183.205.272.23.31.459.587.68.826-.015.009-.029.019-.044.028-.404.254-.89.566-1.115 1.025-.127.257-.178.541-.155.833.023.296.12.569.286.802.176.246.42.442.712.578.29.136.633.21 1.011.213h.01c.694-.008 1.538-.298 2.436-.722l.046-.022a16.95 16.95 0 001.34-.713c.068-.04.132-.08.193-.12.09.012.181.023.274.032a8.08 8.08 0 001.055.036l.111-.004c.66-.03 1.272-.148 1.854-.353.193.18.379.341.555.486l.115.094c.406.326.81.545 1.201.665.39.121.766.144 1.117.082.35-.062.68-.214.964-.448.285-.234.531-.556.711-.957.217-.482.318-.997.382-1.519.064-.522.093-1.054.13-1.561l.001-.022c.035-.486.089-.86.18-1.162l.003-.01a.722.722 0 01.078-.184l.084-.185c.08-.174.163-.34.254-.495.268-.455.584-.853.928-1.186a7.36 7.36 0 01.57-.48 8.288 8.288 0 00.656-2.31c.112-.675.144-1.384.077-2.09a7.872 7.872 0 00-.539-2.086 6.74 6.74 0 00-.457-.87 6.535 6.535 0 00-.621-.823 10.19 10.19 0 00-.958-.935l-.002-.002a10.57 10.57 0 00-2.575-1.627 10.157 10.157 0 00-2.426-.754l-.018-.003A10.082 10.082 0 0017.128 0zM7.665 16.466c.053.103.112.214.168.325" />
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.07 2.07 0 01-.254.104.48.48 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.52.52 0 01-.303.08h-.687c-.151 0-.255-.024-.319-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
      </svg>
    ),
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

                  {/* Code content */}
                  <div className="p-4 font-mono text-sm">
                    <div className="flex gap-4">
                      <div className="text-slate-600 select-none">1</div>
                      <div><span className="text-purple-400">const</span> <span className="text-blue-300">project</span> <span className="text-white">=</span> <span className="text-orange-300">&#123;</span></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-slate-600 select-none">2</div>
                      <div className="pl-4"><span className="text-blue-300">quality</span><span className="text-white">:</span> <span className="text-green-400">"exceptional"</span><span className="text-white">,</span></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-slate-600 select-none">3</div>
                      <div className="pl-4"><span className="text-blue-300">price</span><span className="text-white">:</span> <span className="text-green-400">"competitive"</span><span className="text-white">,</span></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-slate-600 select-none">4</div>
                      <div className="pl-4"><span className="text-blue-300">delivery</span><span className="text-white">:</span> <span className="text-green-400">"fast"</span></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-slate-600 select-none">5</div>
                      <div><span className="text-orange-300">&#125;</span><span className="text-white">;</span></div>
                    </div>
                  </div>
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
