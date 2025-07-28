import React from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./Icons";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 pb-12 flex items-center relative overflow-hidden scanlines">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 z-0 grid-bg"></div>
      
      {/* Animated cyberpunk lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-pink-500/30"></div>
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-500/30"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-green-400/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-sm md:text-base uppercase tracking-widest text-blue-400 mb-2">
                Servicio profesional y discreto
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 glow-magenta text-glitch">
                  Elimina
                </span>{" "}
                contenido indeseado de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 glow-blue">
                  internet
                </span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              Recupera el control de tu imagen digital. Eliminamos noticias negativas, 
              malas reseñas, fotos privadas y cualquier información personal no autorizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://wa.me/3145287412"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 
                           text-white px-6 py-3 rounded-md transition-all duration-300 shadow-neon-magenta text-center justify-center"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Contáctanos ahora</span>
              </a>
              
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center border border-blue-500 hover:border-blue-400 
                           text-blue-400 hover:text-blue-300 px-6 py-3 rounded-md transition-all duration-300 shadow-neon-blue"
              >
                Ver servicios
              </a>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="relative border border-pink-500/50 rounded-lg overflow-hidden shadow-neon-magenta">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-blue-500/20"></div>
              <div className="relative p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                  ¿Tienes contenido indeseado en internet?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Noticias negativas o difamatorias",
                    "Reseñas falsas o malintencionadas",
                    "Fotos o videos íntimos",
                    "Información personal no autorizada",
                    "Contenido que daña tu reputación"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-3">
                    Actuamos con rapidez y eficacia para proteger tu privacidad
                  </p>
                  <a 
                    href="#proceso" 
                    className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    Conoce nuestro proceso
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;