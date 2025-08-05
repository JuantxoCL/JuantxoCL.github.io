// Night mode toggle
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    toggleBtn.innerHTML = "☀️ Light Mode";
  } else {
    toggleBtn.innerHTML = "🌙 Night Mode";
  }
});

// Mostrar/ocultar botón de scroll-top
window.addEventListener('scroll', function() {
  document.querySelector('.scroll-top').style.display =
    window.scrollY > 240 ? 'block' : 'none';
});
