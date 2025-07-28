import React from "react";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import WhatsAppButton from "@/components/custom/WhatsAppButton";
import { Card } from "@/components/ui/card";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <WhatsAppButton />
      
      <main className="container mx-auto px-4 py-16">
        <Card className="bg-black/50 border border-blue-500/30 p-8 max-w-4xl mx-auto backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Información Legal
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Esta sección proporciona información legal importante sobre CyberClean, nuestros servicios y nuestras prácticas empresariales.
            </p>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Marco legal de nuestros servicios</h2>
            <p>
              CyberClean opera bajo el marco legal colombiano, respetando:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ley 1581 de 2012 (Protección de Datos Personales)</li>
              <li>Ley 1266 de 2008 (Habeas Data)</li>
              <li>Ley 23 de 1982 (Derechos de Autor)</li>
              <li>Ley 1273 de 2009 (Delitos Informáticos)</li>
              <li>Ley 1341 de 2009 (Tecnologías de la Información)</li>
              <li>Decreto 1377 de 2013 (Reglamentación de Protección de Datos)</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Derechos que defendemos</h2>
            <p>
              Nuestros servicios están diseñados para proteger derechos fundamentales como:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El derecho a la intimidad personal y familiar</li>
              <li>El derecho al buen nombre</li>
              <li>El derecho a la imagen</li>
              <li>El derecho al olvido</li>
              <li>El derecho a la protección de datos personales</li>
              <li>El derecho a la honra y dignidad</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Base legal para la eliminación de contenido</h2>
            <p>
              La eliminación de contenido que realizamos se basa en diversos fundamentos legales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Derechos de autor y propiedad intelectual</li>
              <li>Violación de términos de servicio de plataformas</li>
              <li>Contenido difamatorio o calumnioso</li>
              <li>Derecho al olvido (en jurisdicciones aplicables)</li>
              <li>Contenido íntimo compartido sin consentimiento</li>
              <li>Información personal expuesta sin autorización</li>
              <li>Suplantación de identidad</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Cumplimiento normativo</h2>
            <p>
              CyberClean se compromete a actuar en todo momento dentro del marco legal. Esto implica:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No eliminar contenido legítimo de interés público</li>
              <li>Respetar la libertad de expresión y prensa</li>
              <li>Verificar la identidad y los derechos del solicitante sobre el contenido</li>
              <li>Documentar adecuadamente todas las acciones realizadas</li>
              <li>Utilizar únicamente métodos legales para la eliminación de contenido</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Información corporativa</h2>
            <p>
              CyberClean es una empresa legalmente constituida en Colombia, con las siguientes características:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Razón social: CyberClean Colombia S.A.S.</li>
              <li>NIT: 900.XXX.XXX-X</li>
              <li>Domicilio social: Bogotá, Colombia</li>
              <li>Registro mercantil: Cámara de Comercio de Bogotá</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Resolución de disputas</h2>
            <p>
              En caso de disputas relacionadas con nuestros servicios:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Privilegiamos la resolución amistosa directa con el cliente</li>
              <li>Ofrecemos mecanismos de conciliación</li>
              <li>Las disputas no resueltas se someterán a la jurisdicción de los tribunales de Colombia</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Responsabilidad profesional</h2>
            <p>
              CyberClean cuenta con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seguro de responsabilidad profesional</li>
              <li>Asesoría legal especializada</li>
              <li>Certificaciones en protección de datos y seguridad informática</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">Contacto legal</h2>
            <p>
              Para consultas de naturaleza legal relacionadas con nuestros servicios, por favor contáctanos a través de WhatsApp y solicita comunicación con nuestro departamento legal.
            </p>
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;