import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/landing/AmbientBackground";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Features } from "@/components/landing/Features";
import { AiIntelligence } from "@/components/landing/AiIntelligence";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Fitness } from "@/components/landing/Fitness";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Motivation } from "@/components/landing/Motivation";
import { Footer } from "@/components/landing/Footer";

const title = "Army Prep AI — AI-Driven Army Recruitment Preparation";
const description =
  "AI-driven army recruitment preparation platform with personalized learning, mock assessments, performance analytics and GPS fitness tracking for defence aspirants.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <AiIntelligence />
        <HowItWorks />
        <Fitness />
        <DashboardPreview />
        <Motivation />
      </main>
      <Footer />
    </>
  );
}
