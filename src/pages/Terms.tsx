import React from "react";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import WhatsAppButton from "@/components/custom/WhatsAppButton";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <WhatsAppButton />
      
      <main className="container mx-auto px-4 py-16">
        <Card className="bg-black/50 border border-blue-500/30 p-8 max-w-4xl mx-auto backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Términos y Condiciones
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Estos Términos y Condiciones rigen el uso de los servicios de CyberClean. Al utilizar nuestros servicios, aceptas estos términos en su totalidad. Si no estás de acuerdo con estos términos, por favor, no utilices nuestros servicios.
            </p>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">1. Servicios ofrecidos</h2>
            <p>
              CyberClean ofrece servicios profesionales de eliminación de contenido digital no deseado, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eliminación de información personal no autorizada</li>
              <li>Eliminación de contenido íntimo publicado sin consentimiento</li>
              <li>Eliminación de difamación y contenido falso</li>
              <li>Gestión de la reputación digital</li>
              <li>Aplicación del derecho al olvido</li>
              <li>Eliminación de reseñas falsas o maliciosas</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">2. Proceso de contratación</h2>
            <p>
              Para contratar nuestros servicios, debes seguir estos pasos:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contactarnos a través de WhatsApp para una evaluación gratuita.</li>
              <li>Proporcionar la información necesaria sobre el contenido que deseas eliminar.</li>
              <li>Recibir y aceptar una propuesta de servicio personalizada.</li>
              <li>Realizar el pago acordado según los términos establecidos.</li>
              <li>Proporcionar la documentación requerida para iniciar el proceso.</li>
            </ol>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">3. Obligaciones del cliente</h2>
            <p>Como cliente, te comprometes a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar información veraz y completa sobre el contenido a eliminar.</li>
              <li>Tener derechos legítimos sobre el contenido que deseas eliminar.</li>
              <li>No utilizar nuestros servicios para fines ilegales o fraudulentos.</li>
              <li>Proporcionar la documentación e información necesaria para el proceso.</li>
              <li>Cumplir con los plazos de pago acordados.</li>
              <li>Mantener la confidencialidad sobre las estrategias y métodos utilizados.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">4. Garantías y limitaciones</h2>
            <p>
              CyberClean se compromete a utilizar todos los medios técnicos y legales a su disposición para intentar eliminar el contenido no deseado. Sin embargo, debido a la naturaleza de internet y las diferentes políticas de las plataformas, no podemos garantizar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La eliminación del 100% del contenido en todos los casos.</li>
              <li>Tiempos exactos de eliminación, ya que dependen de terceros.</li>
              <li>La no reaparición del contenido en el futuro.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">5. Pagos y política de reembolsos</h2>
            <p>
              Nuestras tarifas se establecen caso por caso, dependiendo de la complejidad y extensión del trabajo requerido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los pagos se realizan según lo acordado en la propuesta de servicio.</li>
              <li>Ofrecemos un modelo de pago por resultados en casos elegibles.</li>
              <li>Las solicitudes de reembolso se evaluarán caso por caso, según el esfuerzo realizado y los resultados obtenidos.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">6. Confidencialidad</h2>
            <p>
              Nos comprometemos a mantener la más estricta confidencialidad sobre tu identidad, el contenido a eliminar y cualquier información proporcionada durante el proceso. Esta obligación de confidencialidad sobrevive a la terminación de nuestros servicios.
            </p>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">7. Limitación de responsabilidad</h2>
            <p>
              CyberClean no será responsable por:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Daños indirectos, incidentales o consecuentes.</li>
              <li>Pérdida de beneficios, ingresos, datos o uso.</li>
              <li>Reclamaciones de terceros contra el cliente.</li>
              <li>La imposibilidad de eliminar contenido debido a restricciones legales o técnicas fuera de nuestro control.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">8. Modificaciones de los términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación. El uso continuado de nuestros servicios después de tales cambios constituye tu aceptación de los nuevos términos.
            </p>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">9. Ley aplicable y jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de Colombia. Cualquier disputa relacionada con estos términos o nuestros servicios estará sujeta a la jurisdicción exclusiva de los tribunales de Colombia.
            </p>
            
            <h2 className="text-xl font-bold text-green-400 mt-6">10. Contacto</h2>
            <p>
              Para cualquier pregunta sobre estos Términos y Condiciones, por favor contáctanos a través de WhatsApp.
            </p>
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;