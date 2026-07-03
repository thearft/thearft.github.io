import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Story",
  description:
    "From a sacrificed calculator to a trading house in Gazipur — the full story of an AI engineer building his family business's next chapter.",
};

export default function StoryPage() {
  return (
    <StubPage
      eyebrow="/STORY"
      title="The full story is being written properly."
      line="Six beats, from a sacrificed calculator to a trading house in Gazipur. Until it ships, the short version is on the homepage."
      cta={{ href: "/#story", label: "READ THE SHORT VERSION" }}
    />
  );
}
