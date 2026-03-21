// ===========================
// MOBILE MENU TOGGLE
// ===========================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLL & ACTIVE NAV
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.style.animation;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ===========================
// CTA BUTTON SCROLL
// ===========================
const ctaButton = document.getElementById('ctaButton');
ctaButton.addEventListener('click', () => {
    document.getElementById('pricing').scrollIntoView({
        behavior: 'smooth'
    });
});

// ===========================
// FORM VALIDATION & SUBMISSION
// ===========================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 9;
};

const clearFormErrors = () => {
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
        const errorMsg = group.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.classList.remove('show');
        }
    });
};

const showFormError = (fieldName, message) => {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest('.form-group');
    const errorElement = document.getElementById(fieldName + 'Error');

    formGroup.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors();
    formFeedback.classList.remove('success', 'error');
    formFeedback.textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        showFormError('name', 'Name must be at least 2 characters');
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
        showFormError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate phone
    if (!validatePhone(phone)) {
        showFormError('phone', 'Please enter a valid phone number');
        isValid = false;
    }

    // Validate message
    if (message.length < 10) {
        showFormError('message', 'Message must be at least 10 characters');
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            formFeedback.classList.add('success');
            formFeedback.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';

            // Reset form
            contactForm.reset();

            // Re-enable button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Clear feedback after 5 seconds
            setTimeout(() => {
                formFeedback.classList.remove('success');
                formFeedback.textContent = '';
            }, 5000);
        }, 1500);
    }
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(255, 107, 53, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===========================
// PRICING BUTTON INTERACTIONS
// ===========================
document.querySelectorAll('.pricing-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const planName = btn.closest('.pricing-card').querySelector('h3').textContent;
        showNotification(`${planName} plan selected! Redirecting to membership...`);
    });
});

// ===========================
// CLASS CARDS CLICK FEEDBACK
// ===========================
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('click', () => {
        const className = card.querySelector('h3').textContent;
        showNotification(`Interested in ${className}? Check our schedule for available classes!`);
    });
});

// ===========================
// UTILITY: NOTIFICATION TOAST
// ===========================
function showNotification(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #ff6b35, #ff8555);
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
        max-width: 300px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast animations
if (!document.querySelector('style[data-toast-animations]')) {
    const style = document.createElement('style');
    style.setAttribute('data-toast-animations', 'true');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===========================
// LAZY LOAD IMAGES (IF USED)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// PARALLAX EFFECT (OPTIONAL)
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// PERFORMANCE: DEBOUNCE FUNCTION
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// CONTACT SECTION CTA
// ===========================
document.querySelectorAll('.trainer-card').forEach(card => {
    card.addEventListener('click', () => {
        const trainerName = card.querySelector('h3').textContent;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// ===========================
// ACCESSIBILITY: FOCUS MANAGEMENT
// ===========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
    }
});

// ===========================
// PAGE LOAD ANIMATION
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial state
if (document.readyState === 'loading') {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-out';
} else {
    document.body.style.opacity = '1';
}

// ===========================
// DYNAMIC YEAR IN FOOTER
// ===========================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.textContent = footerText.textContent.replace('2024', currentYear.toString());
}

// ===========================
// INITIALIZATION
// ===========================
console.log('FitZone BCN - Premium Gym Website Loaded');
