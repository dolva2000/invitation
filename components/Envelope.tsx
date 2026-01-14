
import React, { useState } from 'react';

interface EnvelopeProps {
  onOpenComplete: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpenComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    // After the animations finish, hide the envelope and show content
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onOpenComplete, 1000);
    }, 2500);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#e0eadd] transition-opacity duration-1000 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div 
        className={`envelope-wrapper relative w-[350px] h-[250px] cursor-pointer group ${isOpened ? 'envelope-opened' : ''}`}
        onClick={handleOpen}
      >
        {/* Background texture simulation */}
        <div className="absolute inset-0 bg-[#8fa68d] shadow-2xl overflow-hidden rounded-sm">
          <div 
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/floral-paper.png')" }}
          ></div>
        </div>

        {/* Top Flap */}
        <div 
          className="envelope-flap absolute top-0 left-0 w-0 h-0 border-l-[175px] border-l-transparent border-r-[175px] border-r-transparent border-t-[140px] border-t-[#acc6aa]"
          style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.1))' }}
        ></div>

        {/* Letter Inside */}
        <div className="letter absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-[#fdfaf5] p-6 shadow-md flex flex-col items-center justify-center text-center">
          <p className="text-[10px] uppercase tracking-[3px] text-[#4a5d4d] mb-2 font-semibold">Nous nous marions</p>
          <h2 className="font-cursive text-4xl text-[#8fa68d] my-1">Pedro & Júlia</h2>
          <p className="text-[12px] font-serif italic text-[#c5a059]">9 Mai 2026</p>
          <div className="mt-4 text-[8px] tracking-[2px] text-gray-400 uppercase">Invitation Personnelle</div>
        </div>

        {/* Front Body */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[175px] border-l-[#acc6aa] border-r-[175px] border-r-[#acc6aa] border-bottom-[125px] border-b-[#8fa68d] z-30"></div>

        {/* Wax Seal */}
        <div className="seal-animation absolute top-[115px] left-1/2 -translate-x-1/2 w-20 h-20 bg-[#f3e5d8] rounded-full z-[45] flex items-center justify-center shadow-lg border-2 border-[#ede0d4]">
          <span className="font-cursive text-2xl text-[#acc6aa]">P&J</span>
        </div>

        {/* Floating Instruction */}
        {!isOpened && (
          <div className="absolute -bottom-16 w-full text-center text-[#4a5d4d] font-serif italic animate-bounce">
            Cliquez pour ouvrir l'invitation
          </div>
        )}
      </div>
    </div>
  );
};
