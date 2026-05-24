import React from 'react';
import hamzaPic from '../assets/hamza.png';

const Footer = () => {
  const developerName = "Hamza Hameed";

  return (
    <footer className="w-full mt-20 border-t border-gray-100 bg-gray-50/50 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6">
        
        {/* Profile Node: Size increased to w-24 h-24 (96px) */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-white flex items-center justify-center">
            <img 
              src={hamzaPic} 
              alt={developerName} 
              className="w-full h-full object-cover scale-110" // scale-110 thoda zoom karega taake empty space na bache
            />
          </div>
        </div>

        {/* Identity */}
        <div className="space-y-1.5">
          <h4 className="text-gray-950 font-extrabold text-lg tracking-tight">
            {developerName}
          </h4>
          <p className="text-gray-500 text-sm font-medium">
           Global Data Visualization Dashboard | REST Countries API
          </p>
        </div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-[11px] uppercase font-bold tracking-[0.2em] pt-6 border-t border-gray-200 w-full max-w-sm">
          © {new Date().getFullYear()} Multan, Pakistan
        </p>
      </div>
    </footer>
  );
};

export default Footer;