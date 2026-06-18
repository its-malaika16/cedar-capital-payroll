import ServiceHero from "../components/ServicePage/ServiceHero";
import CTASection from "../components/HomePage/CTASection";
import SubscribeSection from "../components/HomePage/SubscribeSection";
import Footer from "../components/Footer/Footer";
import ContactHero from "../components/ContactPage/ContactHero";
import ContactCards from "../components/ContactPage/ContactCards";
import ContactSection from "../components/ContactPage/ContactSection";
import OfficesSection from "../components/ContactPage/OfficesSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactSection />
      <OfficesSection />
    </>
  );
}

    
