document.addEventListener('DOMContentLoaded', () => {
    // Basic particle system creation for visual flair
    const particlesContainer = document.getElementById('particles');

    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(0, 243, 255, ${Math.random()})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.boxShadow = '0 0 10px rgba(0, 243, 255, 0.8)';

        const duration = Math.random() * 5 + 5;
        particle.style.animation = `floatUp ${duration}s linear forwards`;

        particlesContainer.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Add keyframes for floatUp if not present (handled here for simplicity or could be in CSS)
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes floatUp {
            to {
                top: -10px;
                opacity: 0;
                transform: translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    setInterval(createParticle, 200);

    console.log("Furious App Interface Loaded.");
});
