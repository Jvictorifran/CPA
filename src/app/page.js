import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Plantacao3D from "@/components/Plantacao3D";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        {/* <Plantacao3D /> */}
      </main>
      <Footer />
    </>
  );
}
