import React from "react";
import { NewspaperIcon, StarIcon, ImageIcon, UserIcon } from "./Icons";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: { 
  icon: React.FC<React.SVGProps<SVGSVGElement>>, 
  title: string, 
  description: string, 
  className?: string 
}) => (
  <div className={`bg-card border border-pink-500/20 rounded-lg p-6 hover:shadow-neon-magenta transition-all duration-500 h-full ${className}`}>
    <div className="mb-4">
      <Icon className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
      {title}
    </h3>
    <p className="text-gray-300">
      {description}
    </p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: NewspaperIcon,
      title: "Noticias Negativas",
      description: "Eliminamos noticias difamatorias, negativas o falsas que afecten tu imagen personal o profesional en buscadores como Google."
    },
    {
      icon: StarIcon,
      title: "Reseñas Falsas",
      description: "Gestionamos la eliminación de reseñas malintencionadas, calumnias o comentarios falsos en Google, TripAdvisor, redes sociales y otras plataformas."
    },
    {
      icon: ImageIcon,
      title: "Contenido Íntimo",
      description: "Eliminamos fotos, videos o contenido privado publicado sin consentimiento, protegiendo tu intimidad y privacidad."
    },
    {
      icon: UserIcon,
      title: "Información Personal",
      description: "Removemos información personal sensible, datos personales, números telefónicos o direcciones publicadas sin autorización."
    }
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden scanlines">
      <div className="absolute inset-0 z-0 grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base uppercase tracking-widest text-blue-400 mb-2">
            Nuestros servicios
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-glitch glow-blue">¿Qué</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Eliminamos?</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            ¿Tienes otro tipo de contenido digital indeseado? Nuestro equipo está especializado en gestionar la eliminación de cualquier material que pueda dañar tu reputación online.
          </p>
          
          <a 
            href="https://wa.me/3145287412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 
                     text-white px-6 py-3 rounded-md transition-all duration-300 shadow-neon-magenta"
          >
            Consulta gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;