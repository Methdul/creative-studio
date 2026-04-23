import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface Props { onClick: () => void; }

export const StickyBookButton = ({ onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      variant="hero"
      size="icon"
      className="md:hidden fixed bottom-6 right-6 z-40 rounded-full h-14 w-14 shadow-glow flex items-center justify-center"
    >
      <PhoneCall className="h-6 w-6" />
    </Button>
  );
};