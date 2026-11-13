import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { HEALTHCARE_DOMAINS } from "@/data/domains";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://healthcare.noorisys.com";

  // Core static pages
  const staticPages = [
    "",
    "/products",
    "/solutions",
    "/innovation",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic product detail pages
  const productPages = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...productPages];
}
