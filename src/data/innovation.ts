import { InnovationCapability } from "@/types";

export const INNOVATION_CAPABILITIES: InnovationCapability[] = [
  {
    id: "cloud-platforms",
    title: "Resilient Cloud Healthcare Architecture",
    category: "Infrastructure",
    description:
      "High-availability cloud microservices engineered for 99.99% clinical uptime, automated multi-region failover, and strict data partitioning adhering to HIPAA and GDPR principles.",
    techHighlights: [
      "Distributed multi-tenant container architecture",
      "End-to-end encrypted databases at rest and in transit",
      "Automatic scaling to handle sudden patient surges",
      "Continuous automated audit trails and immutable logs",
    ],
    icon: "Cloud",
  },
  {
    id: "ai-diagnostics",
    title: "Applied AI & Clinical Decision Support",
    category: "Artificial Intelligence",
    description:
      "Pragmatic machine learning models deployed for diagnostic pre-triage, wait-time prediction, smart clinical documentation summarization, and anomaly detection.",
    techHighlights: [
      "Natural language clinical documentation assistance",
      "Predictive outpatient queue and wait-time models",
      "Medical terminology indexing and semantic search",
      "Rigorous validation to assist rather than replace clinicians",
    ],
    icon: "Cpu",
  },
  {
    id: "mobile-health",
    title: "High-Performance Mobile Healthcare Apps",
    category: "Mobile Engineering",
    description:
      "Native and cross-platform mobile experiences designed for doctors on the move and patients managing their daily care, with offline-first caching and biometric security.",
    techHighlights: [
      "Fast biometrics (FaceID / Fingerprint) authentication",
      "Offline clinical cache synchronization for intermittent connectivity",
      "Low-latency WebRTC encrypted video and audio calling",
      "Battery-efficient geospatial tracking for emergency fleets",
    ],
    icon: "Smartphone",
  },
  {
    id: "digital-integration",
    title: "Healthcare Interoperability & LIS Integration",
    category: "Integration",
    description:
      "Secure integration pipelines connecting digital health products with laboratory information systems (LIS), pharmacy dispensers, hospital ERPs, and national health registers.",
    techHighlights: [
      "RESTful and GraphQL clinical data APIs",
      "Laboratory instrument barcode and result ingestion pipelines",
      "Standardized data schema mappings (HL7 / FHIR compatibility)",
      "Secure webhook event triggers for cross-system actions",
    ],
    icon: "Network",
  },
  {
    id: "data-analytics",
    title: "Healthcare Analytics & Population Insights",
    category: "Data & Analytics",
    description:
      "Transforming raw operational metrics into actionable clinical dashboards—tracking consultation throughput, prescription patterns, and workforce utilization without exposing patient identifiers.",
    techHighlights: [
      "De-identified aggregate clinical metrics",
      "Interactive executive dashboards with real-time charting",
      "Operational bottleneck detection and resource forecasting",
      "Exportable compliance and clinical audit summaries",
    ],
    icon: "BarChart3",
  },
  {
    id: "workflow-automation",
    title: "Automated Clinical Workflows & Smart Triage",
    category: "Automation",
    description:
      "Eliminating repetitive clerical tasks through automated appointment reminders, instant digital prescription dispatch, and dynamic priority triage for acute patient needs.",
    techHighlights: [
      "Automated SMS/Email patient appointment reminders",
      "Smart digital prescription routing to nearest pharmacies",
      "Rule-based acuity scoring for emergency triage",
      "Automated staff shift broadcast and fill notifications",
    ],
    icon: "Workflow",
  },
];
