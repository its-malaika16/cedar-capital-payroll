import ServiceHero from "../components/ServicePage/ServiceHero";
import CTASection from "../components/HomePage/CTASection";
import SubscribeSection from "../components/HomePage/SubscribeSection";
import Footer from "../components/Footer/Footer";
import AboutHero from "../components/AboutPage/AboutHero";
import MissionSlider from "../components/AboutPage/MissionSlider";
import StatsSection from "../components/AboutPage/StatsSection";
import OurStory from "../components/AboutPage/OurStory";
import ValueSection from "../components/AboutPage/ValueSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSlider />
      <StatsSection/>
      <OurStory />
      <ValueSection />
    </>
  );
}
