import { headers } from "next/headers";
import { SITE_URL } from "./data";

/**
 * The website's own address, e.g. "https://superfurniture.com.bd".
 * Uses NEXT_PUBLIC_SITE_URL when set; otherwise the address the visitor
 * (or WhatsApp/Facebook's link-preview robot) actually opened. That way the
 * preview banner always loads from YOUR site, whatever domain you use.
 */
export async function getBaseUrl() {
  if (SITE_URL) return SITE_URL;
  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") || h.get("host");
    if (host) {
      const proto = h.get("x-forwarded-proto") || (host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https");
      return `${proto.split(",")[0]}://${host.split(",")[0]}`;
    }
  } catch { /* no request (build time) */ }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}
