import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BookCallModal } from "@/components/BookCallModal";
import { StickyBookButton } from "@/components/StickyBookButton";

const Index = () => {
  const [open, setOpen] = useState(false);
  const book = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBookCall={book} />
      <main>
        <Hero onBookCall={book} />
        <TrustBar />
        <Services />
        <Work />
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
