/* ================= EASY-UPDATE CONTENT ================= */
const EMAIL = 'natsshycth@gmail.com';
const A = 'https://lh3.googleusercontent.com/aida/'; // original Stitch-hosted fallbacks
const IMAGES = {
  me: { src: 'assets/images/my%20photo.png', fb: A + 'ALJJyrCO2aCj3db16lyUEa6RWW9FxMZMimXAH4j10ACUaBkB_7Wa_n-xTCnyM8jkxoJkFO9nn0k6F1_3q6T9i7_Jgf1oY83gvTXlomjy2vChQLhTJ-LbnE58bUUoZHsfiNrlb3worKuRQb_9-NqsjIF_Njrfj5ZtzQE_bZm7yVwB5qYMRyqn89FdXU08ERkC6Q8KX7eVekPuzHJEJv6HcaNxxJ9VkVL3wiJmjLjX_LD70QXrCQ' },
  bingo: { src: 'assets/images/Bingo.png', fb: A + 'ALJJyrAeENJ-dq_lQKUMyCX_wReTv8KN0Zt9Yv7h56ah85u2vuK2IVThUwQfcAsro3WLTaZEpnEnApWp-tkWpzds1Xb8soL1680oRVaJIX_XETE5b7atDMGfjD39y6Z7XXUkjN2w4cLuGcKPGyPxj5EAUFymFWz6JqUzq-kDqUoPsbqmpBmTftDjcUZ-5lrlEDmyDnsUYH8RKzPo41BG1lUNeBdnWtlcb44wj57EnfMb7QD7Dw' },
  magangin: { src: 'assets/images/Magangin.png', fb: A + 'ALJJyrC9L3-OY9KMVUYpe3zk2wrcPl9fHyarNoagLv0xxhjjM_XcgSSrgK1NBa6_8e41IuvUM9XqE9cbwSPrvhKZFKh1cpXiISs-MZZgfQW-DMWs08W3agvS4wQeSgGrJFa8qPRJdPpcgVhJ1KK6QxeGWIjm5taT4C-j8RYtHDrooulE6lJ_kjLPEkpbob7bbHV5H4eWrGWKt_bAtoTeejSBj0olHv9BDiqXfJIJ7Y2UrMbjCw' },
  ubaccess: { src: 'assets/images/UBAccess.png', fb: A + 'ALJJyrAvnVCnI2-TXwONbmEhb1z_1c_hmdW3UCidnkDmvjHkukIsrRY7kYWFMeZYBZEkRXqtl0CvsdesGQrl962Q9xa0iC3EfSxxxQ4cUaVPAam-xPIQPEFVa05pugodfkEdKi4lwiKuLsUDp_zgy30L8PPyd7uBHhUf7LHUaMZcc7qy1BvrCCQvQMRxcLaQ7TfIVIp_LAqvdynRzer2vM9SthmDiW8MlQmx_lCZCw_2Bzysyw' },
  unboxed: { src: 'assets/images/unboxed.png', fb: A + 'ALJJyrDDxP6Ej75n2AgtqdAiFvvtIpRSxce5FqaJ-ysoTOvfyrLyLWXpA9MP1FP53UFV2q1bd05LeQpJeLPGTeQuPN4si6DkLa1JXC0ZaW2jWr-q9RcTdmvW1xlKmNpGNNijIgAGkPxjsdYmGGS7PRaY2SIiIJSjlYARZP7JYBSmN9FlP07GzdlWX3Wnw8GqTjzWkq0gOOCJbY2db9Q22b0H_ODh0kI9BaMDCNypBPZ4WDhZEIA' }
};
// url: set to a real case-study link when available (empty = "coming soon")
const PROJECTS = [
  {
    img: 'bingo', title: 'BinGo — AI-Driven Smart Waste & Recycling Ecosystem', cat: 'Digital Product · Sustainability · UI/UX', badge: 'Finalist — Techcomfest 2025',
    url: 'https://www.figma.com/proto/yFrhqNVpB2k9ex30xyrJNZ/BinGo---Anak-Kandung-UB--techcomfest-?node-id=97-124&viewport=1634%2C5222%2C0.26&t=mMDb2mGwLe06JVql-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=82%3A59&show-proto-sidebar=1&page-id=16%3A186',
    cta: 'View Project',
    desc: 'A digital solution designed to encourage responsible waste management through AI-powered waste scanning, recycling location discovery, and reward-based engagement.',
    headline: 'Core Architecture & Loops', feat: ['AI Scanner & Material Classification', 'Geolocation Recycle Map', 'BinPoin Incentive Engine']
  },
  {
    img: 'magangin', title: 'Magangin — Digital Internship Discovery & Flow', cat: 'UI/UX Design · User Research · Digital Platform', badge: 'Role: UI/UX Designer & Researcher',
    url: 'https://www.figma.com/proto/or1OLTZ7Xd7OXemTCwQbYh/Tugas-Kelompok-PPP?node-id=122-2&viewport=476%2C1549%2C0.21&t=dA9NzGSWOlrrIx8g-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=90%3A270&page-id=11%3A2',
    cta: 'View Project',
    desc: 'A digital platform designed to simplify the internship discovery, vetting, and application workflow for university students and verified employers.',
    metrics: { title: 'Maze Usability Testing Validation', items: [['5', 'Participants'], ['4.3/5', 'Usability Score'], ['100%', 'Flow Completion']] }
  },
  {
    img: 'ubaccess', title: 'UB Access — Inclusive Campus Navigation System', cat: 'UI/UX Design · Accessibility · User-Centered Design', badge: 'WCAG 2.1 AA Benchmarked',
    url: 'https://www.figma.com/proto/BPWKjb0ymMo5OzX3HpjLAS/Case-Study_Natasya-Alfanisa-Thomas_UI-UX-Designer_DevGirls?node-id=6-275&viewport=1016%2C-322%2C0.32&t=W3QM0PDsdJmNuxLY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A275&page-id=6%3A274',
    cta: 'View Project',
    desc: 'An accessibility-focused digital product concept designed to help university students and visitors discover accessible facilities, ramp paths, tactile paving, and navigate surroundings effectively.',
    headline: 'Inclusive Interventions', feat: ['Ramp & Elevator Priority Routing', 'High-Contrast Tactile Overlay', 'Screen Reader Audited Wireframes']
  },
  {
    img: 'unboxed', title: 'UnBoxed — Surplus Food Rescue Marketplace', cat: 'Digital Platform · Sustainability · Food Technology', badge: 'Food Waste Reduction',
    url: 'https://www.figma.com/proto/2NOCvupWEI7JHxycR44CoH/Manpro?node-id=16-5&page-id=16%3A2&starting-point-node-id=16%3A5&show-proto-sidebar=1&t=GpJGkGg11TkjCZGn-1',
    cta: 'View Project',
    desc: 'A digital marketplace concept connecting conscious consumers with quality surplus food from bakeries and restaurants to actively reduce food waste and carbon emissions.',
    headline: 'System Touchpoints', feat: ['Dynamic Inventory Markdown Engine', 'Merchant Real-Time Surplus Sync', 'Impact Carbon Offset Dashboard']
  }
];
const SKILLS = [
  { n: '01', icon: 'palette', title: 'Design & Research', desc: 'Human-centered research methods, interface craftsmanship, and empirical usability validation.', tags: ['Figma', 'UI/UX Design', 'User Research', 'Maze', 'Prototyping', 'Usability Testing', 'Wireframing', 'Information Architecture', 'Design Systems'] },
  { n: '02', icon: 'database', title: 'Data & Technology', desc: 'Relational databases, analytical pipelines, quantitative modeling, and modern web environments.', tags: ['SQL', 'Database Design', 'Microsoft Excel', 'Data Analytics', 'Web Programming', 'HTML/CSS/JS', 'Python Basics', 'Data Visualization'] },
  { n: '03', icon: 'account_tree', title: 'Information Systems', desc: 'Strategic governance, security analysis, process choreography, and enterprise architecture.', tags: ['IT Governance', 'IT Risk Management', 'Data Security & Privacy', 'Systems Analysis', 'Business Process Analysis', 'Enterprise Architecture', 'Requirements Engineering'] }
];
const EXPERIENCE = [
  { org: 'DevGirls', role: 'Community Member', desc: 'Empowering women in tech, hosting UI/UX workshops, and facilitating collaborative technical meetups.', cls: 'tf' },
  { org: 'SGE FILKOM', role: 'Community Member', desc: 'Active engagement in student advocacy, digital publication design, and departmental program initiatives.', cls: 'sf' },
  { org: 'FACE IT', role: 'Volunteer', desc: 'Organizing flagship faculty IT events, digital visual branding, and coordinated operational workflows.', cls: 'hi' },
  { org: 'Donor Darah', role: 'Volunteer', desc: 'Managing participant flow, registration coordination, and community health blood donation drives.', cls: '' }
];
const COURSES = [
  ['Database Design', 'Relational schema, SQL optimization, entity integrity'], ['Data Analytics', 'Descriptive and diagnostic models, visualization'],
  ['IS Analysis & Modeling', 'UML structures, dynamic modeling, functional analysis'], ['UI/UX Design', 'Cognitive ergonomics, Maze testing, Design Systems'],
  ['Web Programming', 'Full-stack web architectures, client interfaces, APIs'], ['Data Security & Privacy', 'Cryptographic basics, compliance frameworks, access controls'],
  ['IT Risk Management', 'Contingency planning, threat mitigation matrices'], ['Enterprise Architecture', 'TOGAF principles, business and IT synchronization']
];
/* ======================================================= */

