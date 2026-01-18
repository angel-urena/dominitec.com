import { useState, useEffect } from 'react'

interface CodeLine {
  lineNumber: number
  content: React.ReactNode
  text: string
}

interface TypeWriterProps {
  lines: CodeLine[]
  typingSpeed?: number
  startDelay?: number
}

export function TypeWriter({ lines, typingSpeed = 50, startDelay = 500 }: TypeWriterProps) {
  const [displayedLines, setDisplayedLines] = useState<number[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)

  // Start after delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true)
      setIsTyping(true)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [startDelay])

  // Typing effect
  useEffect(() => {
    if (!started || !isTyping || currentLineIndex >= lines.length) return

    const currentLine = lines[currentLineIndex]
    const lineLength = currentLine.text.length

    if (currentCharIndex < lineLength) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      // Line complete, move to next
      setDisplayedLines((prev) => [...prev, currentLineIndex])
      if (currentLineIndex < lines.length - 1) {
        setCurrentLineIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      } else {
        setIsTyping(false)
      }
    }
  }, [started, isTyping, currentLineIndex, currentCharIndex, lines, typingSpeed])

  const renderLine = (line: CodeLine, index: number) => {
    const isCurrentLine = index === currentLineIndex && isTyping
    const isDisplayed = displayedLines.includes(index)
    const shouldShow = isDisplayed || isCurrentLine

    if (!shouldShow) return null

    return (
      <div key={line.lineNumber} className="flex gap-4">
        <div className="text-slate-600 select-none">{line.lineNumber}</div>
        <div className="relative">
          {isCurrentLine ? (
            <>
              <span
                className="invisible"
                dangerouslySetInnerHTML={{
                  __html: line.text.slice(0, currentCharIndex).replace(/</g, '&lt;').replace(/>/g, '&gt;'),
                }}
              />
              <span className="absolute left-0 top-0">
                {renderPartialContent(line, currentCharIndex)}
              </span>
              <span className="inline-block w-2 h-5 bg-white/80 animate-pulse ml-0.5 align-middle" />
            </>
          ) : (
            line.content
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 font-mono text-sm">
      {lines.map((line, index) => renderLine(line, index))}
      {!started && (
        <div className="flex gap-4">
          <div className="text-slate-600 select-none">1</div>
          <div>
            <span className="inline-block w-2 h-5 bg-white/80 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  )
}

// Helper to render partially typed content with syntax highlighting
function renderPartialContent(line: CodeLine, charIndex: number): React.ReactNode {
  const text = line.text.slice(0, charIndex)

  // Line 1: const project = {
  if (line.lineNumber === 1) {
    if (charIndex <= 5) return <span className="text-purple-400">{text}</span>
    if (charIndex <= 6) return <><span className="text-purple-400">const</span><span className="text-white">{text.slice(5)}</span></>
    if (charIndex <= 13) return <><span className="text-purple-400">const</span><span className="text-white"> </span><span className="text-blue-300">{text.slice(6)}</span></>
    if (charIndex <= 14) return <><span className="text-purple-400">const</span><span className="text-white"> </span><span className="text-blue-300">project</span><span className="text-white">{text.slice(13)}</span></>
    if (charIndex <= 16) return <><span className="text-purple-400">const</span><span className="text-white"> </span><span className="text-blue-300">project</span><span className="text-white"> = </span></>
    return <><span className="text-purple-400">const</span><span className="text-white"> </span><span className="text-blue-300">project</span><span className="text-white"> = </span><span className="text-orange-300">{text.slice(16)}</span></>
  }

  // Line 2: quality: "exceptional",
  if (line.lineNumber === 2) {
    const indent = '    '
    if (charIndex <= 4) return <span className="pl-4">{text.slice(4)}</span>
    if (charIndex <= 11) return <span className="pl-4"><span className="text-blue-300">{text.slice(4)}</span></span>
    if (charIndex <= 12) return <span className="pl-4"><span className="text-blue-300">quality</span><span className="text-white">{text.slice(11)}</span></span>
    if (charIndex <= 14) return <span className="pl-4"><span className="text-blue-300">quality</span><span className="text-white">: </span></span>
    if (charIndex <= 27) return <span className="pl-4"><span className="text-blue-300">quality</span><span className="text-white">: </span><span className="text-green-400">{text.slice(14)}</span></span>
    return <span className="pl-4"><span className="text-blue-300">quality</span><span className="text-white">: </span><span className="text-green-400">"exceptional"</span><span className="text-white">,</span></span>
  }

  // Line 3: price: "competitive",
  if (line.lineNumber === 3) {
    if (charIndex <= 4) return <span className="pl-4">{text.slice(4)}</span>
    if (charIndex <= 9) return <span className="pl-4"><span className="text-blue-300">{text.slice(4)}</span></span>
    if (charIndex <= 10) return <span className="pl-4"><span className="text-blue-300">price</span><span className="text-white">{text.slice(9)}</span></span>
    if (charIndex <= 12) return <span className="pl-4"><span className="text-blue-300">price</span><span className="text-white">: </span></span>
    if (charIndex <= 25) return <span className="pl-4"><span className="text-blue-300">price</span><span className="text-white">: </span><span className="text-green-400">{text.slice(12)}</span></span>
    return <span className="pl-4"><span className="text-blue-300">price</span><span className="text-white">: </span><span className="text-green-400">"competitive"</span><span className="text-white">,</span></span>
  }

  // Line 4: delivery: "fast"
  if (line.lineNumber === 4) {
    if (charIndex <= 4) return <span className="pl-4">{text.slice(4)}</span>
    if (charIndex <= 12) return <span className="pl-4"><span className="text-blue-300">{text.slice(4)}</span></span>
    if (charIndex <= 13) return <span className="pl-4"><span className="text-blue-300">delivery</span><span className="text-white">{text.slice(12)}</span></span>
    if (charIndex <= 15) return <span className="pl-4"><span className="text-blue-300">delivery</span><span className="text-white">: </span></span>
    return <span className="pl-4"><span className="text-blue-300">delivery</span><span className="text-white">: </span><span className="text-green-400">{text.slice(15)}</span></span>
  }

  // Line 5: };
  if (line.lineNumber === 5) {
    if (charIndex <= 1) return <span className="text-orange-300">{text}</span>
    return <><span className="text-orange-300">{'}'}</span><span className="text-white">;</span></>
  }

  return text
}
