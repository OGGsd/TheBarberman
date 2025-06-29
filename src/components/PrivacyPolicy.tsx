import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to Om Oss page
      navigate('/om-oss');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-4 px-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={handleBackClick}
            className="mr-4 p-2 hover:bg-black hover:bg-opacity-20 rounded-full transition-colors"
            aria-label="Gå tillbaka"
          >
            <ArrowLeft size={20} />
          </button>
          <img 
            src="/barberman-logo.png" 
            alt="The Barberman Logo" 
            className="w-8 h-8 mr-3 rounded-full object-cover"
          />
          <h1 className="text-lg md:text-xl font-bold">
            Integritetspolicy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        
        {/* Header section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mr-4">
              <Shield size={24} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Integritetspolicy
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Eye size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Inledning</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            The Barberman ("vi", "oss", "vårt") respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
            Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar din information när du använder våra tjänster 
            eller besöker vår salong.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Database size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Information vi samlar in</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Personuppgifter</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Namn och kontaktuppgifter (telefonnummer, e-postadress)</li>
                <li>Bokningsinformation och behandlingshistorik</li>
                <li>Betalningsinformation (hanteras säkert via tredjepartstjänster)</li>
                <li>Kommunikation med oss via telefon, e-post eller sociala medier</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Teknisk information</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-adress och enhetsidentifierare</li>
                <li>Webbläsarinformation och användningsdata</li>
                <li>Cookies och liknande teknologier</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Lock size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Hur vi använder din information</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Hantera bokningar och tillhandahålla våra tjänster</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Kommunicera med dig om dina bokningar och våra tjänster</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Förbättra våra tjänster och kundupplevelse</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Skicka marknadsföringsinformation (endast med ditt samtycke)</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Uppfylla juridiska förpliktelser</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Mail size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Kontakta oss</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
            Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center">
              <Phone size={16} className="mr-3 text-gray-900" />
              <span className="text-sm md:text-base">[Telefonnummer]</span>
            </div>
            <div className="flex items-start">
              <Mail size={16} className="mr-3 text-gray-900 mt-1" />
              <div className="text-sm md:text-base">
                <div>The Barberman</div>
                <div>[Adress]</div>
                <div>[Postnummer] [Stad]</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;