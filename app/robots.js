import { getBaseUrl } from "@/lib/site";

export default async function robots() {
  const SITE_URL = await getBaseUrl();
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