const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
document.documentElement.classList.add('js');
const esc = s => s.replace(/&/g, '&amp;');
const imgTag = (key, alt) => `<img src="${IMAGES[key].src}" data-fb="${IMAGES[key].fb}" alt="${esc(alt)}" loading="lazy">`;

$('#projects-list').innerHTML = PROJECTS.map((p, n) => {
  const extra = p.metrics
    ? `<div class="metrics"><div class="lbl b">${p.metrics.title}</div><div class="m3">${p.metrics.items.map(m => `<div><b>${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div></div>`
    : `<div class="stack s"><div class="lbl muted b">${esc(p.headline)}</div><div class="chips">${p.feat.map(f => `<span class="pill">✦ ${esc(f)}</span>`).join('')}</div></div>`;
  return `<article class="card sh4 proj rv${n % 2 ? ' rev' : ''}"><div class="g12 mid">
    <div class="ptxt"><div class="chips top"><span class="pill ${n % 2 ? 'tf' : 'hi'}">${esc(p.cat)}</span><span class="pill ${n % 2 ? 'hi' : 'sf b'}">${esc(p.badge)}</span></div>
      <h3>${esc(p.title)}</h3><p class="muted">${p.desc}</p>${extra}
      <div class="row wrapf" style="padding-top:.5rem"><a class="pbtn" href="${p.url || '#projects'}" ${p.url ? 'target="_blank" rel="noopener noreferrer"' : 'data-soon'}><span>${p.cta}</span><span class="material-symbols-outlined sm">north_east</span></a></div></div>
    <div class="pimg"><div class="imgbox">${imgTag(p.img, p.title.split(' —')[0] + ' Project Mockup')}</div></div></div></article>`;
}).join('');

$('#skills-list').innerHTML = SKILLS.map((s, n) => `<div class="card sh3 pad skc rv" style="--i:${n}"><div>
  <div class="hd"><span class="lbl b">${s.n} / PILLAR</span><span class="material-symbols-outlined">${s.icon}</span></div>
  <h3 class="syne h-sm" style="margin-bottom:.5rem">${esc(s.title)}</h3><p class="small muted">${s.desc}</p></div>
  <div class="tags">${s.tags.map((t, i) => `<span class="t${i % 4}">${esc(t)}</span>`).join('')}</div></div>`).join('');

$('#xp-list').innerHTML = EXPERIENCE.map((e, i) => `<div class="xr rv" style="--i:${i}"><h3 class="syne">${e.org}</h3>
  <div><span class="pill ${e.cls}">${e.role}</span></div><p class="small muted">${e.desc}</p></div>`).join('');

$('#course-list').innerHTML = COURSES.map(c => `<div class="cr"><span class="material-symbols-outlined">check_circle</span><div><b>${esc(c[0])}</b><span class="d">${c[1]}</span></div></div>`).join('');

$('#email-text').textContent = EMAIL;
const me = $('#tilt-target'); me.dataset.fb = IMAGES.me.fb; me.src = IMAGES.me.src;

// image fallback chain: local file -> original Stitch URL -> hide
$$('img[data-fb]').forEach(img => img.addEventListener('error', () => {
  if (img.dataset.tried) { img.style.visibility = 'hidden'; return; }
  img.dataset.tried = '1'; img.src = img.dataset.fb;
}));

// nav: scrollspy + mobile menu
const nav = $('#nav'), links = $$('#nav a');
$('#menu').onclick = e => { const o = nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o); };
links.forEach(l => l.addEventListener('click', () => nav.classList.remove('open')));
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
$$('main section[id]').forEach(s => spy.observe(s));

// portrait: 3D tilt + parallax (mouse & touch)
(() => {
  const w = $('#tilt-wrapper'); if (!w) return;
  const chips = $$('[data-p]', w);
  const move = (cx, cy) => {
    const r = w.getBoundingClientRect(), x = (cx - r.left) / r.width, y = (cy - r.top) / r.height;
    w.classList.add('act');
    w.style.transform = `perspective(1000px) rotateX(${(.5 - y) * 24}deg) rotateY(${(x - .5) * 24}deg) scale3d(1.02,1.02,1.02)`;
    chips.forEach(c => c.style.translate = `${(x - .5) * c.dataset.p}px ${(y - .5) * c.dataset.p}px`);
    w.style.setProperty('--gx', x * 100 + '%'); w.style.setProperty('--gy', y * 100 + '%');
  };
  const reset = () => { w.classList.remove('act'); w.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'; chips.forEach(c => c.style.translate = ''); };
  w.addEventListener('mousemove', e => move(e.clientX, e.clientY));
  w.addEventListener('mouseleave', reset);
  w.addEventListener('touchstart', e => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  w.addEventListener('touchmove', e => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  w.addEventListener('touchend', () => setTimeout(reset, 600));
})();

// toast, email copy, CV, coming-soon links
const toast = $('#toast'); let tt;
const say = m => { toast.textContent = m; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 2400); };
$('#email-copy-btn').onclick = () => {
  const ok = () => say('Email copied to clipboard!'), no = () => say(EMAIL);
  navigator.clipboard ? navigator.clipboard.writeText(EMAIL).then(ok, no) : no();
};
$('#cv-download-btn').addEventListener('click', e => {
  const b = e.currentTarget, html = b.innerHTML;
  b.innerHTML = '<span class="material-symbols-outlined">check_circle</span><span>Archival CV Dispatched</span>';
  setTimeout(() => b.innerHTML = html, 2500);
});
$$('[data-soon]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); say('Case study coming soon'); }));

// scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
$$('.shead, #hero .c8 > *, #about .g2 > .card').forEach((el, i) => { el.classList.add('rv'); el.style.setProperty('--i', i % 4); });
$$('.rv').forEach(el => io.observe(el));
