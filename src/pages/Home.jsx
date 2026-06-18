import Hero from "../components/HomePage/Hero";
import Features from "../components/HomePage/Features";
import Payrollinfo from "../components/HomePage/Payrollinfo";
import WhyChoose from "../components/HomePage/WhyChoose";
import CTASection from "../components/HomePage/CTASection";
import SubscribeSection from "../components/HomePage/SubscribeSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />  
      <Payrollinfo /> 
      <WhyChoose />
      <CTASection />
      <SubscribeSection />    
      <Footer />
    </>
  );
}

    
