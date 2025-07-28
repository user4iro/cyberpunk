import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactIcon } from "./Icons";

const ContactForm = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-card scanlines">
      <div className="absolute inset-0 z-0 bg-black/50"></div>
      
      {/* Animated lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-green-500/30"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-sm md:text-base uppercase tracking-widest text-green-400 mb-2">
              ¿Listo para recuperar tu privacidad?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-glitch glow-green">Contáctanos</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                Ahora
              </span>
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-lg">
              Nuestros especialistas evaluarán tu caso de forma gratuita y confidencial. Responderemos a tu consulta en un máximo de 24 horas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">100% Confidencial</h4>
                  <p className="text-gray-400">Tu caso y datos personales están protegidos por acuerdo de confidencialidad.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Respuesta Rápida</h4>
                  <p className="text-gray-400">Te respondemos en menos de 24 horas con un plan de acción personalizado.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Resultados Garantizados</h4>
                  <p className="text-gray-400">Solo cobramos cuando logramos eliminar el contenido indeseado.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-green-500/20 rounded-lg p-6 shadow-neon-green backdrop-blur-sm">
            <h4 className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Evaluación Gratuita
            </h4>
            
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Nombre"
                  className="bg-card/50 border-green-500/30 focus:border-green-400"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-card/50 border-green-500/30 focus:border-green-400"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Teléfono (WhatsApp)"
                  className="bg-card/50 border-green-500/30 focus:border-green-400"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Describe brevemente tu caso..."
                  className="bg-card/50 border-green-500/30 focus:border-green-400 min-h-[120px]"
                />
              </div>
              
              <div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white transition-all duration-300 shadow-neon-green"
                >
                  Enviar consulta
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Al enviar este formulario, aceptas nuestra política de privacidad y el procesamiento de tus datos para atender tu consulta.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;