/* ==========================================================================
   VamiSec Compliance Module — Landing Page Scripts
   ========================================================================== */

/* ── Sticky nav ─────────────────────────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile nav toggle ──────────────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on link click
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
})();

/* ── Scroll-reveal (IntersectionObserver) ───────────────────────────── */
(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
})();

/* ── Animated dash-bar fills (hero) ────────────────────────────────── */
(function () {
  const fills = document.querySelectorAll('.dash-bar__fill[data-pct]');
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const pct = e.target.getAttribute('data-pct');
          e.target.style.width = pct + '%';
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  fills.forEach((f) => {
    f.style.width = '0%';
    f.style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)';
    observer.observe(f);
  });
})();

/* ── Simple counter animation ───────────────────────────────────────── */
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const val = target * ease;
      el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(e.target);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
})();

/* ── Smooth scroll for anchor links ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
