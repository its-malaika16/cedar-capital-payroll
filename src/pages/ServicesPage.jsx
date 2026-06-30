import ServiceHero from "../components/ServicePage/ServiceHero";
import ServiceBlock from "../components/ServicePage/ServiceBlock";
import CTASection from "../components/HomePage/CTASection";
import SubscribeSection from "../components/HomePage/SubscribeSection";
import HowItWorks from "../components/ServicePage/HowItWorks";
import ManagedService from "../components/ServicePage/ManagedService";
import PayrollSoftware from "../components/ServicePage/PayrollSoftware";

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceBlock />
      <HowItWorks />
      <ManagedService />
      <PayrollSoftware />
    </>
  );
}

    
