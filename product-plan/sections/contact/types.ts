// =============================================================================
// Data Types
// =============================================================================

export interface ContactField {
  label: string
  placeholder: string
}

export interface ContactConfig {
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

export interface ContactFormData {
  name: string
  email: string
  message: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface ContactProps {
  /** Configuration for the contact form (headline, subtext, placeholders) */
  contact: ContactConfig
  /** Called when user submits the form with valid data */
  onSubmit?: (data: ContactFormData) => void
}
