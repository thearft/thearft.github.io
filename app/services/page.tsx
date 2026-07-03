import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business messaging bots, document and billing automation, data rescue and migration, and custom web platforms with AI integration.",
};

export default function ServicesPage() {
  return (
    <StubPage
      eyebrow="/SERVICES"
      title="Four lanes, buyable and concrete."
      line="Business messaging bots, document and billing automation, data rescue and migration, and custom web platforms with AI built in. Everything I sell, I already run in my own business. Until this page ships, the doors on the homepage reach me."
      cta={{ href: "/#doors", label: "GO TO THE DOORS" }}
    />
  );
}
