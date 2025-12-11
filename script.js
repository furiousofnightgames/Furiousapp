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

    // Old Versions Toggle Logic
    const btnOldVersions = document.getElementById('btn-old-versions');
    const listOldVersions = document.getElementById('old-versions-list');

    if (btnOldVersions && listOldVersions) {
        btnOldVersions.addEventListener('click', () => {
            if (listOldVersions.classList.contains('hidden')) {
                // Open
                listOldVersions.classList.remove('hidden');
                // Force reflow
                void listOldVersions.offsetWidth;
                listOldVersions.classList.add('open');
            } else {
                // Close
                listOldVersions.classList.remove('open');
                // Wait for transition to end before setting display:none
                setTimeout(() => {
                    if (!listOldVersions.classList.contains('open')) {
                        listOldVersions.classList.add('hidden');
                    }
                }, 500);
            }
        });
    }

    // Download Button Feedback (Main and Old Versions)
    const downloadlinks = document.querySelectorAll('.action-area > .cyber-button, .download-link');

    downloadlinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if it's the main button or a text link
            const isMainButton = link.classList.contains('cyber-button');
            const originalText = link.innerHTML;

            link.style.pointerEvents = 'none'; // Prevent double clicks
            link.style.opacity = '0.8';

            if (isMainButton) {
                link.innerHTML = `
                    <span class="btn-content">INICIANDO...</span>
                    <span class="glitch-effect"></span>
                `;
            } else {
                link.textContent = '[INICIANDO...]';
            }

            // Reset after a few seconds
            setTimeout(() => {
                link.innerHTML = originalText;
                link.style.pointerEvents = 'auto';
                link.style.opacity = '1';
            }, 3000);
        });
    });

    console.log("Furious App Interface Loaded.");
});
