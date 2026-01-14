
const WEDDING_DATE = new Date("May 9, 2026 16:00:00").getTime();
let currentSlide = 0;
const totalSlides = 2;

document.addEventListener('DOMContentLoaded', () => {
    createPetals();
    setupScrollReveal();
    setupEnhancedParallax();
});

function handleEnvelopeOpen() {
    const envelope = document.getElementById('envelope-el');
    const screen = document.getElementById('envelope-screen');
    const main = document.getElementById('main-content');

    if (envelope.classList.contains('opened')) return;
    envelope.classList.add('opened');

    setTimeout(() => {
        screen.classList.add('opacity-0');
        main.style.display = 'block';
        setTimeout(() => {
            main.style.opacity = '1';
            screen.style.display = 'none';
            startCountdown();
            initCarousel();
            window.dispatchEvent(new Event('scroll'));
        }, 800);
    }, 2200);
}

function setupEnhancedParallax() {
    const parallaxImgs = document.querySelectorAll('.parallax-img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxImgs.forEach(img => {
            const container = img.parentElement;
            const rect = container.getBoundingClientRect();
            
            // Si le conteneur est visible à l'écran
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Calcul du ratio de visibilité (0 à 1)
                const relativePos = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                // Décalage vertical prononcé
                const translateY = (relativePos - 0.5) * 150; 
                img.style.transform = `translateY(${translateY}px) scale(1.15)`;
            }
        });
    });
}

function createPetals() {
    const body = document.body;
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 12 + 8 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.background = `rgba(255, ${Math.floor(Math.random() * 50 + 200)}, ${Math.floor(Math.random() * 50 + 200)}, 0.4)`;
        body.appendChild(petal);
    }
}

function setupScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
}

function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    const update = () => {
        const now = new Date().getTime();
        const dist = WEDDING_DATE - now;
        if (dist < 0) { countdownEl.innerHTML = "C'est aujourd'hui !"; return; }

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `
            ${renderUnit(d, 'Jours')}
            ${renderUnit(h, 'Heures')}
            ${renderUnit(m, 'Min')}
            ${renderUnit(s, 'Sec')}
        `;
    };
    setInterval(update, 1000);
    update();
}

function renderUnit(val, lab) {
    return `<div class="p-6 bg-white rounded-2xl shadow-sm min-w-[100px]">
        <div class="text-4xl font-serif text-sage font-bold">${val}</div>
        <div class="text-[9px] uppercase tracking-widest text-gold mt-2">${lab}</div>
    </div>`;
}

function initCarousel() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        const track = document.getElementById('carousel-track');
        if(track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 6000);
}

function handleRSVP() {
    alert("Merci ! Votre confirmation a été envoyée avec succès.");
}

// Bind envelope click manually since we moved to script tag at end
window.handleEnvelopeOpen = handleEnvelopeOpen;
