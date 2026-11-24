import { SiteNav } from "./components/SiteNav";
import { Header } from "./components/Header";
import { WorkSection } from "./components/WorkSection";
import { SkillsSection } from "./components/SkillsSection";
import { HowIBuildSection } from "./components/HowIBuildSection";
import { HobbiesSection } from "./components/HobbiesSection";
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
        <HobbiesSection />
      </main>
      <ContactSection />
    </>
  );
}
