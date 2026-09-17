/* ============================================================
   EMIGRANTE MODE — microinterações
   Sem dependências. Tudo degrada bem se o JS falhar.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Indicador de progresso da página ---------- */
  var bar = document.getElementById('progressBar');

  function updateProgress() {
    if (!bar) return;
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    var ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.width = Math.min(Math.max(ratio, 0), 1) * 100 + '%';
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateProgress();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* ---------- 2. Entrada subtil no viewport ---------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function showAll() {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    // cascata: elementos irmãos entram com pequeno desfasamento
    var groups = new Map();
    revealables.forEach(function (el) {
      var parent = el.parentElement;
      var index = groups.get(parent) || 0;
      el.style.setProperty('--reveal-delay', Math.min(index, 5) * 80 + 'ms');
      groups.set(parent, index + 1);
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    revealables.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 3. Scroll suave (fallback para browsers sem CSS smooth) ---------- */
  var supportsCssSmooth = 'scrollBehavior' in document.documentElement.style;

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;

    var id = link.getAttribute('href');
    if (id === '#') return;                       // âncora por definir

    var target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();

    if (supportsCssSmooth && !reduceMotion) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - 88);
    }

    history.replaceState(null, '', id);
  });

  /* ---------- 4. Ano no rodapé ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
