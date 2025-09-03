document.addEventListener("DOMContentLoaded", () => {
  console.log("Professional environment is live. Reusable scripts loaded.");
  
  // ON-SCROLL REPEATING ANIMATION SYSTEM
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // This is the key change:
        if (entry.isIntersecting) {
          // If the element is in the viewport, add the 'is-visible' class to trigger the animation.
          entry.target.classList.add("is-visible");
        } else {
          // If the element is NOT in the viewport, remove the class to reset the animation.
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the card is visible
    }
  );

  // Select all cards you want to animate and tell the observer to watch them.
  const cardsToAnimate = document.querySelectorAll(".animate-card");
  cardsToAnimate.forEach((card) => {
    observer.observe(card);
  });

  const header = document.getElementById("header");
  const scrollThreshold = 50;

  const handleHeaderScroll = () => {
    if (header && window.scrollY > scrollThreshold) {
      header.classList.add("header-scrolled");
    } else if (header) {
      header.classList.remove("header-scrolled");
    }
  };

  window.addEventListener("scroll", handleHeaderScroll);

  // =======================================================
  // REUSABLE MODAL SYSTEM v1.0
  // =======================================================

  // 1. Find all buttons that are designated to open a modal
  const openModalButtons = document.querySelectorAll("[data-modal-target]");

  // 2. Find all buttons that are designated to close a modal
  const closeModalButtons = document.querySelectorAll(".modal-close-btn");

  // Function to open a modal
  const openModal = (modal) => {
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  };

  // Function to close a modal
  const closeModal = (modal) => {
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  // Add a click event listener to each "open" button
  openModalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      // Find the modal ID from the button's data-modal-target attribute
      const modalId = button.dataset.modalTarget;
      const modal = document.querySelector(modalId);
      openModal(modal);
    });
  });

  // Add a click event listener to each "close" button
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the closest parent modal and close it
      const modal = button.closest(".fixed.inset-0");
      closeModal(modal);
    });
  });

  // Add a click event listener to the window to close modals on backdrop click
  window.addEventListener("click", (event) => {
    // Check if the clicked element has the classes of our modal backdrop
    if (event.target.matches(".fixed.inset-0")) {
      closeModal(event.target);
    }
  });

  // (Hover-based dropdowns are handled via CSS in HTML; no JS toggle required.)

  // =======================================================
  // MOBILE MENU TOGGLE
  // =======================================================
  const mobileMenuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const bodyEl = document.body;

  if (mobileMenuBtn && mobileMenu) {
    const toggleMobileMenu = () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        bodyEl.classList.add("overflow-hidden");
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        bodyEl.classList.remove("overflow-hidden");
      }
    };

    mobileMenuBtn.addEventListener("click", toggleMobileMenu);

    // Close when clicking any mobile nav link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        bodyEl.classList.remove("overflow-hidden");
      });
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
        bodyEl.classList.remove("overflow-hidden");
      }
    });
  }

  // =======================================================
  // SIMPLE ACCORDION (data-accordion)
  // =======================================================
  document.querySelectorAll('[data-accordion]').forEach((root) => {
    // Ensure everything is closed by default on first load
    const initTriggers = root.querySelectorAll('.accordion-trigger');
    initTriggers.forEach((btn) => {
      const panelId = btn.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      btn.setAttribute('aria-expanded', 'false');
      btn.classList.remove('bg-accent','text-white');
      btn.classList.add('bg-white','text-gray-900');
      btn.querySelector('.accordion-bullet')?.classList.remove('bg-white','ring-2','ring-white/40');
      btn.querySelector('.accordion-bullet')?.classList.add('bg-gray-300');
      btn.querySelector('.caret')?.classList.remove('rotate-180');
      if (panel) {
        panel.classList.add('accordion-panel','closed');
        panel.classList.remove('open');
      }
    });

    root.addEventListener('click', (e) => {
      const btn = e.target.closest('.accordion-trigger');
      if (!btn || !root.contains(btn)) return;
      const panelId = btn.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all siblings (one-open behavior)
      root.querySelectorAll('.accordion-trigger').forEach((otherBtn) => {
        if (otherBtn === btn) return;
        const otherPanelId = otherBtn.getAttribute('aria-controls');
        const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
        otherBtn.setAttribute('aria-expanded', 'false');
        otherBtn.classList.remove('bg-accent','text-white');
        otherBtn.classList.add('bg-white','text-gray-900');
        otherBtn.querySelector('.accordion-bullet')?.classList.remove('bg-white','ring-2','ring-white/40');
        otherBtn.querySelector('.accordion-bullet')?.classList.add('bg-gray-300');
        otherBtn.querySelector('.caret')?.classList.remove('rotate-180');
        if (otherPanel) {
          otherPanel.classList.remove('open');
          otherPanel.classList.add('closed');
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        btn.classList.add('bg-accent','text-white');
        btn.classList.remove('bg-white','text-gray-900');
        btn.querySelector('.accordion-bullet')?.classList.remove('bg-gray-300');
        btn.querySelector('.accordion-bullet')?.classList.add('bg-white','ring-2','ring-white/40');
        btn.querySelector('.caret')?.classList.add('rotate-180');
        if (panel) { panel.classList.remove('closed'); panel.classList.add('open'); }
      } else {
        btn.classList.remove('bg-accent','text-white');
        btn.classList.add('bg-white','text-gray-900');
        btn.querySelector('.accordion-bullet')?.classList.remove('bg-white','ring-2','ring-white/40');
        btn.querySelector('.accordion-bullet')?.classList.add('bg-gray-300');
        btn.querySelector('.caret')?.classList.remove('rotate-180');
        if (panel) { panel.classList.remove('open'); panel.classList.add('closed'); }
      }
    });
  });

  // Timeline component logic lives in about.html via Glide (src/js/timeline.js).

  // =======================================================
  // TESTIMONIALS SLIDER (dependency-free) with fade + dots
  // =======================================================
  (function initTestimonials(){
    const track = document.getElementById('ts-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.testimonial-slide'));
    const dotsWrap = document.getElementById('ts-dots');
    const prevBtn = document.getElementById('ts-prev');
    const nextBtn = document.getElementById('ts-next');
    const viewport = track.parentElement; // .ts-viewport
    let index = 0;
    let autoTimer = null;

    // Build dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Go to review ${i + 1}`);
      b.className = 'ts-dot w-3 h-3 rounded-full';
      b.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(b);
    });

    function update() {
      // Update slide active state (for cross-fade)
      slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
      // Update dots
      Array.from(dotsWrap.children).forEach((b, i) => {
        b.classList.toggle('is-active', i === index);
        b.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
      // Adjust viewport height to match active slide
      if (viewport) {
        const active = slides[index];
        // Temporarily ensure active slide is visible to measure
        const h = active.scrollHeight;
        viewport.style.height = h + 'px';
      }
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    // Controls
    prevBtn?.addEventListener('click', () => goTo(index - 1));
    nextBtn?.addEventListener('click', () => goTo(index + 1));

    // Keyboard navigation (global, avoids focus ring on container)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
    });

    // Auto-advance with hover pause
    function startAuto(){ stopAuto(); autoTimer = setInterval(() => goTo(index + 1), 6000); }
    function stopAuto(){ if (autoTimer) clearInterval(autoTimer); }
    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', startAuto);

    // Touch / pointer swipe (mobile-friendly)
    let startX = 0, startY = 0, isDown = false;
    const SWIPE_THRESHOLD = 40; // px

    const onPointerDown = (e) => {
      isDown = true;
      startX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
      startY = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0;
    };
    const onPointerMove = (e) => {
      if (!isDown) return;
      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
      const y = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0;
      const dx = x - startX;
      const dy = y - startY;
      // Only act on mostly-horizontal swipes
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        isDown = false;
        if (dx < 0) { goTo(index + 1); } else { goTo(index - 1); }
      }
    };
    const onPointerUp = () => { isDown = false; };

    const target = viewport || track;
    // Prefer Pointer Events; fallback to touch
    if (window.PointerEvent) {
      target.addEventListener('pointerdown', onPointerDown, { passive: true });
      target.addEventListener('pointermove', onPointerMove, { passive: true });
      target.addEventListener('pointerup', onPointerUp, { passive: true });
      target.addEventListener('pointercancel', onPointerUp, { passive: true });
      target.addEventListener('pointerleave', onPointerUp, { passive: true });
    } else {
      target.addEventListener('touchstart', onPointerDown, { passive: true });
      target.addEventListener('touchmove', onPointerMove, { passive: true });
      target.addEventListener('touchend', onPointerUp, { passive: true });
      target.addEventListener('touchcancel', onPointerUp, { passive: true });
    }

    // Init
    // Ensure first slide visible state and height
    requestAnimationFrame(() => {
      slides[0]?.classList.add('is-active');
      update();
      startAuto();
    });
  })();

  // === Promises full-screen spread on scroll ===
