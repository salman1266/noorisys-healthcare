import { HealthcareDomain } from "@/types";

export const HEALTHCARE_DOMAINS: HealthcareDomain[] = [
  {
    id: "clinical-management",
    slug: "clinical-management",
    title: "Clinical Management & Practice Systems",
    tagline: "Empowering physicians and clinics with digital charting and paperless workflows",
    shortDescription:
      "Modern Electronic Medical Records (EMR), appointment scheduling, and outpatient clinic management architectures that eliminate administrative burdens and keep focus on patient outcomes.",
    fullDescription:
      "Our clinical management portfolio focuses on foundational clinical operational software. By replacing fragmented paperwork with encrypted cloud EMRs, multi-tenant scheduling engines, and automated prescription tools, clinics operate with higher speed, fewer clerical errors, and complete clinical accountability.",
    icon: "Stethoscope",
    productSlugs: ["nakbho", "clinicdots", "hanadoc"],
    keyCapabilities: [
      "Encrypted cloud EMR & clinical document archiving",
      "Dynamic multi-provider scheduling & queue management",
      "Digital prescription issuance with drug interaction alerts",
      "Integrated practice billing and revenue reporting",
      "Role-based clinical permissions for physicians and nurses",
    ],
    impactSummary:
      "Demonstrated streamlining of outpatient patient intake, reduced wait times, and end-to-end digital auditability.",
  },
  {
    id: "workforce-infrastructure",
    slug: "workforce-infrastructure",
    title: "Healthcare Workforce & Infrastructure",
    tagline: "Synchronizing clinical rotas, primary care staffing, and compliance across networks",
    shortDescription:
      "Intelligent workforce orchestration designed for health authorities, GP federations, and hospital trusts to solve locum shortages, track credentials, and manage shift rotas.",
    fullDescription:
      "Healthcare workforce shortages and administrative fragmentation present immense operational challenges. We build technology that coordinates clinical staffing across primary care networks, validating clinician credentials, managing complex shift rotas, and ensuring compliant coverage for surgeries and emergency wards.",
    icon: "Users",
    productSlugs: ["lpc-federate"],
    keyCapabilities: [
      "Dynamic primary care rota management and shift broadcasts",
      "Automated credentialing, GMC/NMC register checks, and compliance vaults",
      "Inter-surgery workforce sharing across Primary Care Networks (PCNs)",
      "Instant push notifications for urgent shift covers",
      "Compliance audit reporting aligned with national health guidelines",
    ],
    impactSummary:
      "Empowers primary care networks to fill vacant shifts quickly while maintaining 100% compliance and credential verification.",
  },
  {
    id: "patient-care",
    slug: "digital-patient-care",
    title: "Digital Patient Care & Access",
    tagline: "Connecting patients and licensed physicians across borders and devices",
    shortDescription:
      "Patient-centric teleconsultation platforms, encrypted medical vaults, and mobile health fintech solutions bringing expert clinical care closer to individuals everywhere.",
    fullDescription:
      "Digital patient access transforms healthcare from episodic clinic visits into continuous, proactive care. Our solutions combine high-definition encrypted teleconsultations, mobile health lockers, and smart payment gateways so patients can consult certified physicians, receive prescriptions, and manage medical records from anywhere.",
    icon: "Video",
    productSlugs: ["santeya", "iyara", "allodocta"],
    keyCapabilities: [
      "End-to-end encrypted video and audio teleconsultations",
      "Mobile health vaults with patient-controlled access sharing",
      "Direct digital prescription dispatch to verified partner pharmacies",
      "Integrated healthcare micro-wallets and contactless payments",
      "Low-bandwidth adaptive streaming for remote and rural communities",
    ],
    impactSummary:
      "Enables continuous remote consultations, reduces non-urgent hospital visits, and provides unbanked and underserved populations with digital care access.",
  },
  {
    id: "emergency-community",
    slug: "emergency-community",
    title: "Emergency & Community Healthcare",
    tagline: "Critical response networks, live ambulance telemetry, and community blood donor mobilization",
    shortDescription:
      "Mission-critical emergency dispatch, geolocated trauma routing, and real-time blood donor networks engineered to save precious minutes when lives are on the line.",
    fullDescription:
      "Emergency medical response requires zero-latency coordination between victims, first responders, ambulance fleets, and trauma centers. Our technology provides real-time geospatial tracking, emergency dispatch consoles, and rapid community mobilization platforms for critical blood donations and urgent ambulance deployment.",
    icon: "Ambulance",
    productSlugs: ["chapchap", "blood-donation"],
    keyCapabilities: [
      "Real-time GPS ambulance telemetry and emergency routing",
      "Hospital trauma bed readiness and intake signaling",
      "Geofenced blood donor mobilization with blood-group matching",
      "Instant SOS alerts with precise geospatial coordinates",
      "Privacy-first communication protecting donor and patient identities",
    ],
    impactSummary:
      "Drastically reduces emergency dispatch response times and connects hospitals with verified life-saving blood donors in critical minutes.",
  },
  {
    id: "digital-diagnostics",
    slug: "digital-diagnostics",
    title: "Digital Diagnostics & Verification",
    tagline: "Automating clinical intake, specimen tracking, and diagnostic triage",
    shortDescription:
      "Intelligent patient intake kiosks, diagnostic laboratory order integrations, and rapid pre-screening engines that minimize errors and accelerate turnaround times.",
    fullDescription:
      "Accurate and timely diagnostics form the bedrock of 70% of medical clinical decisions. Our diagnostics solutions bridge patients, clinical labs, and physicians through self-service check-in kiosks, digital consent management, and laboratory information system (LIS) integrations.",
    icon: "QrCode",
    productSlugs: ["fastercheck", "welzo", "aeromedical"],
    keyCapabilities: [
      "Contactless QR kiosk check-in and waiting-room orchestration",
      "Automated clinical triage questionnaires for diagnostic readiness",
      "Direct Laboratory Information System (LIS) integration",
      "Digital report delivery with physician review dashboards",
      "Structured health biomarker visualization and tracking",
    ],
    impactSummary:
      "Reduces clinic check-in wait times from 15 minutes to under 60 seconds and accelerates delivery of diagnostic reports.",
  },
  {
    id: "pharmacy-wellness",
    slug: "pharmacy-wellness",
    title: "Pharmacy & Wellness",
    tagline: "Modernizing prescription fulfillment, at-home lab diagnostics, and chronic care delivery",
    shortDescription:
      "Comprehensive digital pharmacy ecosystems and diagnostic wellness marketplaces providing seamless repeat prescriptions, at-home test kits, and doorstep delivery.",
    fullDescription:
      "The pharmacy is often the first point of contact in healthcare. Our pharmacy and wellness portfolio brings digital convenience to pharmaceutical care—enabling patients to order prescriptions, schedule repeat medications, access certified at-home test kits, and consult clinical pharmacists from their devices.",
    icon: "Pill",
    productSlugs: ["welzo", "curigo", "clinicdots"],
    keyCapabilities: [
      "Digital prescription intake and automated repeat medication scheduling",
      "At-home pathology test kit ordering with doctor-reviewed results",
      "Tracked and temperature-assured home medication delivery",
      "Integrated clinical pharmacist tele-consultations",
      "Pharmacy stock and inventory synchronization with regional suppliers",
    ],
    impactSummary:
      "Improves patient adherence to chronic therapies and expands access to preventive at-home biomarker testing.",
  },
  {
    id: "specialized-services",
    slug: "specialized-medical-services",
    title: "Specialized Medical Services",
    tagline: "Niche healthcare solutions spanning aviation medicine, certified medical logistics, and cross-border care financing",
    shortDescription:
      "Tailored digital platforms serving high-precision healthcare sectors: certified aeromedical pilot licensing, cold-chain biological sample couriers, and diaspora health insurance.",
    fullDescription:
      "Certain healthcare domains require deeply specialized workflows that generic medical software cannot address. Our portfolio includes dedicated platforms for aviation regulatory compliance, certified biological specimen transport with IoT cold-chain tracking, and diaspora-funded healthcare financing.",
    icon: "ShieldCheck",
    productSlugs: ["coursier-medical", "izikare", "aeromedical"],
    keyCapabilities: [
      "UK CAA & EASA aviation medical examination workflows and pilot certification",
      "Temperature-controlled biological specimen logistics with digital chain of custody",
      "Direct cross-border healthcare funding and clinic voucher redemption",
      "Tamper-proof audit logs for medical regulatory bodies",
      "IoT sensor telemetry for cold-chain transport verification",
    ],
    impactSummary:
      "Delivers specialized compliance, verified logistics, and transparent diaspora care financing across international healthcare ecosystems.",
  },
];
