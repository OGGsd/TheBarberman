import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface BranchCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  logoSrc?: string;
  onClick: () => void;
}

const BranchCard: React.FC<BranchCardProps> = ({ title, subtitle, imageSrc, onClick }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden border-4 border-blue-600 cursor-pointer aspect-square group"
      onClick={onClick}
      style={{ 
        minHeight: '200px',
        perspective: '1000px'
      }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Enhanced Background Image with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${imageSrc})` }}
        whileHover={{ scale: 1.15, rotate: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"
        whileHover={{ 
          background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.85) 50%, rgba(59,130,246,0.1) 100%)"
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6">
        {/* Enhanced Logo with multiple animation layers */}
        <motion.div 
          className="mb-4 relative"
          whileHover={{ 
            scale: 1.3,
            rotate: [0, -10, 10, 0]
          }}
          transition={{ 
            scale: { type: "spring", stiffness: 400, damping: 10 },
            rotate: { duration: 0.6 }
          }}
        >
          <motion.div
            className="absolute inset-0 bg-blue-600 rounded-full opacity-20 scale-150"
            animate={{
              scale: [1.5, 1.8, 1.5],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white p-3 shadow-md relative z-10 flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 4px 8px rgba(0,0,0,0.1)",
                "0 8px 16px rgba(59, 130, 246, 0.3)",
                "0 12px 24px rgba(59, 130, 246, 0.4)",
                "0 8px 16px rgba(59, 130, 246, 0.3)",
                "0 4px 8px rgba(0,0,0,0.1)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Calendar size={24} className="text-blue-600" />
          </motion.div>
          
          {/* Orbiting ring */}
          <motion.div
            className="absolute inset-0 border-2 border-blue-600/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        {/* Enhanced Title with typewriter effect */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ 
            color: "#3B82F6",
            scale: 1.05,
            textShadow: "2px 2px 4px rgba(59, 130, 246, 0.3)"
          }}
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                color: "#3B82F6",
                transition: { duration: 0.2 }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        
        {/* Enhanced Subtitle */}
        <motion.p 
          className="text-xs md:text-sm text-gray-600 text-center font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ 
            color: "#666",
            scale: 1.02
          }}
        >
          {subtitle}
        </motion.p>
        
        {/* Enhanced animated accent bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 to-blue-500"
          initial={{ scaleX: 0, height: 3 }}
          animate={{ scaleX: 1, height: 3 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ 
            height: 20,
            background: "linear-gradient(90deg, #3B82F6 0%, #2563EB 50%, #3B82F6 100%)"
          }}
        />
      </div>

      {/* Enhanced magical shine effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Enhanced floating particles effect */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-blue-600 rounded-full opacity-40"
        animate={{
          y: [0, -12, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.4, 1],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-4 w-1 h-1 bg-blue-600 rounded-full opacity-50"
        animate={{
          x: [0, 8, 0],
          y: [0, -8, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/0 rounded-lg"
        whileHover={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.1) 100%)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BranchCard;