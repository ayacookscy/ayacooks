import { WelcomePage } from "@/features/WelcomePage/WelcomePage";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://ayacooks.cy";

  return {
    title: "Aya Cooks | Limassol Middle Eastern Kitchen",
    description:
      "AYA Cooks — a Limassol-based Middle Eastern restaurant offering daily comfort food with an author’s touch. Fresh & fermented produce, oven-baked bread, and natural wine come together in a cozy, welcoming space that brings people around one table.",
    keywords:
      "Aya Cooks, Limassol restaurant, Middle Eastern cuisine, author's kitchen, Cyprus food",
    openGraph: {
      title: "Aya Cooks – Limassol Middle Eastern Kitchen",
      description:
        "AYA Cooks — a Limassol-based Middle Eastern restaurant offering daily comfort food with an author’s touch. Fresh & fermented produce, oven-baked bread, and natural wine come together in a cozy, welcoming space that brings people around one table.",
      type: "website",
      siteName: "Aya Cooks",
      images: [
        {
          url: `${baseUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: "Aya Cooks | Restaurant",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Aya Cooks – Limassol Middle Eastern Kitchen",
      description:
        "AYA Cooks — a Limassol-based Middle Eastern restaurant offering daily comfort food with an author’s touch. Fresh & fermented produce, oven-baked bread, and natural wine come together in a cozy, welcoming space that brings people around one table.",
      images: [`${baseUrl}/preview.png`],
    },
    alternates: {
      canonical: baseUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Home() {
  return (
    <>
      <WelcomePage />
      <OrganizationStructuredData />
    </>
  );
}
