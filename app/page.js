import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Spaces from "@/components/Spaces";
import Products from "@/components/Products";
import About from "@/components/About";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Spaces />
        <Products />
        <About />
        <Process />
        <Marquee />
        <Sectors />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
