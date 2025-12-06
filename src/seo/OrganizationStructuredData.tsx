import { getCSPNonce } from "@/hooks/useCSPNonce";
import Script from "next/script";

export async function OrganizationStructuredData() {
  const nonce = await getCSPNonce();
  //seo
  const baseUrl = "https://ayacooks.cy";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Aya Cooks",
    description:
      "AYA Cooks — a Limassol-based Middle Eastern restaurant offering daily comfort food with an author’s touch. Fresh & fermented produce, oven-baked bread, and natural wine come together in a cozy, welcoming space that brings people around one table.",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/icons/logo.png`,
      width: 120,
      height: 117,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "aya.cooks.cy@gmail.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.sevenrooms.com/explore/ayacooks/reservations/create/search/?date=2025-10-08&party_size=2",
      "https://www.instagram.com/aya.cooks.cy/",
      "https://www.facebook.com/p/Aya-Cooks-61578103334293/",
    ],
    foundingDate: "2025",
    numberOfEmployees: "1-25",
    industry: "Restaurant",
    serviceArea: {
      "@type": "Place",
      name: "Cyprus",
    },
  };

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      nonce={nonce}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
