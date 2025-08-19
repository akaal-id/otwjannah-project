import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventMetrics from "@/components/EventMetrics";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Tribute from "@/components/Tribute";
import Agenda from "@/components/Agenda";
import Sponsorship from "@/components/Sponsorship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";

export default function Home() {
  return (
    <div className="font-sans text-[#C3BEA1] min-h-screen flex flex-col">
      {/* Navbar stays inside centered container */}
      <div className="w-full max-w-[1152px] mx-auto px-4">
        <Navbar />
      </div>
      <Hero />
      <div className="w-full mx-auto">
        <main className="flex-1 flex flex-col">
          <Countdown />
          <EventMetrics />
          <About />
          <Agenda />
          <Venue />
          <Speakers />
          <Tribute />
          <Sponsorship />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
