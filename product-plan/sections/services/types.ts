// =============================================================================
// Data Types
// =============================================================================

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface ServicesProps {
  /** The list of services to display */
  services: Service[]
}
