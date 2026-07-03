import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = ["", "/story", "/build", "/services", "/photos"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}/`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
