import { MenuPage } from "@/features/MenuPage/MenuPage";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://ayacooks.cy";

  return {
    title: "Menu | Aya Cooks – Limassol Middle Eastern Kitchen",
    description:
      "Explore Aya’s Middle Eastern menu with fresh and fermented produce, oven-baked bread, vibrant mezze, and seasonal comfort dishes designed for sharing. Natural wine, warm flavors, and a creative author’s touch make Aya one of Limassol’s favorite spots for modern Middle Eastern food.",
    keywords:
      "Aya Cooks menu, Middle Eastern food, Limassol restaurant menu, vegan friendly, mezze Limassol",
    openGraph: {
      title: "Menu | Aya Cooks – Limassol Middle Eastern Kitchen",
      description:
        "Explore Aya’s Middle Eastern menu with fresh and fermented produce, oven-baked bread, vibrant mezze, and seasonal comfort dishes designed for sharing. Natural wine, warm flavors, and a creative author’s touch make Aya one of Limassol’s favorite spots for modern Middle Eastern food.",
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
        "Explore Aya’s Middle Eastern menu with fresh and fermented produce, oven-baked bread, vibrant mezze, and seasonal comfort dishes designed for sharing. Natural wine, warm flavors, and a creative author’s touch make Aya one of Limassol’s favorite spots for modern Middle Eastern food.",
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
