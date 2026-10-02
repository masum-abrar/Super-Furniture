import { getBaseUrl } from "@/lib/site";

export default async function sitemap() {
  const SITE_URL = await getBaseUrl();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/og-banner.jpg`],
    },
  ];
}
