import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, CreditCard, Clock } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
            Användarvillkor
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        
        {/* Header section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mr-4">
              <FileText size={24} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Användarvillkor
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
              <FileText size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Allmänna villkor</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Välkommen till The Barberman! Dessa användarvillkor ("Villkor") reglerar din användning av våra tjänster, 
            webbplats och besök på vår salong. Genom att använda våra tjänster accepterar du dessa villkor i sin helhet.
          </p>
        </div>

        {/* Booking Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Calendar size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Bokningsvillkor</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Bokning och bekräftelse</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Alla bokningar måste bekräftas av oss för att vara giltiga</li>
                <li>Du kommer att få en bekräftelse via SMS eller e-post</li>
                <li>Bokningar kan göras online, via telefon eller i salongen</li>
                <li>Vi förbehåller oss rätten att avböja bokningar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Avbokning och ändring</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Avbokning eller ändring måste göras minst 24 timmar i förväg</li>
                <li>Sen avbokning (mindre än 24 timmar) kan medföra en avgift</li>
                <li>Utebliven tid utan avbokning debiteras fullt pris</li>
                <li>Kontakta oss för avbokning eller ändring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <CreditCard size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Betalningsvillkor</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Betalning sker efter utförd tjänst i salongen</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Vi accepterar kontanter, kort och Swish</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Priser kan ändras utan föregående meddelande</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Aktuella priser finns på vår webbplats och i salongen</span>
            </div>
          </div>
        </div>

        {/* Contact and Disputes */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Clock size={20} className="text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Kontakt och tvister</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Klagomål och reklamationer</h4>
              <p className="mb-2">
                Vid klagomål eller reklamationer, kontakta oss omedelbart:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Telefon: [Telefonnummer]</li>
                <li>Besök vår salong</li>
                <li>Kontakta oss via sociala medier</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;