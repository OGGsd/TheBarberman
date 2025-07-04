import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import BookingIframe from './BookingIframe';

interface Service {
  name: string;
  duration: string;
  price: string;
  bookingUrl: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const BookingView: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      title: "Klippningar",
      services: [
        { 
          name: "Barnklippning (0–12 år)", 
          duration: "30 min", 
          price: "250 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/barn-klippning-0-12-ar-2551887"
        },
        { 
          name: "Hårklippning", 
          duration: "40 min", 
          price: "339 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/harklippning-1676724"
        },
        { 
          name: "Senior klippning", 
          duration: "30 min", 
          price: "250 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/senior-klippning-1676729"
        },
        { 
          name: "Senior klippning & skäggtrimning", 
          duration: "50 min", 
          price: "389 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/senior-klippning-och-skaggtrimning-3192667"
        },
        { 
          name: "Studentklippning", 
          duration: "40 min", 
          price: "299 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/studentklippning-1676738"
        },
        { 
          name: "Studentklippning & skäggtrim (valfri längd)", 
          duration: "60 min", 
          price: "429 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/studentklippning-skaggtrim-valfri-langd-1676737"
        }
      ]
    },
    {
      title: "Kombinationsbehandlingar",
      services: [
        { 
          name: "Hårklippning & kort skäggtrim (0–2 cm)", 
          duration: "60 min", 
          price: "449 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/harklippning-kort-skaggtrim-0-2-cm-1676725"
        },
        { 
          name: "Hårklippning & lång skäggtrim", 
          duration: "60 min", 
          price: "499 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/harklippning-lang-skaggtrim-1676726"
        },
        { 
          name: "Hårklippning & traditionell rakning", 
          duration: "50 min", 
          price: "439 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/harklippning-traditionell-rakning-1676727"
        }
      ]
    },
    {
      title: "Snaggning & Rakning",
      services: [
        { 
          name: "Snaggning", 
          duration: "15 min", 
          price: "149 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/snagging-1676736"
        },
        { 
          name: "Snaggning & skäggtrim", 
          duration: "35 min", 
          price: "359 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/snaggning-skaggtrim-1676732"
        },
        { 
          name: "Snaggning & skinfade", 
          duration: "30 min", 
          price: "229 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/snaggning-skinfade-1676734"
        },
        { 
          name: "Snaggning, skinfade & skäggtrim", 
          duration: "45 min", 
          price: "369 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/snaggning-skinfade-skaggtrim-1676735"
        },
        { 
          name: "Snaggning & traditionell rakning", 
          duration: "40 min", 
          price: "359 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/snaggning-traditionell-rakning-1676733"
        }
      ]
    },
    {
      title: "Skägg & Rakning",
      services: [
        { 
          name: "Skäggtrim (0–2 cm)", 
          duration: "30 min", 
          price: "239 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/skaggtrim-0-2-cm-1676730"
        },
        { 
          name: "Skäggtrim (2 cm eller mer)", 
          duration: "30 min", 
          price: "289 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/skaggtrim-2cm-eller-mer-1676731"
        },
        { 
          name: "Huvudrakning", 
          duration: "25 min", 
          price: "259 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/huvudrakning-1676712"
        },
        { 
          name: "Huvudrakning & skäggtrim", 
          duration: "45 min", 
          price: "399 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/huvudrakning-skaggtrim-1676711"
        },
        { 
          name: "Huvudrakning & traditionell rakning", 
          duration: "35 min", 
          price: "389 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/the-barberman-44122/huvudrakning-traditionell-rakning-1676740"
        }
      ]
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  const handleBookingClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeBookingIframe = () => {
    setSelectedService(null);
  };

  // Animation variants
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

  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const serviceVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <>
      <motion.div 
        className="p-4 max-w-4xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Service Categories */}
        <div className="space-y-3">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Category Header */}
              <motion.button
                onClick={() => toggleCategory(category.title)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center">
                  <div className="text-left">
                    <motion.h4 
                      className="text-base font-bold text-gray-900"
                      whileHover={{ color: "#374151" }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.title}
                    </motion.h4>
                    <span className="text-xs text-gray-500">
                      {category.services.length} tjänst{category.services.length > 1 ? 'er' : ''}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedCategory === category.title ? (
                    <ChevronUp size={20} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-600" />
                  )}
                </motion.div>
              </motion.button>

              {/* Services List with smooth expand/collapse */}
              <AnimatePresence>
                {expandedCategory === category.title && (
                  <motion.div 
                    className="border-t border-gray-100 bg-gray-50"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {category.services.map((service, serviceIndex) => (
                        <motion.div 
                          key={serviceIndex} 
                          className="p-4 border-b border-gray-200 last:border-b-0 bg-white mx-2 mb-2 last:mb-0 rounded-lg shadow-sm"
                          variants={serviceVariants}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="font-semibold text-gray-900 text-sm leading-tight flex-1 mr-3">
                              {service.name}
                            </h5>
                            <div className="text-right flex-shrink-0">
                              <motion.div 
                                className="font-bold text-gray-800 text-sm"
                                whileHover={{ scale: 1.05 }}
                              >
                                {service.price}
                              </motion.div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-600">
                              <Clock size={12} className="mr-1" />
                              <span className="text-xs">{service.duration}</span>
                            </div>
                            <motion.button 
                              onClick={() => handleBookingClick(service)}
                              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors duration-200 shadow-md"
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              BOKA
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Booking Iframe Modal with animation */}
      <AnimatePresence>
        {selectedService && (
          <BookingIframe
            bookingUrl={selectedService.bookingUrl}
            serviceName={selectedService.name}
            onClose={closeBookingIframe}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingView;