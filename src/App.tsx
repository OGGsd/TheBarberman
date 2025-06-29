import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import MainPage from './components/MainPage';
import OmOss from './components/OmOss';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import InstallPrompt from './components/InstallPrompt';

// Initialize security helpers
import { initializeSecurity } from './utils/securityHelpers';

// Page transition wrapper component
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  const pageVariants = {
    initial: { 
      opacity: 0, 
      x: 20,
      scale: 0.98
    },
    in: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    },
    out: { 
      opacity: 0, 
      x: -20,
      scale: 0.98,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Initialize security on app start
    initializeSecurity();

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const appVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Router>
      <motion.div 
        className="min-h-screen bg-gray-50"
        variants={appVariants}
        initial="hidden"
        animate="visible"
      >
        <InstallPrompt />
        
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Home route */}
                  <Route path="/" element={
                    <PageTransition>
                      <MainPage />
                    </PageTransition>
                  } />
                  
                  {/* Info pages */}
                  <Route path="/om-oss" element={
                    <PageTransition>
                      <OmOss />
                    </PageTransition>
                  } />
                  
                  {/* Privacy Policy with dedicated slug */}
                  <Route path="/integritetspolicy" element={
                    <PageTransition>
                      <PrivacyPolicy />
                    </PageTransition>
                  } />
                  <Route path="/privacy" element={<Navigate to="/integritetspolicy" replace />} />
                  
                  {/* Terms of Service with dedicated slug */}
                  <Route path="/anvandarvillkor" element={
                    <PageTransition>
                      <TermsOfService />
                    </PageTransition>
                  } />
                  <Route path="/terms" element={<Navigate to="/anvandarvillkor" replace />} />
                  
                  {/* Catch all route - redirect to home */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default App;