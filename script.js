// Menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger?.addEventListener('click', () => {
  const visible = getComputedStyle(menu).display !== 'none';
  menu.style.display = visible ? 'none' : 'flex';
});

// Tema escuro/claro
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const light = {
  '--bg':'#f7fafc',
  '--elev':'#ffffff',
  '--card':'#ffffff',
  '--text':'#0b0e14',
  '--muted':'#5b6676',
  '--brand':'#2563eb',
  '--brand-2':'#60a5fa',
  '--accent':'#16a34a',
  '--border':'#e5e7eb'
};
const dark = {}; // usa os defaults do :root

function setTheme(values){
  Object.entries(values).forEach(([k,v])=> root.style.setProperty(k,v));
  localStorage.setItem('theme', values === dark ? 'dark' : 'light');
}
themeToggle?.addEventListener('click', ()=>{
  const mode = localStorage.getItem('theme');
  if(mode === 'light'){ setTheme(dark); }
  else { setTheme(light); }
});
(() => {
  const mode = localStorage.getItem('theme');
  if(mode === 'light'){ setTheme(light); }
})();