(() => {
  const section = document.getElementById('promises');
  const card = document.getElementById('promises-card');
  if (!section || !card) return;

  // Start expanded on first paint
  card.classList.add('promises-card--fullscreen');

  let lastY = window.scrollY;

  const io = new IntersectionObserver(([entry]) => {
    const ratio = entry.intersectionRatio;
    const down = window.scrollY > lastY;
    lastY = window.scrollY;

    // Collapse when we actually enter the section while scrolling down
    if (entry.isIntersecting && down && ratio > 0.35) {
      card.classList.remove('promises-card--fullscreen');
      return;
    }
    // Re-open when section is out of view and user scrolls up toward it
    if (!entry.isIntersecting && !down) {
      card.classList.add('promises-card--fullscreen');
    }
  }, { threshold: [0, 0.35, 0.6, 1] });

  io.observe(section);

  // Fallback for fast scroll
  window.addEventListener('scroll', () => {
    const r = section.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const down = window.scrollY > lastY;
    lastY = window.scrollY;

    if (r.top < vh * 0.4 && r.bottom > vh * 0.6 && down) {
      card.classList.remove('promises-card--fullscreen');
    }
    if (r.top > vh && !down) {
      card.classList.add('promises-card--fullscreen');
    }
  }, { passive: true });
})();

  // =======================================================
  // Phone inputs: intl-tel-input (self-hosted, no CDN calls)
  // =======================================================
  function setupIntlTelInputs(){
    const inputs = Array.from(document.querySelectorAll('.js-intl-tel'));
    if (!window.intlTelInput || !inputs.length) return;

    // Load local utils once. No external requests.
    if (window.intlTelInputGlobals && window.intlTelInputGlobals.loadUtils) {
      // best-effort; do not block init
      window.intlTelInputGlobals.loadUtils('/vendor/phone/utils.js').catch(() => {});
    }

    const instances = new Map();

    inputs.forEach((input) => {
      const iti = window.intlTelInput(input, {
        separateDialCode: true,
        preferredCountries: ['ae','eg','sa','us','gb'],
        // Avoid GeoIP and any network requests in dev; set a sane default
        initialCountry: 'eg',
        nationalMode: false,
        // NOTE: no utilsScript here; we load it once above
      });
      instances.set(input, iti);

      // Ensure hidden full number field exists next to each input
      let hidden = input.parentElement?.querySelector('.js-intl-tel-full');
      if (!hidden) {
        hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = 'phone_full';
        hidden.className = 'js-intl-tel-full';
        input.insertAdjacentElement('afterend', hidden);
      }
    });
    console.log(`[intl-tel-input] initialized on ${inputs.length} input(s).`);

    // Validate and capture on submit (per form)
    document.querySelectorAll('form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        const formPhones = Array.from(form.querySelectorAll('.js-intl-tel'));
        if (!formPhones.length) return;

        let invalidFound = false;
        formPhones.forEach((input) => {
          const iti = instances.get(input);
          if (!iti) return;

          const hidden = input.parentElement?.querySelector('.js-intl-tel-full');
          if (hidden) hidden.value = iti.getNumber(); // E.164

          // If utils loaded we can validate; if not, skip validation
          if (window.intlTelInputGlobals?.loadedUtils && !iti.isValidNumber()) {
            invalidFound = true;
            input.setCustomValidity('Please enter a valid phone number.');
            input.reportValidity();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            input.focus({ preventScroll: true });
          } else {
            input.setCustomValidity('');
          }
        });

        if (invalidFound) {
          e.preventDefault();
        }
      });
    });
  }

  // Initialize using self-hosted files only. No CDN fallback logic.
  try {
    if (window.intlTelInput) {
      setupIntlTelInputs();
    } else {
      console.warn('[intl-tel-input] library missing. Check /vendor paths.');
    }
  } catch (err) {
    console.error('[intl-tel-input] init error:', err);
  }

});
