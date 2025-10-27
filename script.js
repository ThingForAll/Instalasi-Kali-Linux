/* ---------------------------
  script.js
  - particle background
  - typing effect for hero (history)
  - reveal on scroll
  - generate gallery 20 items with lorem descriptions
  - modal logic (open/close/prev/next)
  - small UX: smooth anchors & parallax subtle
----------------------------*/

/* ---------- PARTICLE BACKGROUND (lightweight) ---------- */
(function particleBG(){
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const particles = [];
  for (let i=0;i<60;i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*1.8+0.6,
      vx: (Math.random()-0.5)*0.4,
      vy: (Math.random()-0.5)*0.4,
      alpha: 0.4 + Math.random()*0.6
    });
  }
  function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let p of particles){
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = canvas.width+10;
      if (p.x > canvas.width+10) p.x = -10;
      if (p.y < -10) p.y = canvas.height+10;
      if (p.y > canvas.height+10) p.y = -10;
      ctx.beginPath();
      ctx.fillStyle = `rgba(0,220,255,${p.alpha*0.18})`;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ---------- TYPING EFFECT (HERO dynamic line) ---------- */
(function typingHero(){
  const target = document.getElementById('type-history');
  const phrases = [
    "Pisau bedah digital bagi penjaga keamanan.",
    "Koleksi alat bagi yang ingin memahami sistem.",
    "Diciptakan untuk mengungkap, bukan merusak."
  ];
  let pi=0, ci=0;
  function type(){
    const text = phrases[pi];
    target.textContent = text.slice(0, ci++);
    if (ci > text.length){
      setTimeout(()=>{ ci=0; pi=(pi+1)%phrases.length; type(); }, 1400);
    } else setTimeout(type, 40 + Math.random()*40);
  }
  if (target) type();
})();

/* ---------- REVEAL ON SCROLL & PARALLAX ---------- */
(function revealAndParallax(){
  const anims = document.querySelectorAll('.anim');
  const onScroll = () => {
    anims.forEach(a => {
      const r = a.getBoundingClientRect();
      if (r.top < window.innerHeight - 80) a.classList.add('visible');
    });
    // subtle parallax hero background via transform on hero inner
    const hero = document.querySelector('.hero');
    if (hero) hero.style.transform = `translateY(${window.scrollY * -0.02}px)`;
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
})();

(function genGallery(){
  const gallery = document.getElementById('instal-gallery');
  if (!gallery) return;

  const steps = [
    {
      img: 'assets/img/contoh_img1.jpg',
      title: 'Langkah 1',
      short: 'Atur nama virtual machine dan operasi sistem.',
      desc: '1. VM Name: Kali linux (bisa bebas beri nama apa).\n2. OS: Pilih linux.\n3. OS Distribution: Pilih debian.\n4. OS Version: Pilih Debian 64-bit.'
    },
    {
      img: 'assets/img/contoh_img2.jpg',
      title: 'Langkah 2',
      short: 'Atur Virtual Hardware.',
      desc: '1. Base Memory(RAM): Bisa atur sesuai keinginan minimal 2/4GB (2000MB/4000MB) bisa atur lebih jika RAM Anda banyak.\n2. Number of CPUs(core): Atur sesuai keinginan minimal 2 core bisa juga sesuaikan dengan RAM misal RAM 2GB maka core 2.'
    },
    {
      img: 'assets/img/contoh_img3.jpg',
      title: 'Langkah 3',
      short: 'Atur Virtual Hard Disk.',
      desc: '1. Disk Size(ROM): Atur sesuai keinginan minimal 20GB.\n2. Hard Disk File Type: Pilih VDI (VirtualBox Disk Image).\n3. Klik Finish'
    },
    // ... lanjut langkah 4, 5, dst
    {
      img: 'assets/img/contoh_img4.jpg',
      title: 'Langkah 4',
      short: 'Klik Settings melakukan tahap kedua.',
      desc: '1. Masuk General bagian Features.\n2. Shared clipsboard: Bidirectional.\n3. Drag-and-Drop: Bidirectional.'
    },
    {
      img: 'assets/img/contoh_img5.jpg',
      title: 'Langkah 5',
      short: 'Masuk tampilan Display.',
      desc: 'Video Memory: Atur ke maksimal 128MB.'
    },
    {
      img: 'assets/img/contoh_img6.jpg',
      title: 'Langkah 6',
      short: 'Masuk tampilan Memory.',
      desc: '1. cari tulisan Controller: IDE.\n2. Klik Empty ikon CD di sebelah kanan tulisan Optical Drive.\n3. Pilih Choose a disk file.\n4. Cari file ISO Kali Linux yang sudah di download tadi.\n5. Klik OK.\n6. Start Virtual Machine Kali Linux.'
    },
    {
      img: 'assets/img/contoh_img7.jpg',
      title: 'Langkah 7',
      short: 'Masuk tampilan Pemasangan Kali Linux.',
      desc: '1. Pilih Graphical Install jika ingin ada tampilan GUI.\n2. Pilih Install jika ingin tampilan teks saja.'
    },
    {
      img: 'assets/img/contoh_img8.jpg',
      title: 'Langkah 8',
      short: 'Atur Bahasa, Negara, Wilayah, Daerah, Lokasi, keymap Keyboard.',
      desc: '1. Language: English.\n2. Territory: Other.\n3. Continent: Asia.\n4. Contry: Indonesia.\n5. Base default locate: Singapore(en_SG_UTF-8).\n6. Keyboard: American English.'
    },
    {
      img: 'assets/img/contoh_img9.jpg',
      title: 'Langkah 9',
      short: 'Atur Jaringan, Users, Password, Zona waktu.',
      desc: '1. Hostname: Kali (bebas beri nama apa).\n2. Domain name: kosongkan saja.\n3. Full name for new user: isi nama lengkap Anda (bebas).\n4. Username for your account: isi nama user (bebas).\n5. Choose a password for the new user: isi password (ingat password ini).\n6. Re-enter new password: masukkan lagi password tadi.\n7. Configure the clock: Western (Sumatra, Jakarta, West and Central Kalimantan).'
    },
    {
      img: 'assets/img/contoh_img10.jpg',
      title: 'Langkah 10',
      short: 'Atur Disks.',
      desc: '1. Guided - use entire disk.\n2. Pilih Virtual Disk yang sudah dibuat tadi.\n3. All files in one partition.\n4. Finish partitioning and write changes to disk.\n5. Yes untuk menulis perubahan ke disk.'
    },
    {
      img: 'assets/img/contoh_img11.jpg',
      title: 'Langkah 11',
      short: 'Atur Grub Boot loader.',
      desc: '1. Pilih Yes untuk menginstall GRUB boot loader.\n2. Pilih Virtual Disk yang sudah dibuat tadi.\n3. Selesai, tunggu proses hingga selesai dan reboot.'
    },
    {
      img: 'assets/img/contoh_img12.jpg',
      title: 'Bonus Langkah 12',
      short: 'Update dan Upgrade repository Kali Linux.',
      desc: '1. Buka Terminal.\n2. Ketik perintah: sudo apt update && sudo apt full-upgrade -y\n3. Tunggu proses hingga selesai.'
    },
    {
      img: 'assets/img/contoh_img13.jpg',
      title: 'Bonus Langkah 13',
      short: 'Install VS Code di Kali Linux.',
      desc: '1. Download VS Code deb package dari situs resmi.\n2. Buka Terminal dan arahkan ke folder tempat file deb tadi.\n3. Ketik perintah: sudo dpkg -i nama_file.deb (ganti nama_file.deb sesuai nama file yang di download).\n4. Tunggu proses hingga selesai dan VS Code siap digunakan.'
    },

  ];

  steps.forEach((step, i) => {
    const item = document.createElement('div');
    item.className = 'instal-item';
    item.dataset.step = i+1;
    item.dataset.desc = step.desc;
    item.innerHTML = `
      <img src="${step.img}" alt="${step.title}">
      <h4>${step.title}</h4>
      <p>${step.short}</p>
      <div class="instal-progress"><span style="width:${Math.round(((i+1)/steps.length)*100)}%"></span></div>
    `;
    gallery.appendChild(item);
  });
})();


/* ---------- MODAL LOGIC ---------- */
(function modalGallery(){
  const items = Array.from(document.querySelectorAll('.instal-item'));
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalStep = document.getElementById('modal-step');
  const modalTotal = document.getElementById('modal-total');
  const modalProgress = document.getElementById('modal-progress');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  let current = 0;

  function open(index){
    const el = items[index];
    if (!el) return;
    const step = +el.dataset.step;
    modalImg.src = el.querySelector('img').src;
    modalTitle.textContent = `Langkah ${step}`;
    modalDesc.innerHTML = el.dataset.desc.replace(/\n/g, '<br>');
    modalStep.textContent = step;
    modalTotal.textContent = items.length;
    modalProgress.style.width = `${Math.round((step/items.length)*100)}%`;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
    current = index;
  }
  function close(){
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
  }
  function prev(){
    open((current - 1 + items.length) % items.length);
  }
  function next(){
    open((current + 1) % items.length);
  }

  items.forEach((it,idx) => {
    it.addEventListener('click', () => open(idx));
  });
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  // close on outside click
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  // keyboard
  document.addEventListener('keydown', (e) => {
    if (modal.style.display !== 'flex') return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();

/* ---------- SMOOTH ANCHORS ---------- */
(function anchors(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();
