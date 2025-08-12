import "../css/style.css";
import "../css/timeline.css"; // Import the timeline styles

document.addEventListener("DOMContentLoaded", () => {
  console.log("Professional environment is live. Reusable scripts loaded.");
  
document.addEventListener("DOMContentLoaded", function() {
  Timeline("#company-timeline .timeline", [
    {
      year: 2014,
      title: "Startup Launch",
      text: "Intcore began as a dream and evolved into a real business with a fresh approach. We started as a web development and video production company with a small team and limited budget, committed to delivering quality from day one."
    },
    {
      year: 2015,
      title: "Rapid Growth",
      text: "Expanded our services to mobile app development, gained major clients, and tripled our revenue in under a year."
    },
    {
      year: 2016,
      title: "International Expansion",
      text: "Opened our first overseas office and began serving clients in Europe and the Middle East."
    }
  ]);
});

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

  // NAVIGATION DROPDOWN CLICK TOGGLE

  const navDropdowns = document.querySelectorAll(".nav-dropdown");

  navDropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      // Close other open dropdowns
      navDropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("open");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("open");
    });
  });

  // Close dropdowns on outside click (safe: avoid non-standard closestAll)
  document.addEventListener("click", (e) => {
    const insideDropdown = e.target.closest(".nav-dropdown");
    if (!insideDropdown) {
      navDropdowns.forEach((dropdown) => dropdown.classList.remove("open"));
    }
  });

  // Close dropdowns on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navDropdowns.forEach((dropdown) => dropdown.classList.remove("open"));
    }
  });

  // =======================================================
  // COMPONENT: COMPANY YEARLY TIMELINE (about.html)
  // =======================================================
  const timelineRoot = document.querySelector("#company-timeline .timeline");
  if (timelineRoot) {
    const tabs = timelineRoot.querySelector(".timeline-tabs");
    const panel = document.getElementById("timeline-panel");

    // Data model: edit freely to change content
    const achievements = [
      {
        year: 2014,
        title: "Startup Launch",
        desc:
          "Intcore began as Eslam Ramadan’s dream and has evolved into a real business with a fresh approach. We started as a web development and video production company in the Greek Campus with just two employees and a limited budget of $3,000. Then, Intcore began to be recognized as one of the fastest developers and video producers, consistently delivering projects of the highest quality.",
      },
      {
        year: 2015,
        title: "Startup Growth",
        desc:
          "Intcore rapidly grew, achieving early milestones. The team resolved an emergency issue for CBC after several vendors had failed, leading to new opportunities including a website and a Facebook app for the global brand Tecno Mobile.",
      },
      {
        year: 2016,
        title: "Company Expansion",
        desc:
          "Our Greek Campus office could no longer contain our ambitions, so we moved to Dokki. In the same year, Intcore exhibited at GITEX for the first time—our first step toward entering the global market.",
      },
      {
        year: 2017,
        title: "Go Global",
        desc:
          "We kept growing stronger and broadened our footprint in the GCC region by establishing many successful partnerships, starting with the UAE and KSA.",
      },
      {
        year: 2018,
        title: "New Challenge",
        desc:
          "Pushing beyond our comfort zone, we launched Treffen, an event management product handling tickets, attendees, and organizers. We also moved to a larger office on the Maadi Nile Corniche to support our expanding team.",
      },
      {
        year: 2019,
        title: "GCC Office",
        desc:
          "Following product successes, we opened our Dubai branch to better support the GCC region—strengthening our Middle East presence and enabling closer relationships with customers.",
      },
      {
        year: 2020,
        title: "Resilience",
        desc:
          "Strengthened remote-first delivery, streamlined collaboration, and ensured reliability across global engagements.",
      },
      {
        year: 2021,
        title: "Scaling Up",
        desc:
          "Scaled teams and products while enhancing our cloud and DevOps foundations to deliver faster with higher quality.",
      },
      {
        year: 2022,
        title: "Recognition",
        desc:
          "Expanded our enterprise portfolio and received regional recognition, forging deeper partnerships across industries.",
      },
      {
        year: 2023,
        title: "Innovation",
        desc:
          "Introduced AI-powered capabilities and automation to elevate customer experiences and operational efficiency.",
      },
      {
        year: 2024,
        title: "Beyond",
        desc:
          "Continuing sustainable growth with global partners while staying committed to measurable business outcomes.",
      },
    ];

    const state = { index: 0 };

    const handleKeyNav = (e) => {
      const { key } = e;
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) {
        e.preventDefault();
      }
      if (key === "ArrowRight") setIndex(Math.min(achievements.length - 1, state.index + 1));
      if (key === "ArrowLeft") setIndex(Math.max(0, state.index - 1));
      if (key === "Home") setIndex(0);
      if (key === "End") setIndex(achievements.length - 1);
    };

    function renderPills() {
      tabs.innerHTML = "";
      achievements.forEach((item, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "timeline-pill";
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", idx === state.index ? "true" : "false");
        btn.setAttribute("tabindex", idx === state.index ? "0" : "-1");
        btn.dataset.index = String(idx);
        btn.textContent = String(item.year);
        btn.addEventListener("click", () => setIndex(idx));
        btn.addEventListener("keydown", handleKeyNav);
        tabs.appendChild(btn);
      });
      updateActivePill();
    }

    function cardMarkup(item) {
      return `
        <div class="timeline-card grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8 items-stretch">
          <div class="timeline-card-left bg-accent text-white rounded-2xl p-8 flex items-center justify-between">
            <div class="timeline-year-vertical text-3xl font-bold select-none">${item.year}</div>
            <div class="timeline-card-title text-2xl md:text-3xl font-semibold">${item.title}</div>
          </div>
          <div class="timeline-card-content text-gray-800 text-lg leading-relaxed">
            ${item.desc}
          </div>
        </div>
      `;
    }

    function renderPanel() {
      panel.innerHTML = cardMarkup(achievements[state.index]);
      requestAnimationFrame(() => {
        const card = panel.querySelector(".timeline-card");
        if (card) card.classList.add("show");
      });
    }

    function updateActivePill() {
      const pills = tabs.querySelectorAll(".timeline-pill");
      pills.forEach((pill, idx) => {
        if (idx === state.index) {
          pill.classList.add("active");
          pill.setAttribute("aria-selected", "true");
          pill.setAttribute("tabindex", "0");
          pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        } else {
          pill.classList.remove("active");
          pill.setAttribute("aria-selected", "false");
          pill.setAttribute("tabindex", "-1");
        }
      });
    }

    function setIndex(idx) {
      if (idx < 0 || idx >= achievements.length || idx === state.index) return;
      state.index = idx;
      updateActivePill();
      renderPanel();
    }

    // Initialize
    renderPills();
    renderPanel();
  }
});
