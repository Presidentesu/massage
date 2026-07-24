import Hero from "@/components/Hero";
import OurGirls from "@/components/OurGirls";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <OurGirls />
      <About />
      <Services />
      <WhyChooseUs />
    </div>
  );
}

