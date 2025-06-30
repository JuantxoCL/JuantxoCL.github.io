// script.js
const toggle = document.createElement('button');
toggle.innerText = '🌙 Dark Mode';
toggle.style.position = 'fixed';
toggle.style.top = '20px';
toggle.style.right = '20px';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
