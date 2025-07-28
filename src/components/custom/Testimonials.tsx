import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from "./Icons";

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ name, location, quote, rating }: TestimonialProps) => {
  return (
    <Card className="bg-card border border-pink-500/20 rounded-lg overflow-hidden hover:shadow-neon-magenta transition-all duration-500 h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-500" : "text-gray-600"
              }`}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>
        <blockquote className="flex-grow">
          <p className="text-gray-300 mb-4">{quote}</p>
        </blockquote>
        <div className="mt-auto">
          <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
            {name}
          </p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Carlos M.",
      location: "Bogotá",
      quote: "Había una noticia sobre un error judicial que me implicaba injustamente. CyberClean logró eliminarla completamente. Mi reputación está restaurada.",
      rating: 5
    },
    {
      name: "Ana R.",
      location: "Medellín",
      quote: "Mis fotos privadas fueron publicadas sin mi consentimiento. El equipo de CyberClean actuó rápidamente y eliminó todo el contenido en cuestión de días.",
      rating: 5
    },
    {
      name: "Miguel S.",
      location: "Cali",
      quote: "Mi negocio sufrió una campaña de reseñas falsas. Gracias a CyberClean, todas fueron eliminadas y mi calificación en Google volvió a la normalidad.",
      rating: 5
    },
    {
      name: "Laura T.",
      location: "Barranquilla",
      quote: "Increíble servicio. Eliminaron información personal mía que se había filtrado online. Muy profesionales y discretos.",
      rating: 5
    },
    {
      name: "Javier P.",
      location: "Cartagena",
      quote: "Tenía un problema con contenido difamatorio en redes sociales. CyberClean lo solucionó rápidamente. Totalmente recomendables.",
      rating: 5
    },
    {
      name: "Elena D.",
      location: "Santa Marta",
      quote: "Aparecía en una web de escorts sin mi consentimiento. CyberClean logró eliminar toda la información y fotos. Estoy eternamente agradecida.",
      rating: 5
    },
    {
      name: "Roberto V.",
      location: "Bucaramanga",
      quote: "Unos antiguos socios publicaron información confidencial sobre mi empresa. El equipo de CyberClean gestionó la situación de manera impecable.",
      rating: 5
    },
    {
      name: "Isabel M.",
      location: "Pereira",
      quote: "Mi ex publicó videos íntimos en internet. CyberClean no solo eliminó el contenido sino que me asesoró legalmente. Extraordinario servicio.",
      rating: 5
    },
    {
      name: "Fernando L.",
      location: "Cúcuta",
      quote: "Habían clonado mi perfil de LinkedIn con información falsa. En menos de una semana, CyberClean solucionó el problema.",
      rating: 4
    },
    {
      name: "Pilar S.",
      location: "Ibagué",
      quote: "Un blog publicaba información falsa sobre mi clínica. CyberClean consiguió que retiraran todos los posts difamatorios.",
      rating: 5
    },
    {
      name: "Raúl G.",
      location: "Manizales",
      quote: "Mi dirección personal apareció en varios foros. CyberClean la eliminó de todos ellos rápidamente. Muy satisfecho.",
      rating: 5
    },
    {
      name: "Carmen H.",
      location: "Pasto",
      quote: "Un exempleado publicó documentos confidenciales de mi empresa. CyberClean gestionó todo el proceso de eliminación con total profesionalidad.",
      rating: 5
    },
    {
      name: "David R.",
      location: "Armenia",
      quote: "Mi imagen aparecía en sitios no autorizados. CyberClean me ayudó a recuperar el control de mi identidad digital.",
      rating: 5
    },
    {
      name: "Nuria T.",
      location: "Neiva",
      quote: "Había datos personales míos en webs de estafas. CyberClean consiguió eliminarlos todos y proteger mi identidad.",
      rating: 5
    },
    {
      name: "Alberto P.",
      location: "Villavicencio",
      quote: "Un competidor publicó reseñas falsas sobre mi restaurante. CyberClean las eliminó y mi negocio recuperó su reputación.",
      rating: 5
    },
    {
      name: "Lucía F.",
      location: "Popayán",
      quote: "Aparecí en una web de citas falsa. CyberClean me ayudó a eliminar el perfil y todas las fotos asociadas.",
      rating: 5
    },
    {
      name: "Víctor M.",
      location: "Montería",
      quote: "Un periódico local publicó información incorrecta sobre mi caso. CyberClean consiguió que se retirara la noticia de Google.",
      rating: 4
    },
    {
      name: "Cristina A.",
      location: "Valledupar",
      quote: "Mis fotos fueron manipuladas y publicadas en foros. El equipo de CyberClean las eliminó completamente.",
      rating: 5
    },
    {
      name: "Sergio B.",
      location: "Sincelejo",
      quote: "Tenía una antigua noticia que me vinculaba a un caso del que fui absuelto. CyberClean aplicó el derecho al olvido con éxito.",
      rating: 5
    },
    {
      name: "Marina V.",
      location: "Tunja",
      quote: "Mi número de teléfono apareció en webs de anuncios. CyberClean lo eliminó de todas ellas en tiempo récord.",
      rating: 5
    },
    {
      name: "Pablo S.",
      location: "Riohacha",
      quote: "Una foto comprometedora circulaba por redes sociales. CyberClean me ayudó a eliminarla de todas las plataformas.",
      rating: 5
    },
    {
      name: "Teresa R.",
      location: "Quibdó",
      quote: "Mi negocio fue víctima de una campaña de desprestigio. CyberClean eliminó todo el contenido falso y restauró nuestra imagen.",
      rating: 5
    },
    {
      name: "Guillermo P.",
      location: "Florencia",
      quote: "Un antiguo perfil contenía información personal sensible. CyberClean lo eliminó por completo. Muy agradecido.",
      rating: 5
    },
    {
      name: "Marta D.",
      location: "Yopal",
      quote: "Aparecían datos bancarios míos en internet. CyberClean actuó con rapidez para eliminarlos y proteger mi seguridad.",
      rating: 5
    }
  ];

  const [visibleCount, setVisibleCount] = useState(6);
  
  const showMore = () => {
    setVisibleCount(Math.min(visibleCount + 6, testimonials.length));
  };

  const showLess = () => {
    setVisibleCount(6);
  };

  return (
    <section id="testimonios" className="py-24 relative overflow-hidden scanlines">
      <div className="absolute inset-0 z-0 grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base uppercase tracking-widest text-pink-400 mb-2">
            Lo que dicen nuestros clientes
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-glitch glow-magenta">Casos</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              de Éxito
            </span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="testimonial-grid">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          {visibleCount < testimonials.length ? (
            <Button 
              onClick={showMore}
              variant="outline" 
              className="border border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 shadow-neon-magenta"
            >
              Ver más testimonios
            </Button>
          ) : (
            <Button 
              onClick={showLess}
              variant="outline" 
              className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 shadow-neon-blue"
            >
              Ver menos
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;