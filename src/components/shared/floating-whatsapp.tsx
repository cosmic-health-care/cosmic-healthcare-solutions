import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hi, I'd like to enquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-brand-green-dark text-white shadow-lg shadow-brand-green-dark/30 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
