import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Heart, Award, Calendar, Shield, FileText, Star } from 'lucide-react';
import BottomNavigation from './BottomNavigation';
import { motion } from 'framer-motion';

const OmOss: React.FC = () => {
  const navigate = useNavigate();

  // Enhanced animation variants matching InfoView style
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    }
  };

  const headerVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content Area - Proper spacing for bottom nav */}
      <div className="flex-1 pb-20 overflow-y-auto">
        <motion.div 
          className="p-4 max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Header section */}
          <motion.div 
            className="text-center mb-6"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.img 
                src="/barberman-logo.png" 
                alt="The Barberman Logo" 
                className="w-16 h-16 mr-3 rounded-full bg-white p-1 shadow-lg object-cover"
                variants={headerVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              />
              <motion.div 
                className="text-left"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  THE BARBERMAN
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  PROFESSIONAL BARBERING
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Story */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Calendar size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Vår Historia</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
              The Barberman grundades med en vision om att erbjuda professionell barbering av högsta kvalitet. 
              Vi kombinerar traditionella tekniker med moderna metoder för att skapa en unik upplevelse för våra kunder.
            </p>
          </motion.div>

          {/* Our Barbers - Clean 2:1 Grid with Correct Names */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Våra Barberare</h3>
            </div>
            
            {/* 2:1 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basel */}
              <div className="group">
                <div className="aspect-[2/1] relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/Basel.jpg" 
                    alt="Basel" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">Basel</h4>
                    <p className="text-sm opacity-90">Frisör & Barberare</p>
                  </div>
                </div>
              </div>

              {/* Ghaith */}
              <div className="group">
                <div className="aspect-[2/1] relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="/3463cbef-8ccf-4b88-a75e-b559a779fd36.jpg" 
                    alt="Ghaith" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">Ghaith</h4>
                    <p className="text-sm opacity-90">Frisör & Barberare</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Customer Reviews Section */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Star size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Kundrecensioner</h3>
            </div>
            
            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Review 1 */}
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-900">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">Verifierad kund</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  "Otroligt professionell service! Barberaren lyssnade på exakt vad jag ville ha och levererade perfekt resultat. 
                  Bästa klippningen jag fått på mycket länge. Kommer definitivt tillbaka!"
                </p>
                <p className="text-xs text-gray-500">- Marcus L., 25 juni 2025</p>
              </div>

              {/* Review 2 */}
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-900">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">Verifierad kund</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  "Fantastisk upplevelse från början till slut. Mycket kunnig barberare som verkligen förstår sitt hantverk. 
                  Traditionell rakning var helt fantastisk. Rekommenderar starkt!"
                </p>
                <p className="text-xs text-gray-500">- Erik S., 22 juni 2025</p>
              </div>

              {/* Review 3 */}
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-900">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">Verifierad kund</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  "Toppenkvalitet och service! Mycket professionell miljö och barberaren var extremt skicklig. 
                  Resultatet överträffade alla mina förväntningar. Kommer bli en återkommande kund!"
                </p>
                <p className="text-xs text-gray-500">- Johan A., 20 juni 2025</p>
              </div>

              {/* Review 4 */}
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-900">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">Verifierad kund</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  "Perfekt klippning och skäggtrim! Barberaren var mycket noggrann och tog sig tid för att få allt rätt. 
                  Mycket trevlig personal och bra atmosfär. Rekommenderas varmt!"
                </p>
                <p className="text-xs text-gray-500">- David M., 18 juni 2025</p>
              </div>
            </div>

            {/* Overall Rating Summary */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 text-white text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-2xl font-bold">5.0</span>
              </div>
              <p className="text-sm opacity-90">
                Baserat på verifierade kundrecensioner från BokaDirekt
              </p>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Heart size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Vårt Uppdrag</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                Vi strävar efter att ge varje kund en exceptionell upplevelse genom professionell service, 
                kvalitetsbehandlingar och en välkomnande atmosfär.
              </p>
              
              <div className="border-l-4 border-gray-900 pl-4 py-2 bg-gray-50 rounded-r-lg italic">
                "Kvalitet, precision och kundnöjdhet är våra grundpelare"
              </div>
              
              <p>
                Vårt team av erfarna barberare använder endast de bästa produkterna och teknikerna 
                för att säkerställa att varje kund lämnar salongen nöjd och välvårdad.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Våra Värderingar</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Heart size={14} className="mr-2 text-gray-900 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Kvalitet</h4>
                  <p className="text-xs text-gray-600">Högsta standard i allt vi gör</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award size={14} className="mr-2 text-gray-900 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Precision</h4>
                  <p className="text-xs text-gray-600">Noggrannhet i varje detalj</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={14} className="mr-2 text-gray-900 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Service</h4>
                  <p className="text-xs text-gray-600">Exceptionell kundupplevelse</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Privacy Policy and Terms of Use Buttons */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => navigate('/integritetspolicy')}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 text-left"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield size={20} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Integritetspolicy</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Läs om hur vi hanterar dina personuppgifter och skyddar din integritet.
              </p>
            </motion.button>

            <motion.button
              onClick={() => navigate('/anvandarvillkor')}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 text-left"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText size={20} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Användarvillkor</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Läs våra villkor för användning av våra tjänster och webbplats.
              </p>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </motion.div>
  );
};

export default OmOss;