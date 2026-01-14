
import React, { useEffect } from 'react';
import { Countdown } from './Countdown';

export const InvitationContent: React.FC = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-[#4a5d4d] animate-fade-in font-sans overflow-x-hidden paper-texture">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 scale-105 hover:scale-100 transition-transform duration-[10s] ease-linear"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs md:text-sm uppercase tracking-[10px] mb-6 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            L'union de deux âmes
          </p>
          <h1 className="font-cursive text-7xl md:text-9xl mb-4 drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Pedro & Júlia
          </h1>
          <div className="w-24 h-px bg-white/40 mx-auto my-8"></div>
          <p className="font-serif text-xl md:text-4xl tracking-[6px] animate-fade-in" style={{ animationDelay: '0.6s' }}>
            09 . 05 . 2026
          </p>
          
          <button 
            className="mt-12 group relative inline-block px-12 py-4 overflow-hidden rounded-full transition-all animate-fade-in"
            style={{ animationDelay: '0.8s' }}
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/40 group-hover:bg-white/20 transition-all rounded-full"></span>
            <span className="relative text-white font-serif tracking-[3px] text-sm">NOTRE JOUR J</span>
          </button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center reveal">
        <h2 className="font-serif italic text-4xl md:text-5xl mb-8 text-[#8fa68d]">Une Histoire Éternelle</h2>
        <div className="gold-underline !w-24 !my-6"></div>
        <p className="font-light text-xl md:text-2xl leading-relaxed text-gray-500 italic mb-16">
          "Parfois, au milieu de la vie ordinaire, l'amour nous offre un conte de fées."
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 text-center">
          <div className="group p-10 bg-white rounded-[2rem] shadow-sm border border-[#c5a059]/10 hover:shadow-xl transition-all duration-500">
            <h3 className="font-serif text-xl mb-4 text-[#c5a059] tracking-widest">LA CÉRÉMONIE</h3>
            <p className="font-bold text-2xl">16:00 H</p>
            <p className="text-gray-500 mt-2 font-light">L'Hacienda Royale San Jose</p>
            <p className="text-gray-400 italic text-sm">Séville, Espagne</p>
          </div>
          <div className="group p-10 bg-white rounded-[2rem] shadow-sm border border-[#c5a059]/10 hover:shadow-xl transition-all duration-500">
            <h3 className="font-serif text-xl mb-4 text-[#c5a059] tracking-widest">LA RÉCEPTION</h3>
            <p className="font-bold text-2xl">18:30 H</p>
            <p className="text-gray-500 mt-2 font-light">Cocktails, Dîner & Festivités</p>
            <p className="text-gray-400 italic text-sm">Jusqu'au bout de la nuit</p>
          </div>
        </div>
      </section>

      {/* SECTION: Notre Histoire */}
      <section className="py-32 bg-white/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="font-serif italic text-4xl md:text-6xl text-[#4a5d4d]">Les Chapitres de Notre Vie</h2>
            <div className="gold-underline !w-16 !mt-8"></div>
          </div>

          <div className="space-y-40">
            {/* Chapitre 1: La Rencontre */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 reveal">
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 border border-[#acc6aa]/30 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700"></div>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl z-10 aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1516589174184-c68526614fd5?auto=format&fit=crop&w=800&q=80" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                    alt="La Rencontre" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left space-y-6">
                <span className="font-serif italic text-[#c5a059] text-2xl">Le Commencement</span>
                <h3 className="text-4xl font-serif text-[#4a5d4d] tracking-tight">L'Étincelle de Séville</h3>
                <p className="text-gray-600 leading-relaxed font-light text-xl">
                  Tout a commencé lors d'un doux après-midi d'automne, sous les arcades dorées de Séville. 
                  Un simple regard échangé au détour d'une ruelle parfumée de fleurs d'oranger a suffi à sceller notre destin. 
                  Ce qui n'était qu'une rencontre fortuite est devenu le premier mot d'un livre que nous écrivons ensemble chaque jour depuis.
                </p>
                <div className="pt-4">
                  <svg className="w-8 h-8 text-[#acc6aa]/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
              </div>
            </div>

            {/* Chapitre 2: Le Voyage */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 reveal">
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 border border-[#c5a059]/20 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-0 duration-700"></div>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl z-10 aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&w=800&q=80" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                    alt="Le Voyage" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-right space-y-6">
                <span className="font-serif italic text-[#c5a059] text-2xl">L'Aventure</span>
                <h3 className="text-4xl font-serif text-[#4a5d4d] tracking-tight">Deux Cœurs, Un Chemin</h3>
                <p className="text-gray-600 leading-relaxed font-light text-xl">
                  Des sommets enneigés aux plages infinies, nous avons parcouru le monde main dans la main. 
                  Chaque voyage a renforcé notre lien, chaque défi a consolidé notre complicité. 
                  Nous avons appris que l'aventure n'est pas seulement dans la destination, mais dans la personne qui marche à nos côtés chaque matin.
                </p>
              </div>
            </div>

            {/* Chapitre 3: La Demande */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 reveal">
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 border border-[#acc6aa]/30 rounded-[3rem] -rotate-2 transition-transform group-hover:rotate-0 duration-700"></div>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl z-10 aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                    alt="La Promesse" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left space-y-6">
                <span className="font-serif italic text-[#c5a059] text-2xl">La Promesse</span>
                <h3 className="text-4xl font-serif text-[#4a5d4d] tracking-tight">Le Grand "Oui"</h3>
                <p className="text-gray-600 leading-relaxed font-light text-xl">
                  C'est au coucher du soleil, sur une plage déserte où le ciel semblait s'enflammer, que Pedro a posé la question qui a changé nos vies. 
                  Dans un murmure chargé d'émotion, Júlia a dit "Oui" à une vie de rires, de soutien mutuel et d'amour inconditionnel. 
                  Aujourd'hui, nous vous invitons à célébrer le début officiel de ce nouveau chapitre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-32 bg-[#acc6aa]/10 text-center reveal">
        <h2 className="font-serif italic text-3xl mb-12 text-[#c5a059]">Le compte à rebours est lancé</h2>
        <Countdown />
      </section>

      {/* Instants Précieux (Gallery Carousel-like Grid) */}
      <section className="py-32 bg-[#f9f4ee] overflow-hidden reveal">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif italic text-4xl mb-20 text-[#8fa68d]">Instants Précieux</h2>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80" 
                className="w-56 md:w-72 h-96 object-cover rounded-[2rem] shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-all duration-700 hover:scale-105" 
                alt="Moment 1" 
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity font-cursive text-2xl text-[#acc6aa]">Bonheur</div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80" 
                className="w-56 md:w-72 h-96 object-cover rounded-[2rem] shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-700 hover:scale-105" 
                alt="Moment 2" 
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity font-cursive text-2xl text-[#acc6aa]">Complicité</div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80" 
                className="w-56 md:w-72 h-96 object-cover rounded-[2rem] shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-700 hover:scale-105" 
                alt="Moment 3" 
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity font-cursive text-2xl text-[#acc6aa]">Éternité</div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-32 px-6 bg-white border-t border-gray-50 reveal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif italic text-5xl mb-6 text-[#4a5d4d]">Votre Présence</h2>
          <p className="text-gray-500 font-light tracking-widest uppercase text-sm mb-12">Merci de nous répondre avant le 1er Mars 2026</p>
          
          <form className="bg-[#fdfaf5] p-10 md:p-16 rounded-[3rem] shadow-sm space-y-10 border border-gray-100/50" onSubmit={(e) => { e.preventDefault(); alert('Merci ! Votre réponse a été envoyée.'); }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-[#c5a059] ml-6 font-semibold">Nom & Prénom</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Votre nom complet"
                  className="w-full px-8 py-5 bg-white rounded-full focus:ring-1 focus:ring-[#c5a059] outline-none transition-all text-sm border border-transparent shadow-inner"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-[#c5a059] ml-6 font-semibold">Convives</label>
                <select className="w-full px-8 py-5 bg-white rounded-full focus:ring-1 focus:ring-[#c5a059] outline-none transition-all text-sm border border-transparent appearance-none shadow-inner cursor-pointer">
                  <option>1 Adulte</option>
                  <option>2 Adultes</option>
                  <option>Famille (Précisez en note)</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-[#c5a059] ml-6 font-semibold">Note Personnelle</label>
              <textarea 
                placeholder="Un message pour nous, ou une restriction alimentaire..." 
                className="w-full px-8 py-6 bg-white rounded-[2.5rem] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all text-sm border border-transparent h-44 shadow-inner resize-none"
              ></textarea>
            </div>
            
            <button className="w-full py-6 bg-[#4a5d4d] hover:bg-[#c5a059] text-white rounded-full font-bold tracking-[6px] text-xs transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
              CONFIRMER MA RÉPONSE
            </button>
          </form>
        </div>
      </section>

      <footer className="py-24 text-center bg-[#fdfaf5] border-t border-gray-50">
        <div className="mb-8">
          <svg className="w-8 h-8 text-[#acc6aa] mx-auto opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <h3 className="font-cursive text-5xl text-[#acc6aa] mb-6">Pedro & Júlia</h3>
        <p className="text-gray-400 text-[10px] tracking-[8px] uppercase font-light">L'Amour est le seul voyage qui ne finit jamais</p>
      </footer>
    </div>
  );
};
