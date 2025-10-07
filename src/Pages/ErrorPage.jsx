import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  // Animation variants for the error text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        delay: 0.5, 
        duration: 0.5, 
        ease: 'easeOut' 
      } 
    },
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3 } 
    },
  };

  // Animation variants for the error icon
  const iconVariants = {
    idle: { 
      scale: [1, 1.1, 1], 
      transition: { 
        scale: { repeat: Infinity, duration: 2, ease: 'easeInOut' } 
      } 
    },
    hover: { 
      rotate: [0, 5, -5, 0], 
      transition: { 
        rotate: { duration: 0.5, ease: 'easeInOut' } 
      } 
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
      {/* Large Animated Error Icon */}
      <motion.div
        className="mb-10"
        variants={iconVariants}
        initial="idle"
        animate="idle"
        whileHover="hover"
      >
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Broken link symbol */}
          <path
            d="M30 30 L40 40 M60 60 L70 70"
            stroke="#EF4444"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="50" cy="50" r="35" stroke="#EF4444" strokeWidth="8" fill="none"/>
          <path
            d="M35 35 L65 65"
            stroke="#EF4444"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Error Message */}
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4 text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-md"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        It looks like you're lost in cyberspace. Let's get you back on track!
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Link 
          to="/" 
          className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;