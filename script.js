// ===== Clock =====
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('JsClock');
  if (el) el.textContent = h + ':' + m + ':' + s;
}
setInterval(updateClock, 1000);
updateClock();

// ===== Guestbook =====
function saveGuestBook() {
  const note = document.getElementById('guestNote');
  const text = note.value.trim();
  if (!text) return;

  const table = document.getElementById('guestTable').querySelector('tbody');
  const row = table.insertRow();
  const cell = row.insertCell();

  const date = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
  cell.textContent = `[${date}] ${text}`;
  note.value = '';

  // Save to localStorage
  saveToStorage();
}

// ===== Persist Guestbook =====
function saveToStorage() {
  const table = document.getElementById('guestTable').querySelector('tbody');
  const entries = [];
  for (const row of table.rows) {
    entries.push(row.cells[0].textContent);
  }
  localStorage.setItem('sapweb_guestbook', JSON.stringify(entries));
}

function loadFromStorage() {
  const stored = localStorage.getItem('sapweb_guestbook');
  if (!stored) return;
  try {
    const entries = JSON.parse(stored);
    const tbody = document.getElementById('guestTable').querySelector('tbody');
    for (const text of entries) {
      const row = tbody.insertRow();
      const cell = row.insertCell();
      cell.textContent = text;
    }
  } catch (_) { /* ignore */ }
}
loadFromStorage();

// ===== Mobile Hamburger =====
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ===== Active Nav Highlight =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 100;
    if (scrollY >= top) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ===== Keyboard shortcut: Enter in guestbook =====
document.getElementById('guestNote')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    saveGuestBook();
  }
});

console.log('🚀 Iron-Man Sky · 铁人网络 loaded');
