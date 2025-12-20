import { RecipePage } from "@/features/RecipePage/RecipePage";
import { OrganizationStructuredData } from "@/seo/OrganizationStructuredData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://ayacooks.cy";
  const canonicalUrl = `${baseUrl}/recipe`;

  const title = "Easy & Delicious Hummus Recipe | Aya Cooks";
  const description =
    "A gift from Aya: quick, creamy hummus made with chickpeas, tahini, lemon juice and olive oil. Blend, taste and enjoy with pita, veggies or as a spread.";
  const keywords =
    "hummus recipe, easy hummus, delicious hummus, Aya Cooks recipe, Middle Eastern dip, vegan dip, chickpea dip";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Aya Cooks",
      images: [
        {
          url: `${baseUrl}/preview.png`,
          width: 1200,
          height: 630,
          alt: "Easy & Delicious Hummus by Aya Cooks",
        },
      ],
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/preview.png`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Recipe() {
  return (
    <>
      <RecipePage />
      <OrganizationStructuredData />
    </>
  );
}
