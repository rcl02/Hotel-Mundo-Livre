(function(){
  // Só esconde os blocos para animar se este arquivo carregou; sem ele, a página aparece inteira.
  document.documentElement.classList.add('js');
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');

  function setMenu(open){
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  toggle.addEventListener('click', function(){ setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function(e){ if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); toggle.focus(); } });

  window.addEventListener('scroll', function(){ header.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });

  var items = document.querySelectorAll('.reveal');
  function show(el){ el.classList.add('in'); if (io) io.unobserve(el); }
  // Revela também o que já ficou acima da tela (pulos por âncora, Ctrl+End), que o observer não avisa.
  function sweep(){
    document.querySelectorAll('.reveal:not(.in)').forEach(function(el){
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
    });
  }
  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting) show(en.target); });
      sweep();
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });
    items.forEach(function(el){ io.observe(el); });
    window.addEventListener('hashchange', sweep);
    window.addEventListener('load', sweep);
  } else {
    items.forEach(show);
  }

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
