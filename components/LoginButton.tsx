import React from 'react';
import { LoginButtonProps } from '../types';

export const LoginButton: React.FC<LoginButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative w-full bg-white active:bg-gray-100 transition-all duration-200 h-14 rounded-full flex items-center shadow-lg overflow-hidden"
    >
      <div className="absolute left-6 flex items-center justify-center">
        {icon}
      </div>
      <span className="w-full text-center text-black font-bold text-[15px] tracking-wide">
        {text}
      </span>
    </button>
  );
};
