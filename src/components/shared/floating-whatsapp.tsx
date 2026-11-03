import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hi, I'd like to enquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-13 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-shadow transition-colors hover:bg-whatsapp-hover"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
