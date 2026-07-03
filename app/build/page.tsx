import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Build",
  description:
    "Case studies of the systems running Al-Amin Trading Organization — problem, what I built, stack, impact.",
};

export default function BuildPage() {
  return (
    <StubPage
      eyebrow="/BUILD"
      title="Case studies, written like spec sheets."
      line="Problem, what I built, stack, impact — for the three systems in production and the one in active development. Real numbers only, so they land here once confirmed."
      cta={{ href: "/#systems", label: "SEE THE SYSTEMS" }}
    />
  );
}
