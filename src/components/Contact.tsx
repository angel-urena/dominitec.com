import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

interface ContactField {
  label: string
  placeholder: string
}

interface ContactConfig {
  headline: string
  subtext: string
  submitButtonText: string
  fields: {
    name: ContactField
    email: ContactField
    message: ContactField
  }
  successMessage: string
}

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactProps {
  contact: ContactConfig
}

export function Contact({ contact }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      // Reset form and show success
      setFormData({ name: '', email: '', message: '' })
      setShowSuccess(true)

      // Hide success message after 4 seconds
      setTimeout(() => setShowSuccess(false), 4000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    // Clear submit error when user starts typing
    if (submitError) {
      setSubmitError(null)
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-5 h-5 rotate-45 bg-blue-500/20 dark:bg-blue-400/30" />
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 rounded-full bg-red-500/15 dark:bg-red-400/20" />
        <div className="absolute top-1/2 left-1/4 w-6 h-6 rotate-12 border-2 border-blue-500/20 dark:border-blue-400/20" />

        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0H0v60" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900 dark:text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {contact.headline}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {contact.subtext}
          </p>
        </AnimatedSection>

        {/* Success notification */}
        {showSuccess && (
          <div className="mb-8 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-green-800 dark:text-green-300 font-medium">
              {contact.successMessage}
            </p>
          </div>
        )}

        {/* Error notification */}
        {submitError && (
          <div className="mb-8 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-red-800 dark:text-red-300 font-medium">
              {submitError}
            </p>
          </div>
        )}

        {/* Form card */}
        <AnimatedSection variant="scaleUp" delay={150}>
          <div className="relative">
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-10 blur-lg" />

            <form
            onSubmit={handleSubmit}
            className="relative bg-white dark:bg-slate-800/80 rounded-2xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-700/50 shadow-xl shadow-slate-900/5 dark:shadow-black/20 backdrop-blur-sm"
          >
            {/* Name field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                {contact.fields.name.label}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={contact.fields.name.placeholder}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 outline-none ${
                  errors.name
                    ? 'border-red-500 dark:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20'
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                {contact.fields.email.label}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contact.fields.email.placeholder}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 outline-none ${
                  errors.email
                    ? 'border-red-500 dark:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20'
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message field */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                {contact.fields.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder={contact.fields.message.placeholder}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200 outline-none resize-none ${
                  errors.message
                    ? 'border-red-500 dark:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20'
                }`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  {contact.submitButtonText}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              )}
            </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
