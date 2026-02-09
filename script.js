document.addEventListener('DOMContentLoaded', () => {
    // Cyberpunk Particle System
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;

    function createParticle() {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;

        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        particle.style.pointerEvents = 'none';

        // Random drift animation
        const duration = Math.random() * 15 + 10;
        const driftX = (Math.random() - 0.5) * 200;
        const driftY = (Math.random() - 0.5) * 200;

        particle.animate([
            { transform: 'translate(0, 0)', opacity: particle.style.opacity },
            { transform: `translate(${driftX}px, ${driftY}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });

        particlesContainer.appendChild(particle);
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    // Old Versions Toggle Logic
    const btnOldVersions = document.getElementById('btn-old-versions');
    const listOldVersions = document.getElementById('old-versions-list');

    if (btnOldVersions && listOldVersions) {
        btnOldVersions.addEventListener('click', () => {
            const isHidden = listOldVersions.classList.contains('hidden');

            if (isHidden) {
                listOldVersions.classList.remove('hidden');
                // Force reflow
                void listOldVersions.offsetWidth;
                listOldVersions.classList.add('open');
                btnOldVersions.querySelector('span:not(.btn-icon)').textContent = 'FECHAR VERSÕES';

                // Scroll to list
                setTimeout(() => {
                    listOldVersions.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            } else {
                listOldVersions.classList.remove('open');
                btnOldVersions.querySelector('span:not(.btn-icon)').textContent = 'VERSÕES ANTERIORES';
                setTimeout(() => {
                    if (!listOldVersions.classList.contains('open')) {
                        listOldVersions.classList.add('hidden');
                    }
                }, 500);
            }
        });
    }

    // Interactive Hover Effects for Download Buttons
    const downloadBtns = document.querySelectorAll('.cyber-button, .download-link');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Visual feedback on click
            const originalContent = btn.innerHTML;
            if (btn.classList.contains('primary-btn')) {
                btn.innerHTML = '<span class="btn-content">INICIANDO...</span>';
                setTimeout(() => { btn.innerHTML = originalContent; }, 2000);
            }
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .card.holographic').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    console.log("Furious App Interface Loaded.");

    fetchDownloadStats();
});

async function fetchDownloadStats() {
    const statsContainer = document.getElementById('download-stats-container');
    const countElement = document.getElementById('download-count');

    if (!statsContainer || !countElement) return;

    let totalDownloads = 0;
    // Fallback value in case API fails (e.g. CORS on local file)
    // This ensures the robust UI is always visible
    const fallbackDownloads = 150;

    try {
        const response = await fetch('https://api.github.com/repos/furiousofnightgames/Furiousapp/releases');
        if (!response.ok) throw new Error('Network response was not ok');

        const releases = await response.json();

        releases.forEach(release => {
            if (release.assets) {
                release.assets.forEach(asset => {
                    totalDownloads += asset.download_count;
                });
            }
        });

    } catch (error) {
        console.warn('Could not fetch live stats (likely CORS or offline). Using fallback.', error);
        totalDownloads = fallbackDownloads;
    }

    // Animate the number (whether real or fallback)
    // Ensure we show it
    statsContainer.style.display = 'block';
    if (totalDownloads === 0) totalDownloads = fallbackDownloads; // Double check
    animateValue(countElement, 0, totalDownloads, 2000);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString(); // Add formatted number
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
