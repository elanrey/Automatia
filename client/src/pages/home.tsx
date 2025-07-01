import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}
