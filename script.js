/**
 * Clove Dental - Interactive Landing Page Logic
 * Pure Vanilla JavaScript (No Frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCaptcha();
  initMobileDrawer();
  initBookingModals();
  initWhyCloveAccordion();
  initFaqAccordion();
  initCitySelector();
  initVideoModal();
  initLeadForms();
  initHeaderScroll();
});

// ==========================================================================
// 1. Dynamic Security Captcha Generator
// ==========================================================================
let currentCaptcha = '7114';

function generateRandomCaptcha() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function initCaptcha() {
  const captchaCodeElem = document.getElementById('hero-captcha-code');
  const captchaRefreshBtn = document.getElementById('hero-captcha-refresh');
  const captchaBadge = document.getElementById('hero-captcha-display');
  const stripCaptchaDisplay = document.getElementById('strip-captcha-display');

  function refresh() {
    currentCaptcha = generateRandomCaptcha();
    if (captchaCodeElem) captchaCodeElem.textContent = currentCaptcha;
    if (stripCaptchaDisplay) stripCaptchaDisplay.textContent = generateRandomCaptcha();
  }

  if (captchaRefreshBtn) {
    captchaRefreshBtn.addEventListener('click', refresh);
  }
  if (captchaBadge) {
    captchaBadge.addEventListener('click', refresh);
  }
}

// ==========================================================================
// 2. Mobile Drawer Navigation
// ==========================================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// ==========================================================================
// 3. Global Booking Modal with Pre-filled Services & Confirmation
// ==========================================================================
function initBookingModals() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close');
  const openButtons = document.querySelectorAll('.open-booking-btn');
  const modalServiceName = document.getElementById('modal-service-name');
  const modalServiceSelect = document.getElementById('modal-service');
  const modalFormContainer = document.getElementById('modal-form-container');
  const modalSuccessContainer = document.getElementById('modal-success-container');
  const successCloseBtn = document.getElementById('success-close-btn');
  const modalForm = document.getElementById('modal-appointment-form');
  const modalDateInput = document.getElementById('modal-date');

  // Set default appointment date to tomorrow
  if (modalDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    modalDateInput.value = tomorrow.toISOString().split('T')[0];
    modalDateInput.min = new Date().toISOString().split('T')[0];
  }

  function openModal(service) {
    const serviceTitle = service || 'Root Canal Treatment';
    if (modalServiceName) modalServiceName.textContent = serviceTitle;
    if (modalServiceSelect) {
      let matched = false;
      for (let i = 0; i < modalServiceSelect.options.length; i++) {
        if (modalServiceSelect.options[i].value.toLowerCase().includes(serviceTitle.toLowerCase())) {
          modalServiceSelect.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched && modalServiceSelect.options.length > 0) {
        modalServiceSelect.selectedIndex = 0;
      }
    }

    // Reset view to form
    if (modalFormContainer) modalFormContainer.style.display = 'block';
    if (modalSuccessContainer) modalSuccessContainer.style.display = 'none';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const treatment = btn.getAttribute('data-treatment') || 'Root Canal Treatment';
      openModal(treatment);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (successCloseBtn) successCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Modal Form Submission
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('modal-name');
      const phoneInput = document.getElementById('modal-phone');
      const citySelect = document.getElementById('modal-city');
      const serviceSelect = document.getElementById('modal-service');
      const nameError = document.getElementById('modal-name-error');
      const phoneError = document.getElementById('modal-phone-error');

      let isValid = true;

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter patient name.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      const phoneVal = phoneInput.value.trim().replace(/\D/g, '');
      if (phoneVal.length < 10) {
        phoneError.textContent = 'Please enter valid 10-digit mobile number.';
        isValid = false;
      } else {
        phoneError.textContent = '';
      }

      if (!isValid) return;

      // Populate Success Screen
      const randomRef = 'CLV-' + Math.floor(10000 + Math.random() * 90000);
      document.getElementById('success-ref-id').textContent = randomRef;
      document.getElementById('success-name-display').textContent = nameInput.value.trim();
      document.getElementById('success-service-display').textContent = serviceSelect.value;
      document.getElementById('success-city-display').textContent = citySelect.value;

      modalFormContainer.style.display = 'none';
      modalSuccessContainer.style.display = 'flex';
      showToast('Appointment booked successfully! Booking Ref: ' + randomRef, 'toast-success');
    });
  }
}

// ==========================================================================
// 4. "Why Choose Clove Dental" Interactive Accordion
// ==========================================================================
function initWhyCloveAccordion() {
  const items = document.querySelectorAll('.why-accordion-wrap .accordion-item');

  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Close all other items
      items.forEach(i => {
        i.classList.remove('active');
        const btn = i.querySelector('.accordion-trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isAlreadyActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==========================================================================
// 5. Frequently Asked Questions (FAQ) Accordion
// ==========================================================================
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const btn = card.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // Close other questions
      faqCards.forEach(c => {
        if (c !== card) {
          c.classList.remove('open');
          const otherBtn = c.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      if (isOpen) {
        card.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==========================================================================
// 6. "Find Us Across India" Interactive City Selector
// ==========================================================================
function initCitySelector() {
  const cityButtons = document.querySelectorAll('.city-btn');
  const showcaseCityLabel = document.getElementById('showcase-city-name');
  const showcaseDetail = document.getElementById('showcase-clinics-detail');

  const cityDetails = {
    'Delhi NCR': { label: 'Delhi NCR Region', details: '190 clinics open 7 days a week (9 AM - 9 PM)' },
    'Bangalore': { label: 'Bangalore Metro Region', details: '110 state-of-the-art clinics across Indiranagar, Whitefield, Koramangala & more' },
    'Mumbai': { label: 'Mumbai & Thane Region', details: '90 advanced clinics located in Bandra, Andheri, Powai, Thane & Navi Mumbai' },
    'Chennai': { label: 'Chennai City', details: '50 clinics equipped with digital dental radiology & certified specialists' },
    'Hyderabad': { label: 'Hyderabad & Secunderabad', details: '70 modern clinics across Banjara Hills, Hitec City, Gachibowli & Jubilee Hills' },
    'Punjab': { label: 'Punjab & Chandigarh Tri-City', details: '25 clinics across Chandigarh, Mohali, Ludhiana, and Amritsar' },
    'Pune': { label: 'Pune City', details: '40 clinics located across Kothrud, Viman Nagar, Hinjewadi, and Wakad' },
    'Ahmedabad': { label: 'Ahmedabad & Gujarat', details: '25 clinics open 7 days a week with certified Endodontists' }
  };

  cityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cityButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cityName = btn.getAttribute('data-city');
      const data = cityDetails[cityName] || { label: cityName, details: 'Clinics open 7 days a week' };

      if (showcaseCityLabel) showcaseCityLabel.textContent = data.label;
      if (showcaseDetail) showcaseDetail.textContent = data.details;

      showToast(`Selected ${cityName} (${btn.getAttribute('data-clinics')} Clinics Available)`);
    });
  });
}

// ==========================================================================
// 7. Video Story Testimonial Modal & Case Studies
// ==========================================================================
function initVideoModal() {
  const videoModal = document.getElementById('video-modal');
  const videoCloseBtn = document.getElementById('video-modal-close');
  const storyCards = document.querySelectorAll('.story-card');
  const posterImg = document.getElementById('video-modal-poster');
  const titleElem = document.getElementById('video-modal-title');
  const descElem = document.getElementById('video-modal-desc');

  storyCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-video-title') || 'Patient Testimonial';
      const desc = card.getAttribute('data-video-desc') || 'Watch how Clove Dental provided painless treatment.';
      const thumb = card.querySelector('.story-img');

      if (titleElem) titleElem.textContent = title;
      if (descElem) descElem.textContent = desc;
      if (posterImg && thumb) posterImg.src = thumb.src;

      videoModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (videoCloseBtn) {
    videoCloseBtn.addEventListener('click', () => {
      videoModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Case Study buttons
  const caseButtons = document.querySelectorAll('.view-case-btn');
  caseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseName = btn.getAttribute('data-case');
      showToast(`Loading clinical case: ${caseName}`);
      setTimeout(() => {
        const modal = document.getElementById('booking-modal');
        const openBtn = document.querySelector('.open-booking-btn');
        if (openBtn) openBtn.click();
      }, 700);
    });
  });

  // Learn More Tech buttons
  const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
  learnMoreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tech = btn.getAttribute('data-tech');
      let msg = '10x Safety Sterilization Protocol';
      if (tech === 'cleanliness') msg = 'DORI AI-Enabled Hygienic Dental Chair';
      if (tech === 'aips') msg = 'AIPS Microscopic Canal Mapping Technology';
      showToast(`Selected ${msg}`);
      setTimeout(() => {
        const openBtn = document.querySelector('.open-booking-btn');
        if (openBtn) openBtn.click();
      }, 600);
    });
  });
}

// ==========================================================================
// 8. Lead Capture Forms Validation & Feedback
// ==========================================================================
function initLeadForms() {
  // Hero Form
  const heroForm = document.getElementById('hero-consultation-form');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('hero-name');
      const phoneInput = document.getElementById('hero-phone');
      const captchaInput = document.getElementById('hero-captcha');
      const nameError = document.getElementById('hero-name-error');
      const phoneError = document.getElementById('hero-phone-error');
      const captchaError = document.getElementById('hero-captcha-error');

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your full name.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      // Validate phone
      const phoneVal = phoneInput.value.trim().replace(/\D/g, '');
      if (phoneVal.length < 10) {
        phoneError.textContent = 'Please enter a valid 10-digit mobile number.';
        isValid = false;
      } else {
        phoneError.textContent = '';
      }

      // Validate captcha
      if (captchaInput.value.trim() !== currentCaptcha) {
        captchaError.textContent = `Captcha code did not match (${currentCaptcha}).`;
        isValid = false;
      } else {
        captchaError.textContent = '';
      }

      if (!isValid) return;

      // Success
      const randomRef = 'CLV-' + Math.floor(10000 + Math.random() * 90000);
      showToast(`Consultation request submitted! Reference: ${randomRef}`, 'toast-success');
      heroForm.reset();
      currentCaptcha = generateRandomCaptcha();
      const codeElem = document.getElementById('hero-captcha-code');
      if (codeElem) codeElem.textContent = currentCaptcha;

      // Open booking confirmation modal
      const modal = document.getElementById('booking-modal');
      const modalFormContainer = document.getElementById('modal-form-container');
      const modalSuccessContainer = document.getElementById('modal-success-container');
      document.getElementById('success-ref-id').textContent = randomRef;
      document.getElementById('success-name-display').textContent = nameInput.value.trim() || 'Patient';
      document.getElementById('success-service-display').textContent = 'Painless Root Canal Consultation';
      document.getElementById('success-city-display').textContent = 'Delhi NCR';

      modalFormContainer.style.display = 'none';
      modalSuccessContainer.style.display = 'flex';
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Strip Form
  const stripForm = document.getElementById('strip-booking-form');
  if (stripForm) {
    stripForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('strip-name').value.trim();
      const phone = document.getElementById('strip-phone').value.trim();

      if (!name || phone.length < 10) {
        showToast('Please provide your name and 10-digit phone number.');
        return;
      }

      const randomRef = 'CLV-' + Math.floor(10000 + Math.random() * 90000);
      showToast(`Appointment Request Received! Reference: ${randomRef}`, 'toast-success');
      stripForm.reset();
    });
  }
}

// ==========================================================================
// 9. Sticky Header Elevation on Scroll
// ==========================================================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 4px 20px rgba(70, 37, 26, 0.08)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
    }
  });
}

// ==========================================================================
// 10. Floating Toast Notification Utility
// ==========================================================================
function showToast(message, typeClass = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${typeClass}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3600);
}
