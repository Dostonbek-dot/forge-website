import { AboutCtaClose } from "../components/about-cta-close";
import { AboutIntro } from "../components/about-intro";
import { AboutManifesto } from "../components/about-manifesto";
import { AboutStory } from "../components/about-story";
import { AboutTeam } from "../components/about-team";
import { AboutValues } from "../components/about-values";

export function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutStory />
      <AboutManifesto />
      <AboutValues />
      <AboutTeam />
      <AboutCtaClose />
    </>
  );
}
