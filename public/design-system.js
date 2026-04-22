// ============================================================
// PAGE ROUTING
// ============================================================
const tabs = document.querySelectorAll('.nav-tab');
const pages = document.querySelectorAll('.page');
const pageLabel = document.getElementById('footer-page-label');

const labels = {
  foundations: 'Foundations · v2.0.1 · Monochrome Design System',
  components: 'Components · v2.0.1 · Monochrome Design System',
  layout: 'Layout & Spacing · v2.0.1 · Monochrome Design System'
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.page;
    tabs.forEach(t => t.classList.toggle('active', t === tab));
    pages.forEach(p => p.classList.toggle('active', p.id === `page-${target}`));
    pageLabel.textContent = labels[target];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ============================================================
// INDETERMINATE CHECKBOX
// ============================================================
const indet = document.getElementById('indet-box');
if (indet) indet.indeterminate = true;

// ============================================================
// CATEGORY TAG SELECTION (single-select behavior)
// ============================================================
document.querySelectorAll('[data-tag]').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('[data-tag]').forEach(t => t.classList.remove('selected'));
    tag.classList.add('selected');
  });
});

// ============================================================
// DISMISSIBLE TAGS
// ============================================================
document.querySelectorAll('[data-dismiss]').forEach(tag => {
  tag.addEventListener('click', (e) => {
    tag.style.transition = 'opacity 150ms ease, transform 150ms ease';
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.9)';
    setTimeout(() => tag.remove(), 160);
  });
});

// ============================================================
// KEYBOARD NAV — 1/2/3 to jump pages
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea, select')) return;
  const map = { '1': 'foundations', '2': 'components', '3': 'layout' };
  if (map[e.key]) {
    const tab = document.querySelector(`[data-page="${map[e.key]}"]`);
    if (tab) tab.click();
  }
});