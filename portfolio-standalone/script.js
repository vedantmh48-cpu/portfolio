/* ============================================================
   VEDANT — CREATIVE DEVELOPER PORTFOLIO
   Client-side interactions & animations
   ============================================================ */

/* ---------- Helpers ---------- */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const isTouchDevice = window.matchMedia(
  "(hover: none), (pointer: coarse)"
).matches;

/* ---------- Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Custom Cursor (desktop only) ---------- */
if (!isTouchDevice) {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const label = document.getElementById("cursorLabel");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let rafId;

  // Start centered so it's visible immediately
  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
  ring.style.left = ringX + "px";
  ring.style.top = ringY + "px";

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  // Detect hoverable elements to expand the cursor
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest(
      "[data-cursor='view'] , [data-cursor='button'], a, button, .btn"
    );
    if (target) {
      ring.classList.add("is-hovering");
      label.textContent = target.hasAttribute("data-cursor")
        ? target.getAttribute("data-cursor") === "view"
          ? "View"
          : "Open"
        : "";
    } else {
      ring.classList.remove("is-hovering");
      label.textContent = "";
    }
  });

  // Smooth ring follow
  function loop() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    rafId = requestAnimationFrame(loop);
  }
  loop();
}

/* ---------- Navigation scroll state ---------- */
const navbar = document.getElementById("navbar");
const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 40);

    // Scroll progress
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? y / total : 0;
    scrollProgress.style.transform = `scaleX(${progress})`;
  },
  { passive: true }
);

/* ---------- Hamburger / Mobile menu ---------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu(open) {
  const isOpen = open !== undefined ? open : !mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open", isOpen);
  hamburger.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

hamburger.addEventListener("click", () => toggleMenu());

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

/* ---------- Copy email to clipboard ---------- */
const copyEmailBtn = document.getElementById("copyEmail");
const EMAIL = "vedantmh48@gmail.com";

copyEmailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyEmailBtn.classList.add("copied");
    const hint = copyEmailBtn.querySelector(".copy-hint");
    hint.textContent = "Copied!";
    setTimeout(() => {
      copyEmailBtn.classList.remove("copied");
      hint.textContent = "Copy";
    }, 2000);
  } catch {
    // Fallback
    copyEmailBtn.classList.add("copied");
    const hint = copyEmailBtn.querySelector(".copy-hint");
    hint.textContent = "Select the email!";
    setTimeout(() => {
      copyEmailBtn.classList.remove("copied");
      hint.textContent = "Copy";
    }, 2000);
  }
});

/* ---------- Contact Form ---------- */
const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const subject = document.getElementById("contactSubject").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !subject || !message) {
    contactFormStatus.textContent = "Please fill in all fields.";
    contactFormStatus.className = "form-status error";
    return;
  }

  // Build mailto link
  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  // Open mail client
  window.location.href = mailtoLink;

  contactFormStatus.textContent = "Opening your email client...";
  contactFormStatus.className = "form-status success";

  // Reset form
  contactForm.reset();

  setTimeout(() => {
    contactFormStatus.textContent = "";
    contactFormStatus.className = "form-status";
  }, 5000);
});

/* ============================================================
   GSAP ANIMATIONS
   ============================================================ */
if (typeof gsap !== "undefined" && !prefersReducedMotion) {
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Hero Entrance ---------- */
  const heroTl = gsap.timeline({ delay: 0.3 });
  heroTl
    .fromTo(
      ".reveal-1",
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out" }
    )
    .fromTo(
      ".reveal-2",
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out" },
      "-=0.9"
    )
    .fromTo(
      ".reveal-3",
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.1, ease: "expo.out" },
      "-=0.9"
    )
    .fromTo(
      ".reveal-4",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.1 },
      "-=0.6"
    )
    .fromTo(
      ".reveal-5",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(
      ".hero-art-wrap",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.4, ease: "expo.out" },
      "-=1.4"
    )
    .fromTo(
      ".hero-bg-text",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
      0
    );

  /* ---------- Hero Mouse Parallax ---------- */
  if (!isTouchDevice) {
    const heroArtWrap = document.querySelector(".hero-art-wrap");
    document.querySelector(".hero").addEventListener("mousemove", (e) => {
      const rect = document.querySelector(".hero").getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(heroArtWrap, {
        x: x * 30,
        y: y * 30,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(".float-tag", {
        x: x * 45,
        y: y * 45,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.05,
      });
    });
  }

  /* ---------- Scroll Reveal ---------- */
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    // Do not double-animate project cards (handled separately below)
    if (el.classList.contains("project-card")) return;

    // Start hidden
    gsap.set(el, { y: 50 });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  });

  /* ---------- Skill bars animate ---------- */
  document.querySelectorAll(".skill-group").forEach((group) => {
    ScrollTrigger.create({
      trigger: group,
      start: "top 80%",
      once: true,
      onEnter: () => {
        group.querySelectorAll(".bar-fill").forEach((fill) => {
          gsap.to(fill, {
            width: fill.style.getPropertyValue("--w") || "85%",
            duration: 1.4,
            ease: "expo.out",
          });
        });
      },
    });
  });

  /* ---------- Hero text scroll parallax ---------- */
  gsap.to(".hero-bg-text", {
    yPercent: 35,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  /* ---------- Project cards stagger ---------- */
  document.querySelectorAll(".project-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: i * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  /* ---------- Client cards stagger ---------- */
  document.querySelectorAll(".client-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: i * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  /* ---------- Refresh on load ---------- */
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
} else {
  /* No GSAP / reduced motion: ensure everything visible */
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    el.style.opacity = "1";
  });
  document.querySelectorAll(".bar-fill").forEach((fill) => {
    fill.style.width = fill.style.getPropertyValue("--w") || "85%";
  });
  document.querySelectorAll(".line").forEach((line) => {
    line.style.opacity = "1";
  });
  document.querySelectorAll(".hero-desc, .hero-badges, .hero-actions").forEach((el) => {
    el.style.opacity = "1";
  });
}