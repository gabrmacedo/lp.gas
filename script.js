/* ===================================================================
   GÁS JÁ — Landing Page Script
   Brex Single-Ember Design System
   =================================================================== */

// Configuration object - easy to customize
const CONFIG = {
    whatsappNumber: '5511999999999', // Replace with actual WhatsApp number
    telefone: '(11) 9999-9999',
    endereco: 'Rua Exemplo, 123 - São Paulo, SP',
    horarioAtendimento: 'Seg-Dom: 8h às 20h',
    anosAtividade: '5+ anos',
    areaAtendimento: 'Zona Sul de São Paulo',
    regiaoDeEntrega: 'Zona Sul, Zona Oeste e Centro',
    instagramLink: 'https://instagram.com/gasja',
    facebookLink: 'https://facebook.com/gasja'
};

// ===== Initialize on DOM Load =====
document.addEventListener('DOMContentLoaded', () => {
    initCompanyData();
    initMenuToggle();
    initFAQ();
    initAllButtons();
    initWhatsAppFloat();
    initMobileCta();
});

// ===== Company Data Population =====
function initCompanyData() {
    // About section
    const companyYearsEl = document.getElementById('companyYears');
    if (companyYearsEl) companyYearsEl.textContent = CONFIG.anosAtividade;

    const companyRegionEl = document.getElementById('companyRegion');
    if (companyRegionEl) companyRegionEl.textContent = CONFIG.areaAtendimento;

    // Location section
    const companyAddressEl = document.getElementById('companyAddress');
    if (companyAddressEl) companyAddressEl.textContent = CONFIG.endereco;

    const companyPhoneEl = document.getElementById('companyPhone');
    if (companyPhoneEl) companyPhoneEl.textContent = CONFIG.telefone;

    const companyHoursEl = document.getElementById('companyHours');
    if (companyHoursEl) companyHoursEl.textContent = CONFIG.horarioAtendimento;

    // FAQ
    const faqRegionEl = document.getElementById('faqRegion');
    if (faqRegionEl) faqRegionEl.textContent = CONFIG.regiaoDeEntrega;

    // Footer
    const footerPhoneEl = document.getElementById('footerPhone');
    if (footerPhoneEl) footerPhoneEl.textContent = `📞 ${CONFIG.telefone}`;

    const footerWhatsappEl = document.getElementById('footerWhatsapp');
    if (footerWhatsappEl) footerWhatsappEl.textContent = `💬 ${CONFIG.telefone}`;
}

// ===== Mobile Menu Toggle =====
function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const headerNav = document.querySelector('.header-nav');
    
    if (!menuToggle || !headerNav) return;

    menuToggle.addEventListener('click', () => {
        headerNav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
            menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.header-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            headerNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ===== FAQ Accordion =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        if (!button) return;

        button.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ===== WhatsApp Integration =====
function openWhatsApp(mensagem = '') {
    const message = mensagem || 'Olá! Gostaria de fazer um pedido de botijão de gás.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ===== Button Initialization =====
function initAllButtons() {
    // Header button
    const btnCtaHeader = document.getElementById('btnCtaHeader');
    if (btnCtaHeader) {
        btnCtaHeader.addEventListener('click', () => openWhatsApp());
    }

    // Hero primary button
    const btnHeroPrimary = document.getElementById('btnHeroPrimary');
    if (btnHeroPrimary) {
        btnHeroPrimary.addEventListener('click', () => openWhatsApp());
    }

    // Product buttons
    const productButtons = document.querySelectorAll('.btn-product');
    productButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const produto = e.target.getAttribute('data-produto');
            const mensagem = `Olá! Gostaria de fazer um pedido de botijão ${produto}. Poderia me informar o valor, disponibilidade e prazo de entrega?`;
            openWhatsApp(mensagem);
        });
    });

    // Contact buttons
    const btnContactWhatsapp = document.getElementById('btnContactWhatsapp');
    if (btnContactWhatsapp) {
        btnContactWhatsapp.addEventListener('click', () => openWhatsApp());
    }

    const btnContactPhone = document.getElementById('btnContactPhone');
    if (btnContactPhone) {
        btnContactPhone.addEventListener('click', () => {
            window.location.href = `tel:${CONFIG.telefone.replace(/\D/g, '')}`;
        });
    }

    // CTA Final button
    const btnCtaFinal = document.getElementById('btnCtaFinal');
    if (btnCtaFinal) {
        btnCtaFinal.addEventListener('click', () => openWhatsApp());
    }
}

// ===== WhatsApp Float Button =====
function initWhatsAppFloat() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (!whatsappFloat) return;

    whatsappFloat.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp();
    });

    whatsappFloat.href = `javascript:void(0)`;
}

// ===== Mobile CTA Bar =====
function initMobileCta() {
    const btnMobileCta = document.getElementById('btnMobileCta');
    if (btnMobileCta) {
        btnMobileCta.addEventListener('click', () => openWhatsApp());
    }
}

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Keyboard accessibility =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const headerNav = document.querySelector('.header-nav');
        const menuToggle = document.getElementById('menuToggle');
        if (headerNav && headerNav.classList.contains('active')) {
            headerNav.classList.remove('active');
            menuToggle?.setAttribute('aria-expanded', 'false');
        }
    }
});

