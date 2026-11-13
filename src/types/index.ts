export type ProductCategory =
  | "Clinical Management"
  | "Healthcare Workforce"
  | "Digital Patient Care"
  | "Emergency & Community Healthcare"
  | "Digital Diagnostics"
  | "Pharmacy & Wellness"
  | "Specialized Medical Services";

export interface ProductMetric {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: ProductCategory;
  categories: ProductCategory[];
  verifiedUrl: string | null;
  status: "Live & Active" | "Enterprise Deployment" | "Active Network";
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  stakeholders: string[];
  technologies: string[];
  domainId: string;
  metrics: ProductMetric[];
  icon: string;
  badge?: string;
  logoUrl?: string;
}

export interface HealthcareDomain {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  productSlugs: string[];
  keyCapabilities: string[];
  impactSummary: string;
}

export interface InnovationCapability {
  id: string;
  title: string;
  category: string;
  description: string;
  techHighlights: string[];
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  areaOfInterest:
    | "Product Enquiry"
    | "Business Partnership"
    | "Technology Collaboration"
    | "General Enquiry";
  message: string;
}
