import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Info, Calendar } from 'lucide-react';

interface BottomNavigationProps {
  activeTab?: 'boka' | 'info';
  onTabChange?: (tab: 'boka' | 'info') => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeTab, 
  onTabChange
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current page
  const isOmOssPage = location.pathname === '/om-oss';
  const isMainPage = location.pathname === '/';

  // Scroll to top function with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOmOssClick = () => {
    navigate('/om-oss');
    setTimeout(scrollToTop, 100);
  };

  const handleBokaClick = () => {
    if (isMainPage && onTabChange) {
      onTabChange('boka');
      scrollToTop();
    } else {
      navigate('/', { state: { activeTab: 'boka' } });
      setTimeout(scrollToTop, 100);
    }
  };

  const handleInfoClick = () => {
    if (isMainPage && onTabChange) {
      onTabChange('info');
      scrollToTop();
    } else {
      navigate('/', { state: { activeTab: 'info' } });
      setTimeout(scrollToTop, 100);
    }
  };

  // Compact animation variants
  const containerVariants = {
    hidden: { 
      y: 80, 
      opacity: 0
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.5
      }
    }
  };

  const navItemVariants = {
    inactive: { 
      scale: 1,
      y: 0
    },
    active: { 
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    inactive: {
      scale: 1,
      color: "#6B7280"
    },
    active: {
      scale: 1.1,
      color: "#FFFFFF",
      transition: {
        duration: 0.2
      }
    }
  };

  const backgroundVariants = {
    inactive: {
      scale: 0,
      opacity: 0
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.3
      }
    }
  };

  const labelVariants = {
    inactive: {
      opacity: 0.7,
      color: "#6B7280",
      fontWeight: "500"
    },
    active: {
      opacity: 1,
      color: "#374151",
      fontWeight: "600",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 z-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle background with minimal blur */}
      <div className="relative">
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm border-t border-gray-200/60" />
        
        {/* Compact navigation container */}
        <div className="relative flex max-w-4xl mx-auto px-4 py-3">
          
          {/* Om Oss */}
          <motion.div className="flex-1 flex justify-center">
            <motion.button
              onClick={handleOmOssClick}
              className="relative flex flex-col items-center justify-center p-2 rounded-lg min-w-[60px]"
              variants={navItemVariants}
              animate={isOmOssPage ? "active" : "inactive"}
              whileTap={{ scale: 0.95 }}
            >
              {/* Compact background */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gray-900"
                variants={backgroundVariants}
                animate={isOmOssPage ? "active" : "inactive"}
              />
              
              {/* Icon */}
              <motion.div
                className="relative z-10 mb-1"
                variants={iconVariants}
                animate={isOmOssPage ? "active" : "inactive"}
                whileHover={{ scale: 1.1 }}
              >
                <Users size={20} />
              </motion.div>
              
              {/* Compact label */}
              <motion.span 
                className="relative z-10 text-xs font-medium"
                variants={labelVariants}
                animate={isOmOssPage ? "active" : "inactive"}
              >
                Om Oss
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Boka */}
          <motion.div className="flex-1 flex justify-center">
            <motion.button
              onClick={handleBokaClick}
              className="relative flex flex-col items-center justify-center p-2 rounded-lg min-w-[60px]"
              variants={navItemVariants}
              animate={isMainPage && activeTab === 'boka' ? "active" : "inactive"}
              whileTap={{ scale: 0.95 }}
            >
              {/* Compact background */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gray-900"
                variants={backgroundVariants}
                animate={isMainPage && activeTab === 'boka' ? "active" : "inactive"}
              />
              
              {/* Icon */}
              <motion.div
                className="relative z-10 mb-1"
                variants={iconVariants}
                animate={isMainPage && activeTab === 'boka' ? "active" : "inactive"}
                whileHover={{ scale: 1.1 }}
              >
                <Calendar size={20} />
              </motion.div>
              
              {/* Compact label */}
              <motion.span 
                className="relative z-10 text-xs font-medium"
                variants={labelVariants}
                animate={isMainPage && activeTab === 'boka' ? "active" : "inactive"}
              >
                Boka
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Info */}
          <motion.div className="flex-1 flex justify-center">
            <motion.button
              onClick={handleInfoClick}
              className="relative flex flex-col items-center justify-center p-2 rounded-lg min-w-[60px]"
              variants={navItemVariants}
              animate={isMainPage && activeTab === 'info' ? "active" : "inactive"}
              whileTap={{ scale: 0.95 }}
            >
              {/* Compact background */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gray-900"
                variants={backgroundVariants}
                animate={isMainPage && activeTab === 'info' ? "active" : "inactive"}
              />
              
              {/* Icon */}
              <motion.div
                className="relative z-10 mb-1"
                variants={iconVariants}
                animate={isMainPage && activeTab === 'info' ? "active" : "inactive"}
                whileHover={{ scale: 1.1 }}
              >
                <Info size={20} />
              </motion.div>
              
              {/* Compact label */}
              <motion.span 
                className="relative z-10 text-xs font-medium"
                variants={labelVariants}
                animate={isMainPage && activeTab === 'info' ? "active" : "inactive"}
              >
                Info
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Minimal indicator dots */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[isOmOssPage, isMainPage && activeTab === 'boka', isMainPage && activeTab === 'info'].map((isActive, index) => (
            <motion.div
              key={index}
              className={`w-1 h-1 rounded-full ${isActive ? 'bg-gray-800' : 'bg-gray-300'}`}
              animate={{
                scale: isActive ? 1.2 : 1,
                opacity: isActive ? 1 : 0.4
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BottomNavigation;