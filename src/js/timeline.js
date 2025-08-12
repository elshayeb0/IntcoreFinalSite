document.addEventListener("DOMContentLoaded", function () {
  const timelineData = [
    { year: 2014, title: "Startup Launch", description: "Intcore began as Eslam Ramadan's dream and has evolved into a real business with a fresh approach. We started as a web development and video production company in the Greek Campus with just two employees and a limited budget of $3,000. Then, Intcore began to be recognized as one of the fastest developers and video producers, consistently delivering projects of the highest quality."},
    { year: 2015, title: "Rapid Growth", description: "Intcore rapidly grew, and by 2015, we achieved one of our first major milestones. On short notice, our team worked tirelessly to resolve an emergency issue for CBC, a popular Egyptian TV channel, after several large companies had let them down. This success led to further opportunities, including a deal to develop a website for CBC and, shortly after, creating a Facebook app for the global brand Techno Mobile." },
    { year: 2016, title: "International Expansion", description: "As our Greek Campus office became too small for Intcore's dreams, we packed up our memories, successes, and talented team and moved to Dokki. In the same year, Intcore exhibited at GITEX for the first time, one of the biggest technology events in the world. This marked our first step toward entering the global market." },
    { year: 2017, title: "Go Global", description: "Intcore continued to grow bigger and better, welcoming new team members along the way. As our numbers increased, so did our scope of work. By attending events like GITEX, we began to establish a foothold in the GCC region. In 2017 alone, we established many successful partnerships with companies across the Gulf, starting with the UAE and KSA."},
    { year: 2018, title: "New Challenge", description: "As we are always seeking to move beyond our comfort zone, we decided to pursue more opportunities. Following our vision, we developed a new product, Treffen, an event management solution that handles tickets, attendees, organizers, and more. As our team and scope expanded, we moved to a larger office on the Maadi Nile Corniche, offering an amazing view of the Nile." },
    { year: 2019, title: "GCC Office", description: "Following the successful launch of Intcore's products in 2018, we continued to grow and decided to open our Dubai branch to better support the GCC region. This expansion allows Intcore to strengthen its presence in the Middle East. The Dubai office helps us maintain close relationships with our customers, enabling in-person meetings that facilitate efficient, long-term communication." },
    { year: 2020, title: "COVID-19 Pandemic Growth", description: "While the global economic dynamics took a heavy toll due to the COVID-19 pandemic, Intcore continued to rise against the odds. Not only did we maintain our talented team and an ongoing stream of projects, but we also secured our first major governmental project in the UAE with the NSTI Festival." },
    { year: 2021, title: "Serving Global Brands", description: "In 2021, Intcore experienced rapid expansion across multiple industries in record time. We developed unique solutions for the SODIC Community App and First Abu Dhabi Bank, and our projects grew at lightning speed. Simultaneously, the Intcore family welcomed new members who share our passion and drive, bringing fresh perspectives as we transitioned into our next big milestone." },
    { year: 2022, title: "Continious Growing Global", description: "Intcore continues to grow by serving several global brands and government entities, including the Ministry of Telecommunications Egypt, EC-Council, First Abu Dhabi Bank, Audi Bank, and Mountain View. Additionally, we are expanding our customer base to include countries such as the USA, Qatar, and Kuwait." },
    { year: 2023, title: "Supporting Start-ups", description: "In 2023, we focused on supporting local startups with our expertise to help them grow quickly, just as we did. We celebrated many success stories with well-known apps like Fastrak, Click Cash, Create App, Swappy, Cindbad, Hihome, and Zollars. Additionally, we launched a new CMS for corporate websites and partnered with Solevato as an alumni channel ticketing app." },
    { year: 2024, title: "Continious Growth and Expansion", description: "In 2024, intcore achieved remarkable growth, expanding our operations to Kuwait and welcoming new passionate talents to our team. As part of this years milestones, we proudly collaborated with the renowned Al-Ahly sporting club to devlop their mobile application. We continue to deliver cutting-edge solutions." }
  ];

  const slidesContainer = document.getElementById("timeline-slides");
  const bulletsContainer = document.getElementById("timeline-bullets");

  timelineData.forEach((item, index) => {
    // Slide
    const slide = document.createElement("li");
    slide.className = "glide__slide opacity-0 transition-opacity duration-500";
    slide.innerHTML = `
      <div class="timeline-card grid grid-cols-1 md:grid-cols-[160px,1fr] gap-8 items-stretch">
        <div class="timeline-card-left bg-gradient-to-b from-accent to-accent-dark text-white rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-lg">
          <div class="timeline-year text-3xl font-extrabold mb-1">${item.year}</div>
          <div class="timeline-card-title text-xs font-medium text-white/80">${item.title}</div>
        </div>
        <div class="timeline-card-content text-gray-800 text-lg leading-relaxed flex items-center">
          ${item.description}
        </div>
      </div>
    `;
    slidesContainer.appendChild(slide);

    // Year pill
    const bullet = document.createElement("button");
    bullet.className = "glide__bullet px-5 py-2 rounded-full bg-gray-200 hover:bg-accent hover:text-white transition text-base font-semibold relative";
    bullet.setAttribute("data-glide-dir", `=${index}`);
    bullet.textContent = item.year;

    // Connecting line effect (using pseudo-element)
    bullet.style.position = "relative";
    bulletsContainer.appendChild(bullet);
  });

  const glide = new Glide(".glide", {
    type: "slider",
    perView: 1,
    gap: 30,
    animationDuration: 500
  });

  // Fade animation on slide change
  glide.on(["mount.after", "run.after"], () => {
    document.querySelectorAll(".glide__slide").forEach((slide, i) => {
      slide.style.opacity = i === glide.index ? "1" : "0";
    });
  });

  glide.mount();
});