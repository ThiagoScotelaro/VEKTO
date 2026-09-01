import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoFor from "@/components/WhoFor";
import Solutions from "@/components/Solutions";
import Cases from "@/components/Cases";
import SpeedSection from "@/components/SpeedSection";
import Methodology from "@/components/Methodology";
import TechSecurity from "@/components/TechSecurity";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoFor />
        <Solutions />
        <Cases />
        <SpeedSection />
        <Methodology />
        <TechSecurity />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
