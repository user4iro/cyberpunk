import React from "react";
import { WhatsAppIcon } from "./Icons";

export const WhatsAppButton = () => {
  const phoneNumber = "3145287412";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-6 top-1/2 -translate-y-1/2 p-4 bg-green-500 hover:bg-green-600 
                 text-white rounded-full shadow-lg whatsapp-btn transition-all duration-300 
                 hover:scale-110 flex items-center justify-center"
      aria-label="Contáctanos por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;