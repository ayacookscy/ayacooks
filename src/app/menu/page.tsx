import { MenuPage } from "@/features/MenuPage/MenuPage";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://ayacooks.cy";

  return {
    title: "Menu | Aya Cooks – Limassol Middle Eastern Kitchen",
    description:
      "Discover our seasonal menu of Middle Eastern mezze, signature mains, vegan specials, homemade breads, desserts and curated wines at Aya Cooks in Limassol.",
    keywords:
      "Aya Cooks menu, Middle Eastern food, Limassol restaurant menu, vegan friendly, mezze Limassol",
    openGraph: {
      title: "Menu | Aya Cooks – Limassol Middle Eastern Kitchen",
      description:
        "Discover our seasonal menu of Middle Eastern mezze, signature mains, vegan specials, homemade breads, desserts and curated wines at Aya Cooks in Limassol.",
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
      title: "Menu | Aya Cooks – Limassol Middle Eastern Kitchen",
      description:
        "Discover our seasonal menu of Middle Eastern mezze, signature mains, vegan specials, homemade breads, desserts and curated wines at Aya Cooks in Limassol.",
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

export default function Menu() {
  return (
    <>
      <MenuPage />
      <OrganizationStructuredData />
    </>
  );
}
