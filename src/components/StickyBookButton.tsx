import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface Props { onClick: () => void; }

export const StickyBookButton = ({ onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      variant="glow"
      className="md:hidden fixed bottom-5 left-5 right-5 z-40 rounded-full h-14 text-base shadow-glow"
    >
      <Calendar className="h-4 w-4" />
      Book a Call
    </Button>
  );
};