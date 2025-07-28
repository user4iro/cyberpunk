import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PhoneIcon } from '@/components/custom/Icons';

const WhatsAppContact = () => {
  const whatsappNumber = '+573000000000'; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent('Hola, estoy interesado en conocer más sobre sus servicios de eliminación de contenido.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 px-4 bg-black/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/10 blur-3xl -top-20 -right-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/20 blur-3xl -bottom-20 -left-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
          <div className="grid grid-cols-12 gap-2 h-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="col-span-1 h-2 bg-green-500/30"
                style={{ 
                  transform: `rotate(${Math.random() * 360}deg)`, 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                  opacity: Math.random() * 0.5 + 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Contáctanos
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos disponibles para ayudarte a recuperar tu privacidad y proteger tu reputación digital. Contáctanos por WhatsApp para una consulta gratuita.
          </p>
        </div>

        <Card className="border border-blue-500/30 bg-black/50 backdrop-blur p-8 shadow-lg shadow-blue-900/20 max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-4 text-white">Contáctanos por WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Prefirimos WhatsApp para brindarte atención inmediata y personalizada. Nuestro equipo está disponible 24/7 para responder tus consultas.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 p-0.5 rounded-full">
              <Button 
                size="lg"
                className="bg-black hover:bg-black/80 text-white px-8 py-6 h-auto rounded-full group relative overflow-hidden border-0"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="flex items-center justify-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-green-400" /> 
                  <span>Chatear por WhatsApp</span>
                </span>
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Respuesta garantizada en menos de 30 minutos durante horario laboral.
                <br />Tu información será tratada con total confidencialidad.
              </p>
            </div>
          </div>
        </Card>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">¿Por qué Deberias Elegirnos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-black/30 border border-blue-500/20">
              <h4 className="font-medium text-green-400 mb-2">Respuesta Inmediata</h4>
              <p className="text-gray-300 text-sm">Atención personalizada con respuestas en minutos, no en días.</p>
            </div>
            <div className="p-6 rounded-lg bg-black/30 border border-blue-500/20">
              <h4 className="font-medium text-green-400 mb-2">Seguro y Confidencial</h4>
              <p className="text-gray-300 text-sm">Comunicación encriptada de extremo a extremo para tu tranquilidad.</p>
            </div>
            <div className="p-6 rounded-lg bg-black/30 border border-blue-500/20">
              <h4 className="font-medium text-green-400 mb-2">Atención 24/7</h4>
              <p className="text-gray-300 text-sm">Disponibles todos los días para emergencias de reputación online.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContact;