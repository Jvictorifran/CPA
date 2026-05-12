import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import LegalModal from "@/components/LegalModal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
      <ContactModal />
      <LegalModal />
    </>
  );
}
