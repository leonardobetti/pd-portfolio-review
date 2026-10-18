import { Criteria } from "@/components/Criteria";
import { Evals } from "@/components/Evals";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Score } from "@/components/Score";
import { UseInClaude } from "@/components/UseInClaude";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <HowItWorks />
      <Score />
      <Criteria />
      <UseInClaude />
      <Evals />
      <FAQ />
      <Footer />
    </main>
  );
}
