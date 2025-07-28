import React from "react";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import WhatsAppButton from "@/components/custom/WhatsAppButton";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <WhatsAppButton />
      
      <main className="container mx-auto px-4 py-16">
        <Card className="bg-black/50 border border-blue-500/30 p-8 max-w-4xl mx-auto backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Política de Privacidad
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              En CyberClean, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, procesamos y protegemos tu información personal cuando utilizas nuestros servicios.
            </p>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Información que recopilamos</h2>
            <p>
              Para proporcionar nuestros servicios de eliminación de contenido digital, podemos recopilar la siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información de contacto, como nombre, dirección de correo electrónico y número de teléfono.</li>
              <li>Detalles sobre el contenido que deseas eliminar, incluyendo URLs, capturas de pantalla y descripciones.</li>
              <li>Información de identificación necesaria para verificar tu identidad y propiedad del contenido.</li>
              <li>Comunicaciones que mantengas con nosotros a través de WhatsApp, correo electrónico u otros canales.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Cómo utilizamos tu información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar nuestros servicios de eliminación de contenido digital.</li>
              <li>Comunicarnos contigo sobre tu caso y el progreso de nuestras acciones.</li>
              <li>Cumplir con requisitos legales y proteger nuestros derechos legales.</li>
              <li>Mejorar nuestros servicios y desarrollar nuevas características.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Protección de datos</h2>
            <p>
              Implementamos medidas técnicas, administrativas y físicas diseñadas para proteger la confidencialidad, integridad y disponibilidad de tu información personal. Estas medidas incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encriptación de datos sensibles.</li>
              <li>Acceso restringido a la información personal solo al personal autorizado.</li>
              <li>Sistemas de seguridad para prevenir accesos no autorizados.</li>
              <li>Evaluaciones regulares de seguridad y auditorías.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Compartir información</h2>
            <p>
              No vendemos tu información personal a terceros. Podemos compartir tu información en circunstancias limitadas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Con tu consentimiento explícito.</li>
              <li>Con proveedores de servicios que nos ayudan a proporcionar nuestros servicios.</li>
              <li>Cuando sea necesario para cumplir con una obligación legal, regulación, proceso legal o solicitud gubernamental.</li>
              <li>Para proteger los derechos, la propiedad o la seguridad de CyberClean, nuestros usuarios o el público.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Tus derechos</h2>
            <p>
              Dependiendo de tu ubicación, puedes tener ciertos derechos relacionados con tu información personal, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a tu información personal.</li>
              <li>Corregir información inexacta o incompleta.</li>
              <li>Solicitar la eliminación de tu información personal.</li>
              <li>Oponerte al procesamiento de tu información personal.</li>
              <li>Solicitar la portabilidad de tus datos.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Cambios a esta política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o regulatorios. Te notificaremos sobre cualquier cambio material publicando la nueva Política de Privacidad en esta página.
            </p>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Contacto</h2>
            <p>
              Si tienes preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo manejamos tu información personal, por favor contáctanos a través de WhatsApp.
            </p>
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;