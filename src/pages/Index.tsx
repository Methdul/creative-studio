import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";

import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BookCallModal } from "@/components/BookCallModal";
import { StickyBookButton } from "@/components/StickyBookButton";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sync loading state with the animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const book = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Navbar onBookCall={book} />
      <main>
        <Hero onBookCall={book} />
        <TrustBar />
        <Services onBookCall={book} />

        <Process />
        <Testimonials />
        <CTA onBookCall={book} />
        <Contact onBookCall={book} />
      </main>
      <Footer onBookCall={book} />
      <StickyBookButton onClick={book} />
      <BookCallModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Index;
