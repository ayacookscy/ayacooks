import { WelcomePage } from "@/features/WelcomePage/WelcomePage";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://ayacooks.cy";

  return {
    title: "Aya Cooks | Limassol Middle Eastern Kitchen",
    description:
      "Limassol-based Middle Eastern author’s kitchen serving creative mezze, handmade breads and seasonal dishes in a cozy atmosphere.",
    keywords:
      "Aya Cooks, Limassol restaurant, Middle Eastern cuisine, author's kitchen, Cyprus food",
    openGraph: {
      title: "Aya Cooks – Limassol Middle Eastern Kitchen",
      description:
        "Limassol-based Middle Eastern author’s kitchen serving creative mezze, handmade breads and seasonal dishes in a cozy atmosphere.",
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
        "Limassol-based Middle Eastern author’s kitchen serving creative mezze, handmade breads and seasonal dishes in a cozy atmosphere.",
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
