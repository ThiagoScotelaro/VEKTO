import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import SpeedSection from "@/components/SpeedSection";
import Methodology from "@/components/Methodology";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <SpeedSection />
        <Methodology />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
