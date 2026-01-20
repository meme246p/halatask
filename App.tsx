import React, { useState } from 'react';
import { Background } from './components/Background';
import { LoginButton } from './components/LoginButton';
import { UserIcon } from './components/Icons';
import { LoginScreen } from './components/LoginScreen';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleBack = () => {
    setShowLogin(false);
  };

  if (showLogin) {
    return <LoginScreen onBack={handleBack} />;
  }

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black text-white font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Background Image */}
      <Background />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-md mx-auto px-6 py-10">
        
        {/* Top Section: Logo & Info */}
        <div className="flex flex-col items-center justify-center mt-8 space-y-4 text-center">
          {/* Logo with Unofficial Tag */}
          <div className="relative">
            <h1 className="font-logo text-7xl text-white drop-shadow-md">
              Hala
            </h1>
            <span className="absolute -top-3 -right-9 bg-gradient-to-r from-red-600 to-rose-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 rotate-12 tracking-wider uppercase">
              Unofficial
            </span>
          </div>
          
          {/* Slogan */}
          <p className="text-white/90 text-lg font-medium tracking-wide drop-shadow-sm">
            Show Me , Happy the World!
          </p>

          {/* Simple Text Explanation */}
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto mt-6 text-center tracking-wide font-medium drop-shadow-sm">
            This is the unofficial Hala platform for giving more tasks like subscribing to YouTube channels, following certain profiles, and much more tasks everyday.
          </p>
        </div>

        {/* Bottom Section: Buttons & Footer */}
        <div className="w-full flex flex-col space-y-4 mb-6">
          
          <LoginButton 
            icon={<UserIcon />} 
            text="Sign in with Account" 
            onClick={handleLoginClick}
          />

          {/* Footer Text */}
          <p className="text-center text-[10px] text-gray-400 mt-6 tracking-wide opacity-80">
            Login means agree to the User Registration Agreement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;