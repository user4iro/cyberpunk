import React from "react";
import { ChevronRight } from "./Icons";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Análisis Inicial",
      description: "Evaluamos el contenido a eliminar, su origen, plataforma y complejidad del caso."
    },
    {
      number: "02",
      title: "Estrategia Personalizada",
      description: "Desarrollamos un plan de acción específico según la naturaleza del contenido y la plataforma donde se encuentra."
    },
    {
      number: "03",
      title: "Gestión Legal",
      description: "Aplicamos procedimientos legales como DMCA, derecho al olvido, o invocamos políticas de privacidad según corresponda."
    },
    {
      number: "04",
      title: "Eliminación del Contenido",
      description: "Ejecutamos la estrategia para eliminar el contenido de la fuente original y de los resultados de búsqueda."
    },
    {
      number: "05",
      title: "Verificación",
      description: "Confirmamos la eliminación completa del contenido y su desindexación en buscadores."
    },
    {
      number: "06",
      title: "Monitoreo Continuo",
      description: "Vigilamos para asegurar que el contenido no reaparezca y te proporcionamos un informe final del proceso."
    }
  ];

  return (
    <section id="proceso" className="py-24 relative overflow-hidden bg-card scanlines">
      <div className="absolute inset-0 z-0 bg-black/50"></div>
      
      {/* Animated lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-pink-500/30"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base uppercase tracking-widest text-blue-400 mb-2">
            Cómo trabajamos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-glitch glow-green">Nuestro</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">Proceso</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative border border-blue-500/20 rounded-lg p-6 hover:shadow-neon-blue transition-all duration-500"
            >
              <span className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-neon-blue">
                {step.number}
              </span>
              
              <h4 className="text-xl font-bold mb-3 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                {step.title}
              </h4>
              
              <p className="text-gray-300">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight className="w-6 h-6 text-blue-500" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 border border-blue-500/30 rounded-lg bg-card/50 backdrop-blur-sm max-w-3xl mx-auto">
          <h4 className="text-xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Confidencialidad Garantizada
          </h4>
          
          <p className="text-gray-300 text-center">
            Todos nuestros procesos son completamente discretos y confidenciales. Protegemos la identidad de nuestros clientes 
            y la información sensible relacionada con cada caso mediante acuerdos de confidencialidad estrictos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;