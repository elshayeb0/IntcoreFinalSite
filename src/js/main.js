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

  // Timeline component logic lives in about.html via Glide (src/js/timeline.js).

  
  
});
