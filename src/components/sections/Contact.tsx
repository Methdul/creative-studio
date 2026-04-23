import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactProps { onBookCall: () => void; }

export const Contact = ({ onBookCall }: ContactProps) => {
  const [sending, setSending] = useState(false);
  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">/ 03 Contact</div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] mb-6">
              Tell us what you're<br />working on.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Prefer a real conversation? Book a call and we'll skip the back-and-forth.
            </p>
            <Button onClick={onBookCall} variant="hero" size="lg" className="rounded-full mb-10">
              Book a Call instead
            </Button>
            <div className="space-y-4">
              <a href="mailto:methduldharmapriya05@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl border border-border/60 bg-card hover:border-primary/50 transition-smooth">
                <div className="h-10 w-10 rounded-xl bg-surface-elevated flex items-center justify-center text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium">methduldharmapriya05@gmail.com</div>
                  <div className="text-xs text-muted-foreground">Creative Manager</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());

              try {
                const response = await fetch("https://formspree.io/f/xeevpwkj", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

                if (response.ok) {
                  toast.success("Message sent! We'll get back to you soon.");
                  (e.target as HTMLFormElement).reset();
                } else {
                  toast.error("Failed to send message. Please try again.");
                }
              } catch (error) {
                toast.error("Something went wrong. Please try again.");
              } finally {
                setSending(false);
              }
            }}
            className="rounded-3xl border border-border/60 bg-card p-8 space-y-5 shadow-card"
          >
            <input type="hidden" name="_subject" value="New Message from Creative Studio" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="cname">Name</Label>
                <Input id="cname" name="name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cemail">Email</Label>
                <Input id="cemail" name="email" type="email" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="cphone">Phone Number</Label>
                <Input id="cphone" name="phone" type="tel" placeholder="+94 77 123 4567" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cneed">What do you need?</Label>
                <Input id="csubject" name="subject" placeholder="Project Inquiry" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cmessage">Message</Label>
              <Textarea id="cmessage" name="message" rows={4} required placeholder="A short note about your project..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full rounded-full" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">No spam. We read every message ourselves.</p>
          </form>
        </div>
      </div>
    </section>
  );
};