import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Sparkles,
  Shield,
  Activity,
  Cpu,
  Users,
  FileSpreadsheet,
  Stethoscope,
  Ambulance,
  QrCode,
  ShoppingBag,
  HeartPulse,
  Video,
  Truck,
  Wallet,
  PhoneCall,
  ShieldCheck,
  Plane,
  Pill,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { HEALTHCARE_DOMAINS } from "@/data/domains";
import { ProductCard } from "@/components/products/ProductCard";

interface Props {
  params: {
    slug: string;
  };
}

const ICON_MAP: Record<string, React.ElementType> = {
  FileSpreadsheet,
  Activity,
  Users,
  Stethoscope,
  Ambulance,
  QrCode,
  ShoppingBag,
  HeartPulse,
  Video,
  Truck,
  Wallet,
  PhoneCall,
  ShieldCheck,
  Plane,
  Pill,
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return { title: "Product Not Found | Noorisys Healthcare" };
  }

  return {
    title: `${product.name} | Noorisys Healthcare Portfolio`,
    description: `${product.tagline}. ${product.shortDescription}`,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const IconComponent = ICON_MAP[product.icon] || Activity;
  const domain = HEALTHCARE_DOMAINS.find((d) => d.id === product.domainId);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categories.some((c) => product.categories.includes(c))
  ).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-text-muted mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-[#12CDB5] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Products</span>
          </Link>
          <span>/</span>
          <span className="text-text-muted">{product.category}</span>
          <span>/</span>
          <span className="text-white font-medium">{product.name}</span>
        </div>

        {/* Hero Product Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#10243A] to-[#0B1929] border border-white/10 shadow-glass mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Header info */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 sm:p-4 rounded-2xl border flex items-center justify-center min-w-[70px] h-16 shadow-[0_0_20px_rgba(0,229,255,0.2)] ${
                  product.logoUrl
                    ? "bg-white/95 border-white/20"
                    : "bg-[#040810] border-white/10"
                }`}>
                  {product.logoUrl ? (
                    <img
                      src={product.logoUrl}
                      alt={product.name}
                      className="h-10 max-w-[160px] w-auto object-contain"
                    />
                  ) : (
                    <IconComponent className="h-8 w-8 text-[#00E5FF]" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                      {product.name}
                    </h1>
                    {product.badge && (
                      <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-[#12CDB5]/10 text-[#43E6D0] border border-[#12CDB5]/30">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#12CDB5] uppercase tracking-wider block mt-1">
                    {product.category}
                  </span>
                </div>
              </div>

              <p className="text-lg sm:text-xl font-medium text-text-primary mb-4 leading-snug">
                {product.tagline}
              </p>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {product.verifiedUrl ? (
                  <a
                    href={product.verifiedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12CDB5] hover:bg-[#43E6D0] text-[#07111F] text-xs font-bold shadow-[0_0_20px_rgba(18,205,181,0.35)] transition-all"
                  >
                    <span>Visit Official Platform</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-text-muted">
                    <Shield className="h-3.5 w-3.5 text-[#12CDB5]" />
                    Enterprise Deployment (URL Pending Confirmation)
                  </span>
                )}

                <Link
                  href={`/contact?interest=Product+Enquiry&product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10243A] hover:bg-white/10 text-white text-xs font-semibold border border-white/15 hover:border-[#12CDB5]/40 transition-all"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#12CDB5]" />
                  <span>Enquire About {product.name}</span>
                </Link>
              </div>
            </div>

            {/* Right Metric Quick-Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#07111F]/80 border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase text-[#43E6D0] tracking-wider block">
                Portfolio Snapshot
              </span>

              <div className="space-y-3">
                {product.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 text-xs">
                    <span className="text-text-muted">{metric.label}</span>
                    <span className="font-mono font-semibold text-white">
                      {metric.value}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between py-2 border-b border-white/5 text-xs">
                  <span className="text-text-muted">Status</span>
                  <span className="font-mono font-semibold text-[#12CDB5]">
                    {product.status}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 text-xs">
                  <span className="text-text-muted">Parent Entity</span>
                  <span className="text-text-secondary">Noorisys Technologies</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Sections: Features, Tech Stack, Stakeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Key Features (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#10243A]/80 border border-white/10">
            <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-[#12CDB5]" />
              Verified Clinical & Operational Capabilities
            </h3>

            <div className="space-y-4">
              {product.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#12CDB5] mt-1.5 shrink-0" />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stakeholders & Technologies (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Stakeholders */}
            <div className="p-8 rounded-3xl bg-[#10243A]/80 border border-white/10">
              <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-[#12CDB5]" />
                Primary Stakeholders
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.stakeholders.map((stk, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-text-secondary"
                  >
                    {stk}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="p-8 rounded-3xl bg-[#10243A]/80 border border-white/10">
              <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-[#12CDB5]" />
                Architectural Highlights
              </h3>
              <div className="space-y-2">
                {product.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-text-muted p-2 rounded-lg bg-white/[0.02]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#43E6D0]" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase text-[#43E6D0]">
                  Portfolio Continuity
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-0.5">
                  Related Healthcare Innovations
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs font-medium text-[#12CDB5] hover:text-[#43E6D0] flex items-center gap-1"
              >
                <span>View all products</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
