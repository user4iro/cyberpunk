import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-pink-500/30 relative overflow-hidden py-12">
      <div className="absolute inset-0 z-0 grid-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Cyber
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                Clean
              </span>
            </h2>
            <p className="text-gray-400 max-w-xs">
              Especialistas en eliminación de contenido digital indeseado. Recuperamos tu privacidad y protegemos tu reputación online.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
              Servicios
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-blue-400 transition-colors">
                  Eliminación de Noticias
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-400 transition-colors">
                  Eliminación de Reseñas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-400 transition-colors">
                  Eliminación de Fotos y Videos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-400 transition-colors">
                  Eliminación de Información Personal
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Contacto
            </h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <a 
                  href="https://wa.me/3145287412"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp: +57 314 528 7412
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@cyberclean.com" 
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email: info@cyberclean.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horario: 24/7
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} CyberClean. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacidad" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Privacidad
              </a>
              <a href="/terminos" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Términos
              </a>
              <a href="/legal" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;