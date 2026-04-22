import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TIMES = ["09:30", "11:00", "13:30", "15:00", "16:30"];
const PROJECT_TYPES = ["Video Editing", "AI Content", "SaaS Explainer", "Marketing"];

function getMonthDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7; // Mon-first
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(year, month, d));
  return cells;
}

export const BookCallModal = ({ open, onOpenChange }: BookCallModalProps) => {
  const today = new Date();
  const [view, setView] = useState<"calendar" | "form" | "done">("calendar");
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", project: PROJECT_TYPES[0], budget: "", notes: "" });

  const days = getMonthDays(cursor.getFullYear(), cursor.getMonth());
  const monthLabel = cursor.toLocaleString("en", { month: "long", year: "numeric" });

  const isPast = (d: Date) => {
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < t;
  };

  const reset = () => {
    setView("calendar");
    setDate(null);
    setTime(null);
    setForm({ name: "", email: "", project: PROJECT_TYPES[0], budget: "", notes: "" });
  };

  const handleClose = (o: boolean) => {
    if (!o) setTimeout(reset, 200);
    onOpenChange(o);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[640px] glass border-border/60 p-0 overflow-hidden">
        <div className="p-6 sm:p-8">
          <DialogHeader className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Limited slots this month
            </div>
            <DialogTitle className="font-display text-3xl">Book a discovery call</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              30 minutes. No pitch. Just a real conversation about your project.
            </DialogDescription>
          </DialogHeader>

          {view === "calendar" && (
            <div className="mt-6 grid gap-6 sm:grid-cols-[1fr,180px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
                    className="p-2 rounded-lg hover:bg-surface-elevated transition-smooth"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="font-display text-base">{monthLabel}</div>
                  <button
                    onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
                    className="p-2 rounded-lg hover:bg-surface-elevated transition-smooth"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div key={i} className="text-center py-1">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((d, i) => {
                    if (!d) return <div key={i} />;
                    const disabled = isPast(d) || d.getDay() === 0 || d.getDay() === 6;
                    const selected = date && d.toDateString() === date.toDateString();
                    return (
                      <button
                        key={i}
                        disabled={disabled}
                        onClick={() => setDate(d)}
                        className={cn(
                          "aspect-square rounded-lg text-sm transition-smooth",
                          disabled && "text-muted-foreground/30 cursor-not-allowed",
                          !disabled && !selected && "hover:bg-surface-elevated",
                          selected && "bg-primary text-primary-foreground shadow-glow"
                        )}
                      >
                        {d.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-border/60 sm:pl-6 pt-6 sm:pt-0">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  <Clock className="h-3 w-3" /> Available times
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      disabled={!date}
                      onClick={() => setTime(t)}
                      className={cn(
                        "py-2 px-3 rounded-lg border text-sm transition-smooth",
                        time === t
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-surface/50 hover:border-primary/50",
                        !date && "opacity-40 cursor-not-allowed"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <Button
                  className="w-full mt-6"
                  variant="hero"
                  disabled={!date || !time}
                  onClick={() => setView("form")}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {view === "form" && (
            <form
              className="mt-6 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const response = await fetch("https://formspree.io/f/methduldharmapriya05@gmail.com", {
                  method: "POST",
                  body: JSON.stringify({
                    ...form,
                    date: date?.toDateString(),
                    time: time,
                    _subject: `New Call Booking: ${form.name}`
                  }),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });
                
                if (response.ok) {
                  setView("done");
                } else {
                  alert("Something went wrong. Please try again.");
                }
              }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground rounded-lg bg-surface/60 border border-border/60 p-3">
                <Calendar className="h-4 w-4 text-primary" />
                {date?.toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })} · {time}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Project type</Label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setForm({ ...form, project: p })}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs border transition-smooth",
                        form.project === p
                          ? "border-primary bg-primary/15 text-foreground"
                          : "border-border bg-surface/50 hover:border-primary/40"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="budget">Budget <span className="text-muted-foreground/70 font-normal">(optional)</span></Label>
                <Input id="budget" placeholder="$1k – $5k" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="notes">What do you need?</Label>
                <Textarea id="notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="ghost" onClick={() => setView("calendar")}>Back</Button>
                <Button type="submit" variant="hero" className="flex-1">Confirm booking</Button>
              </div>
            </form>
          )}

          {view === "done" && (
            <div className="mt-8 text-center space-y-4 py-6">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center animate-pulse-glow">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <div className="font-display text-2xl">You're booked.</div>
              <p className="text-muted-foreground max-w-sm mx-auto">
                We sent a confirmation to <span className="text-foreground">{form.email || "your email"}</span>.
                Talk soon, {form.name?.split(" ")[0] || "friend"}.
              </p>
              <Button variant="outline" onClick={() => handleClose(false)}>Close</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};