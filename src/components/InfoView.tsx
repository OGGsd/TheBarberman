import React from 'react';
import { MapPin, Phone, Clock, Star, Mail } from 'lucide-react';

const InfoView: React.FC = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:+46735545882';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@thebarberman.se';
  };

  const handleGoogleMaps = () => {
    // Force open Google Maps app with the specific address
    const address = 'Oxtorgsgatan 18, 553 17 Jönköping';
    const encodedAddress = encodeURIComponent(address);
    
    // Try Google Maps app first (mobile), then fallback to web
    const googleMapsApp = `comgooglemaps://?q=${encodedAddress}`;
    const googleMapsWeb = `https://maps.google.com/?q=${encodedAddress}`;
    
    // For mobile devices, try to open the app
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Create a hidden iframe to try opening the app
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = googleMapsApp;
      document.body.appendChild(iframe);
      
      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        window.open(googleMapsWeb, '_blank', 'noopener,noreferrer');
        document.body.removeChild(iframe);
      }, 1000);
    } else {
      // Desktop - open web version
      window.open(googleMapsWeb, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/barberman-logo.png" 
            alt="The Barberman Logo" 
            className="w-16 h-16 mr-3 rounded-full bg-white p-1 shadow-lg object-cover"
          />
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              THE BARBERMAN
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              PROFESSIONAL BARBERING
            </p>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Star size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Professional Barbering</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          The Barberman erbjuder professionell barbering med fokus på kvalitet och precision. 
          Vi använder traditionella tekniker kombinerat med moderna metoder för att ge dig 
          den bästa upplevelsen. Vårt team av erfarna barberare ser till att varje kund 
          lämnar salongen nöjd och välvårdad.
        </p>
      </div>

      {/* Services overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Star size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Våra tjänster</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                Klippningar
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Professionella hårklippningar för alla åldrar, inklusive barn-, student- och seniorpriser.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                Kombinationsbehandlingar
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Hårklippning kombinerat med skäggtrim eller traditionell rakning.
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                Snaggning & Rakning
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Klassisk snaggning, skinfade och traditionell rakning med kniv.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-2">
                Skägg & Rakning
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Professionell skäggtrimning och huvudrakning för alla skägglängder.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detaljer och kontakt - Opening Hours */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Clock size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Öppettider</h3>
        </div>
        
        <div className="space-y-3">
          {/* Opening hours grid - removed status indicator */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Måndag</span>
              <span className="text-gray-700">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Tisdag</span>
              <span className="text-gray-700">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Onsdag</span>
              <span className="text-gray-700">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Torsdag</span>
              <span className="text-gray-700">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Fredag</span>
              <span className="text-gray-700">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Lördag</span>
              <span className="text-gray-700">10:00 - 15:00</span>
            </div>
            <div className="flex justify-between items-center py-2 px-3 bg-red-50 rounded-lg md:col-span-2">
              <span className="font-medium text-gray-900">Söndag</span>
              <span className="text-red-600 font-medium">Stängd</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Kontakt & Adress</h3>
        </div>
        
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start">
            <MapPin size={16} className="mr-3 text-gray-500 mt-1 flex-shrink-0" />
            <div className="text-gray-700">
              <p className="font-medium text-gray-900">Oxtorgsgatan 18</p>
              <p className="text-sm">553 17 Jönköping</p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-center">
            <Phone size={16} className="mr-3 text-gray-500 flex-shrink-0" />
            <a 
              href="tel:+46735545882" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              073-554 58 82
            </a>
          </div>
          
          {/* Action buttons - removed Facebook and Instagram */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={handlePhoneCall}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <Phone size={16} className="mr-2" />
              Ring oss
            </button>
            
            <button
              onClick={handleEmail}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <Mail size={16} className="mr-2" />
              E-post
            </button>
            
            <button
              onClick={handleGoogleMaps}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <MapPin size={16} className="mr-2" />
              Öppna i Google Maps
            </button>
          </div>
        </div>
      </div>

      {/* Location Information - Text only */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin size={20} className="text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Hitta hit</h3>
        </div>
        
        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <p>
            Vi ligger centralt beläget på Oxtorgsgatan 18 i Jönköping, nära centrum och med god tillgänglighet 
            med kollektivtrafik.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Vägbeskrivning</h4>
            <ul className="space-y-1 text-sm">
              <li>• Från Jönköping Central: 5 minuters promenad</li>
              <li>• Parkering finns i närområdet</li>
              <li>• Busshållplats "Oxtorget" ligger mycket nära</li>
              <li>• Handikappanpassad entré</li>
            </ul>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleGoogleMaps}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <MapPin size={16} className="mr-2" />
              Öppna i Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoView;