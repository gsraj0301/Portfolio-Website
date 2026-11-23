import { SiteNav } from "./components/SiteNav";
import { Header } from "./components/Header";
import { WorkSection } from "./components/WorkSection";
import { SkillsSection } from "./components/SkillsSection";
import { HowIBuildSection } from "./components/HowIBuildSection";
import { GamesSection } from "./components/GamesSection";
import { WordsSection } from "./components/WordsSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <Header />
      <main id="main">
        <WorkSection />
        <SkillsSection />
        <HowIBuildSection />
        <GamesSection />
        <WordsSection />
      </main>
      <ContactSection />
    </>
  );
}
