/* ============================================================
   SURENDER SINGH — PORTFOLIO 2026
   Main Script: Three.js Galaxy · GSAP · Lenis · Interactions
   ============================================================ */

'use strict';

/* ── WAIT FOR DOM ── */
document.addEventListener('DOMContentLoaded', () => {

  /* ════════════════════════════════════════════
     1. PRELOADER
  ════════════════════════════════════════════ */
  const preloader     = document.getElementById('preloader');
  const preloaderFill = document.getElementById('preloaderFill');
  const preloaderCount = document.getElementById('preloaderCount');

  let count = 0;
  const preloaderInterval = setInterval(() => {
    count += Math.floor(Math.random() * 4) + 1;
    if (count >= 100) count = 100;
    preloaderFill.style.width  = count + '%';
    preloaderCount.textContent = count;
    if (count === 100) {
      clearInterval(preloaderInterval);
      setTimeout(() => {
        preloader.classList.add('hidden');
        initAnimations();
      }, 400);
    }
  }, 30);

  /* ════════════════════════════════════════════
     2. THREE.JS — SPACE SCENE
        · Moving 3D Stars
        · Procedural Spaceship w/ Engine Glow
        · Galaxy
  ════════════════════════════════════════════ */
  function initGalaxy() {
    const canvas = document.getElementById('galaxyCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    // ── Detect low-power device ──
    const isMobile = window.matchMedia('(max-width: 768px)').matches ||
                     /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const DPR = Math.min(window.devicePixelRatio, isMobile ? 1 : 2);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile, powerPreference: 'high-performance' });
    renderer.setPixelRatio(DPR);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = false;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(0, 2.5, 5);
    camera.lookAt(0, 0, 0);

    // ── Lighting (for spaceship mesh shading) ──
    const ambientLight = new THREE.AmbientLight(0x111133, 0.8);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(6, 10, 6);
    scene.add(dirLight);
    const fillLight = new THREE.DirectionalLight(0x0033ff, 0.4);
    fillLight.position.set(-6, -4, -6);
    scene.add(fillLight);

    // ══════════════════════════════════════════
    // A. STARFIELD — 15,000 coloured stars
    // ══════════════════════════════════════════
    const STAR_COUNT = isMobile ? 7000 : 15000;
    const starGeo    = new THREE.BufferGeometry();
    const starPos    = new Float32Array(STAR_COUNT * 3);
    const starCol    = new Float32Array(STAR_COUNT * 3);
    // Colour palette: white, cool-blue, warm-yellow, icy-cyan, reddish
    const palette = [
      [1.0, 1.0, 1.0], [0.8, 0.9, 1.0], [1.0, 0.95, 0.75],
      [0.65, 0.85, 1.0], [1.0, 0.80, 0.72],
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      // Random point on sphere shell, r = 30-180
      const r   = 30 + Math.random() * 150;
      const th  = Math.random() * Math.PI * 2;
      const ph  = Math.acos(2 * Math.random() - 1);
      starPos[i * 3]     = r * Math.sin(ph) * Math.cos(th);
      starPos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
      starPos[i * 3 + 2] = r * Math.cos(ph);
      const c = palette[Math.floor(Math.random() * palette.length)];
      starCol[i * 3]     = c[0];
      starCol[i * 3 + 1] = c[1];
      starCol[i * 3 + 2] = c[2];
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color',    new THREE.BufferAttribute(starCol, 3));
    const starMat = new THREE.PointsMaterial({
      size: isMobile ? 0.20 : 0.14,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ══════════════════════════════════════════
    // B. GALAXY — gold/navy spiral arms
    // ══════════════════════════════════════════
    const gParams = {
      count: isMobile ? 35000 : 80000, size: 0.004,
      radius: 6, branches: 3, spin: 1.2,
      randomness: 0.25, randomnessPower: 3,
    };
    const galGeo = new THREE.BufferGeometry();
    const galPos = new Float32Array(gParams.count * 3);
    const galCol = new Float32Array(gParams.count * 3);
    const cIn    = new THREE.Color('#d4a853');
    const cOut   = new THREE.Color('#1a2a5c');
    for (let i = 0; i < gParams.count; i++) {
      const i3 = i * 3;
      const r  = Math.random() * gParams.radius;
      const sa = r * gParams.spin;
      const ba = (i % gParams.branches) / gParams.branches * Math.PI * 2;
      const rp = gParams.randomnessPower;
      const rx = Math.pow(Math.random(), rp) * (Math.random() < .5 ? 1 : -1) * gParams.randomness * r;
      const ry = Math.pow(Math.random(), rp) * (Math.random() < .5 ? 1 : -1) * gParams.randomness * r * .3;
      const rz = Math.pow(Math.random(), rp) * (Math.random() < .5 ? 1 : -1) * gParams.randomness * r;
      galPos[i3]   = Math.cos(ba + sa) * r + rx;
      galPos[i3+1] = ry;
      galPos[i3+2] = Math.sin(ba + sa) * r + rz;
      const mc = cIn.clone().lerp(cOut, r / gParams.radius);
      galCol[i3] = mc.r; galCol[i3+1] = mc.g; galCol[i3+2] = mc.b;
    }
    galGeo.setAttribute('position', new THREE.BufferAttribute(galPos, 3));
    galGeo.setAttribute('color',    new THREE.BufferAttribute(galCol, 3));
    const galMat = new THREE.PointsMaterial({
      size: gParams.size, sizeAttenuation: true,
      depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
    });
    const galaxy = new THREE.Points(galGeo, galMat);
    scene.add(galaxy);

    // ══════════════════════════════════════════
    // C. SPACESHIP — procedural geometry
    // ══════════════════════════════════════════
    function buildSpaceship() {
      const ship = new THREE.Group();

      // Material palette
      const mDark   = new THREE.MeshPhongMaterial({ color: 0x080820, shininess: 120, specular: 0x2244aa });
      const mAccent = new THREE.MeshPhongMaterial({ color: 0x00d4ff, shininess: 220, specular: 0x88eeff, emissive: 0x001a33 });
      const mGold   = new THREE.MeshPhongMaterial({ color: 0xd4a853, shininess: 160, emissive: 0x221100 });
      const mGlass  = new THREE.MeshPhongMaterial({ color: 0x001144, shininess: 260, specular: 0x4488ff, transparent: true, opacity: 0.75, side: THREE.DoubleSide });
      const mGlowG  = new THREE.MeshBasicMaterial({ color: 0xd4a853 });
      const mGlowB  = new THREE.MeshBasicMaterial({ color: 0x00aaff });

      // ── Fuselage ──
      const fuselageGeo = new THREE.CylinderGeometry(0.09, 0.16, 1.4, 10);
      const fuselage = new THREE.Mesh(fuselageGeo, mDark);
      fuselage.rotation.z = Math.PI / 2; // point along +X
      ship.add(fuselage);

      // ── Nose ──
      const nose = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.42, 10), mAccent);
      nose.rotation.z = Math.PI / 2;
      nose.position.x = 0.92;
      ship.add(nose);

      // ── Cockpit dome ──
      const cockpit = new THREE.Mesh(
        new THREE.SphereGeometry(0.11, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.5),
        mGlass
      );
      cockpit.rotation.z = Math.PI / 2;
      cockpit.position.set(0.38, 0.09, 0);
      ship.add(cockpit);

      // ── Wings (swept-back, both sides) ──
      const wingGeo = new THREE.BoxGeometry(0.72, 0.025, 0.55);
      const makeWing = (side) => {
        const wing = new THREE.Mesh(wingGeo, mDark);
        wing.position.set(-0.12, 0, side * 0.36);
        wing.rotation.y = side * -0.22; // sweep angle
        ship.add(wing);
        // Blue accent stripe on wing edge
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.03, 0.03), mAccent);
        stripe.position.set(0, 0, side * -0.265);
        wing.add(stripe);
      };
      makeWing(1);
      makeWing(-1);

      // ── Engine pods ──
      const podGeo = new THREE.CylinderGeometry(0.055, 0.08, 0.55, 8);
      const makePod = (side) => {
        const pod = new THREE.Mesh(podGeo, mDark);
        pod.rotation.z = Math.PI / 2;
        pod.position.set(-0.32, 0, side * 0.36);
        ship.add(pod);
        // Engine nozzle ring
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 8, 16), mAccent);
        ring.rotation.y = Math.PI / 2;
        ring.position.set(-0.585, 0, side * 0.36);
        ship.add(ring);
        // Glow sphere
        const glowSphere = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), mGlowG);
        glowSphere.position.set(-0.62, 0, side * 0.36);
        ship.add(glowSphere);
        return glowSphere;
      };
      const glowL = makePod(1);
      const glowR = makePod(-1);

      // ── Main centre engine ──
      const mainRing = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.018, 8, 20), mGold);
      mainRing.rotation.y = Math.PI / 2;
      mainRing.position.x = -0.75;
      ship.add(mainRing);

      const mainGlow = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), mGlowG);
      mainGlow.position.x = -0.76;
      ship.add(mainGlow);

      // ── Nose light pip ──
      const nosePip = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6), mGlowB);
      nosePip.position.x = 1.33;
      ship.add(nosePip);

      // ── Lights ──
      const engineLight = new THREE.PointLight(0xd4a853, 4, 5);
      engineLight.position.set(-0.9, 0, 0);
      ship.add(engineLight);
      const noseLight = new THREE.PointLight(0x00aaff, 2, 3);
      noseLight.position.set(1.3, 0, 0);
      ship.add(noseLight);

      return { ship, glowL, glowR, mainGlow, nosePip, engineLight };
    }

    const { ship, glowL, glowR, mainGlow, nosePip, engineLight } = buildSpaceship();
    // Scale up so it's clearly visible
    ship.scale.setScalar(isMobile ? 0.55 : 0.80);
    scene.add(ship);

    // ── Mouse parallax ──
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.4;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.2;
    });

    // ── Animation loop ──
    const clock = new THREE.Clock();
    let shipT = 0;
    let paused = false;
    document.addEventListener('visibilitychange', () => { paused = document.hidden; });

    const _v3 = new THREE.Vector3();
    function animate() {
      if (paused) { requestAnimationFrame(animate); return; }
      const elapsed = clock.getElapsedTime();
      const dt      = clock.getDelta ? 0.016 : 0.016; // ~60fps constant

      // ── Galaxy rotation ──
      galaxy.rotation.y = elapsed * 0.04;
      galaxy.rotation.x += (mouseY * 0.18 - galaxy.rotation.x) * 0.02;
      galaxy.position.x += (mouseX * 0.28 - galaxy.position.x) * 0.02;

      // ── Starfield — slow drift + twinkle ──
      starField.rotation.y  += 0.00008;
      starField.rotation.x  += 0.00004;
      starMat.opacity = 0.75 + Math.sin(elapsed * 1.6) * 0.13;

      // ── Spaceship orbit path ──
      shipT += isMobile ? 0.003 : 0.004;
      const OR = 10, OZ = 7; // orbit radii
      const sx = Math.cos(shipT) * OR;
      const sz = Math.sin(shipT) * OZ;
      const sy = Math.sin(shipT * 1.4) * 3.2;

      ship.position.set(sx, sy, sz);

      // Point ship in direction of travel (tangent of orbit)
      const NT  = shipT + 0.015;
      const tx  = Math.cos(NT) * OR;
      const tz  = Math.sin(NT) * OZ;
      const ty  = Math.sin(NT * 1.4) * 3.2;
      _v3.set(tx, ty, tz);
      ship.lookAt(_v3);
      // lookAt makes -Z face target; ship points along +X so correct:
      ship.rotateY(-Math.PI / 2);

      // Subtle banking
      ship.rotation.z = Math.sin(shipT * 2) * 0.25;

      // ── Engine glow pulse ──
      const pulse = 0.82 + Math.sin(elapsed * 9) * 0.18;
      glowL.scale.setScalar(pulse);
      glowR.scale.setScalar(pulse);
      mainGlow.scale.setScalar(0.9 + Math.sin(elapsed * 7 + 1) * 0.20);
      nosePip.scale.setScalar(0.7 + Math.sin(elapsed * 4) * 0.3);
      engineLight.intensity = 3.5 + Math.sin(elapsed * 9) * 1.0;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // ── Responsive resize ──
    function onResize() {
      const W = window.innerWidth;
      const H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
      renderer.setSize(W, H);
    }
    window.addEventListener('resize', onResize);
  }
  initGalaxy();


  /* ════════════════════════════════════════════
     3. LENIS SMOOTH SCROLL + GSAP INTEGRATION
  ════════════════════════════════════════════ */
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      lerp:            0.07,   // 0=butter smooth / 1=instant
      smoothWheel:     true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite:        false,
      orientation:     'vertical',
      gestureOrientation: 'vertical',
    });
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }
    // Pause lenis on mobile (touch handles its own momentum)
    if (window.matchMedia('(pointer: coarse)').matches) {
      lenis.destroy();
      lenis = null;
    }
  }

  /* ════════════════════════════════════════════
     4. CUSTOM MAGNETIC CURSOR
  ════════════════════════════════════════════ */
  const cursorDot  = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  let cx = 0, cy = 0;
  let rx = 0, ry = 0;
  // Only run cursor on non-touch devices
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  if (!isTouch) {
    document.addEventListener('mousemove', (e) => {
      cx = e.clientX; cy = e.clientY;
      // Dot follows instantly (hardware-smooth)
      cursorDot.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
    });
  }

  function animateRing() {
    if (!isTouch) {
      // Ring follows with gentle lag (lerp 0.09 = silky smooth)
      rx += (cx - rx) * 0.09;
      ry += (cy - ry) * 0.09;
      cursorRing.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
    }
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effects
  const hoverTargets = document.querySelectorAll('a, button, .magnetic, .social-link, .cert-card, .bento-card, .dnav-dot, .psnav-dot');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // Magnetic effect on .magnetic elements
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left - rect.width / 2;
      const my = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${mx * 0.15}px, ${my * 0.15}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* ════════════════════════════════════════════
     5. NAVBAR SCROLL BEHAVIOUR
  ════════════════════════════════════════════ */
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;
  let scrollTimeout;

  function onScroll() {
    const y = window.scrollY;
    // Scrolled state
    if (y > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    // Hide/show on direction
    if (y > lastScrollY && y > 120) navbar.classList.add('hidden');
    else navbar.classList.remove('hidden');
    lastScrollY = y;

    // Scroll progress
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const prog = docH > 0 ? (y / docH) * 100 : 0;
    document.getElementById('scrollProgress').style.width = prog + '%';

    // Active section dot nav + nav links
    updateActiveDot();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ════════════════════════════════════════════
     6. SECTION TRACKING + DOT NAV
  ════════════════════════════════════════════ */
  const sections   = document.querySelectorAll('.section[data-section]');
  const dotBtns    = document.querySelectorAll('.dnav-dot');
  const navLinks   = document.querySelectorAll('.nav-link');

  function updateActiveDot() {
    let activeId = 'hero';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= window.innerHeight * 0.4) activeId = sec.dataset.section;
    });
    dotBtns.forEach(d => d.classList.toggle('active', d.dataset.target === activeId));
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === activeId));
  }

  // Dot click → smooth scroll to section
  dotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(btn.dataset.target);
      if (el) {
        if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.5 });
        else el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Nav links smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
          else el.scrollIntoView({ behavior: 'smooth' });
          // Close mobile nav
          document.getElementById('navLinks').classList.remove('open');
          document.body.classList.remove('nav-open');
        }
      }
    });
  });

  // Logo scroll to top
  document.getElementById('nav-logo').addEventListener('click', (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ════════════════════════════════════════════
     7. MOBILE NAV TOGGLE
  ════════════════════════════════════════════ */
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinksEl.classList.toggle('open');
    document.body.classList.toggle('nav-open', open);
  });

  /* ════════════════════════════════════════════
     8. ROLE ROTATOR (HERO TYPEWRITER)
  ════════════════════════════════════════════ */
  const roleItems = document.querySelectorAll('.role-item');
  let roleIdx = 0;
  function rotateRole() {
    roleItems[roleIdx].classList.remove('active');
    roleItems[roleIdx].classList.add('out');
    setTimeout(() => roleItems[roleIdx].classList.remove('out'), 600);
    roleIdx = (roleIdx + 1) % roleItems.length;
    roleItems[roleIdx].classList.add('active');
  }
  setInterval(rotateRole, 2800);

  /* ════════════════════════════════════════════
     9. ANIMATED STAT COUNTERS (ABOUT SECTION)
  ════════════════════════════════════════════ */
  function animateCounter(el, target, duration = 1400) {
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const statEls = document.querySelectorAll('.stat-num[data-count]');
  let statsAnimated = false;
  function checkStats() {
    if (statsAnimated) return;
    const aboutSec = document.getElementById('about');
    if (!aboutSec) return;
    const rect = aboutSec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      statsAnimated = true;
      statEls.forEach(el => {
        animateCounter(el, parseInt(el.dataset.count), 1200);
      });
    }
  }
  window.addEventListener('scroll', checkStats, { passive: true });

  /* ════════════════════════════════════════════
     10. SCROLL REVEAL (INTERSECTION OBSERVER)
  ════════════════════════════════════════════ */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .bento-card, .cert-card, .skill-cat-card, .rb-item, .social-link, .resume-download-card, .resume-highlights');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger for bento cards
        const delay = entry.target.style.getPropertyValue('--delay') || '0s';
        entry.target.style.transitionDelay = delay;
        entry.target.classList.add('in');
        // Also add .in for card types not using reveal-* classes
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach((el, i) => {
    // Cards get stagger delays
    if (el.matches('.bento-card, .cert-card')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ${i * 0.08}s ease, transform 0.6s ${i * 0.08}s ease`;
    } else if (el.matches('.social-link')) {
      el.style.opacity = '0';
      el.style.transform = 'translateX(30px)';
      el.style.transition = `opacity 0.5s ${i * 0.1}s ease, transform 0.5s ${i * 0.1}s ease`;
    } else if (el.matches('.rb-item, .resume-download-card, .resume-highlights')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
    } else if (el.matches('.skill-cat-card')) {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-24px)';
      el.style.transition = `opacity 0.5s ${i * 0.1}s ease, transform 0.5s ${i * 0.1}s ease`;
    }
    revealObserver.observe(el);
  });

  /* ════════════════════════════════════════════
     11. PROJECTS SECTION — STICKY SCROLL SLIDES
  ════════════════════════════════════════════ */
  const projSection   = document.getElementById('projects');
  const projSlides    = document.getElementById('projSlides');
  const projSidenav   = document.getElementById('projSidenav');
  const projCurrent   = document.getElementById('projCurrent');
  const projArrowUp   = document.getElementById('projArrowUp');
  const projArrowDown = document.getElementById('projArrowDown');
  const psnDots       = document.querySelectorAll('.psnav-dot');
  const TOTAL_SLIDES  = 6;

  let currentSlide  = 0;
  let slideAnimating = false;

  function showSlide(idx, fromScroll = false) {
    if (idx < 0 || idx >= TOTAL_SLIDES) return;
    if (slideAnimating && !fromScroll) return;
    slideAnimating = true;
    currentSlide = idx;

    // Move track
    projSlides.style.transform = `translateY(-${idx * 100}vh)`;

    // Update counter
    projCurrent.textContent = idx === 0 ? '00' : String(idx).padStart(2, '0');

    // Update sidenav dots
    psnDots.forEach((d, i) => d.classList.toggle('active', i === idx));

    // Update arrow visibility
    projArrowUp.style.opacity   = idx === 0 ? '0.3' : '1';
    projArrowDown.style.opacity = idx === TOTAL_SLIDES - 1 ? '0.3' : '1';

    setTimeout(() => { slideAnimating = false; }, 750);
  }

  // Arrow buttons
  projArrowDown.addEventListener('click', () => {
    if (currentSlide < TOTAL_SLIDES - 1) showSlide(currentSlide + 1);
  });
  projArrowUp.addEventListener('click', () => {
    if (currentSlide > 0) showSlide(currentSlide - 1);
  });

  // Sidenav dot clicks
  psnDots.forEach(dot => {
    dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.proj)));
  });

  // Keyboard arrow keys
  document.addEventListener('keydown', (e) => {
    const projRect = projSection.getBoundingClientRect();
    const inProj = projRect.top <= 0 && projRect.bottom >= window.innerHeight;
    if (!inProj) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (currentSlide < TOTAL_SLIDES - 1) showSlide(currentSlide + 1);
      else if (lenis) lenis.scrollTo(document.getElementById('certs'), { duration: 1.2 });
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentSlide > 0) showSlide(currentSlide - 1);
      else if (lenis) lenis.scrollTo(document.getElementById('skills'), { duration: 1.2 });
    }
  });

  // Scroll-based slide advancement using ScrollTrigger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const idx = Math.min(Math.floor(self.progress * TOTAL_SLIDES), TOTAL_SLIDES - 1);
        if (idx !== currentSlide) showSlide(idx, true);
      }
    });
  } else {
    // Fallback: manual scroll tracking
    window.addEventListener('scroll', () => {
      if (!projSection) return;
      const rect = projSection.getBoundingClientRect();
      const secH = projSection.offsetHeight;
      const scrolledIntoSec = -rect.top;
      if (scrolledIntoSec < 0 || scrolledIntoSec > secH) return;
      const progress = scrolledIntoSec / secH;
      const idx = Math.min(Math.floor(progress * TOTAL_SLIDES), TOTAL_SLIDES - 1);
      if (idx !== currentSlide) showSlide(idx, true);
    }, { passive: true });
  }

  /* ════════════════════════════════════════════
     12. SKILLS SPHERE CANVAS (2D particle sphere)
  ════════════════════════════════════════════ */
  function initSkillsSphere() {
    const canvas = document.getElementById('skillsSphereCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const techs = [
      { label: '🐍 Python',      color: '#3776AB' },
      { label: '⚛️ React',       color: '#61DAFB' },
      { label: '⚡ JavaScript',  color: '#F7DF1E' },
      { label: '🧠 TensorFlow',  color: '#FF6F00' },
      { label: '🟢 Node.js',     color: '#339933' },
      { label: '🍃 MongoDB',     color: '#47A248' },
      { label: '🔥 PyTorch',     color: '#EE4C2C' },
      { label: '🌐 Flask',       color: '#a8d8a8' },
      { label: '⑂ Git',         color: '#F05032' },
      { label: '👁 OpenCV',      color: '#5C3EE8' },
      { label: '🗄 SQL',         color: '#00aeff' },
      { label: 'C++ C++',        color: '#00599C' },
    ];

    const N = techs.length;
    const points = techs.map((t, i) => {
      const phi   = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      return { ...t, phi, theta, scale: 1 };
    });

    let W, H, cx, cy, R, rot = 0;
    function resize() {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      cx = W / 2; cy = H / 2;
      R  = Math.min(W, H) * 0.38;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      rot += 0.004;

      // Sort by z for painter's algorithm
      const projected = points.map(p => {
        const x3d = R * Math.sin(p.phi) * Math.cos(p.theta + rot);
        const y3d = R * Math.cos(p.phi);
        const z3d = R * Math.sin(p.phi) * Math.sin(p.theta + rot);
        const scale = (z3d + R * 1.5) / (R * 2.5);
        return { ...p, px: cx + x3d, py: cy + y3d, z3d, scale };
      }).sort((a, b) => a.z3d - b.z3d);

      projected.forEach(p => {
        const alpha = 0.4 + p.scale * 0.6;
        const sz    = 8 + p.scale * 10;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.px, p.py, sz * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw label
        ctx.font = `${Math.round(10 + p.scale * 4)}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(240,240,240,${alpha * 0.9})`;
        ctx.textAlign = 'center';
        ctx.fillText(p.label, p.px, p.py + sz * 0.4 + 14);
      });

      requestAnimationFrame(draw);
    }
    draw();
  }
  initSkillsSphere();

  /* ════════════════════════════════════════════
     13. GSAP SCROLL ANIMATIONS — RICH VERSION
  ════════════════════════════════════════════ */
  function initAnimations() {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ease1 = 'power3.out';
    const easeBounce = 'back.out(1.8)';

    // ── Hero: scroll hint fade ──
    gsap.to('.hero-scroll-hint', {
      opacity: 0, y: -10,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: '+=150', scrub: true }
    });

    // ── Hero: avatar parallax (floats up slightly as you scroll) ──
    gsap.to('#heroAvatar', {
      y: -60,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
    });

    // ── Hero: text parallax ──
    gsap.to('.hero-left', {
      y: -30,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.2 }
    });

    // ── Hero: stats bar parallax ──
    gsap.to('.hero-stats-bar', {
      y: -20,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
    });

    // ── ABOUT: section tag + title stagger ──
    gsap.fromTo('#about .section-tag',
      { opacity: 0, y: 20, letterSpacing: '6px' },
      { opacity: 1, y: 0, letterSpacing: '3px', duration: 0.7, ease: ease1,
        scrollTrigger: { trigger: '#about', start: 'top 82%' }
      }
    );
    gsap.fromTo('#about .section-title',
      { opacity: 0, y: 50, skewX: -2 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.9, ease: ease1,
        scrollTrigger: { trigger: '#about', start: 'top 78%' }
      }
    );
    // Bento cards stagger
    gsap.fromTo('.bento-card',
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1,
        duration: 0.65, ease: easeBounce, stagger: 0.1,
        scrollTrigger: { trigger: '.about-bento', start: 'top 80%' }
      }
    );

    // ── SKILLS ──
    gsap.fromTo('#skills .section-tag',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: ease1,
        scrollTrigger: { trigger: '#skills', start: 'top 82%' }
      }
    );
    gsap.fromTo('#skills .section-title',
      { opacity: 0, y: 50, skewX: -2 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.9, ease: ease1,
        scrollTrigger: { trigger: '#skills', start: 'top 78%' }
      }
    );
    gsap.fromTo('#skillsSphereWrap',
      { opacity: 0, scale: 0.75, rotationY: -15 },
      { opacity: 1, scale: 1, rotationY: 0, duration: 1.1, ease: easeBounce,
        scrollTrigger: { trigger: '#skills', start: 'top 72%' }
      }
    );
    gsap.fromTo('.skill-cat-card',
      { opacity: 0, x: -36 },
      { opacity: 1, x: 0, duration: 0.6, ease: ease1, stagger: 0.13,
        scrollTrigger: { trigger: '.skills-cats', start: 'top 82%' }
      }
    );
    gsap.fromTo('.tech-marquee-wrap',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: ease1,
        scrollTrigger: { trigger: '.tech-marquee-wrap', start: 'top 88%' }
      }
    );

    // ── PROJECTS: slide-intro reveal ──
    gsap.fromTo('.slide-intro-content',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: ease1,
        scrollTrigger: { trigger: '#projects', start: 'top 80%' }
      }
    );

    // ── CERTS ──
    gsap.fromTo('#certs .section-tag',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: ease1,
        scrollTrigger: { trigger: '#certs', start: 'top 82%' }
      }
    );
    gsap.fromTo('#certs .section-title',
      { opacity: 0, y: 50, skewX: -2 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.9, ease: ease1,
        scrollTrigger: { trigger: '#certs', start: 'top 78%' }
      }
    );
    gsap.fromTo('.cert-card',
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1,
        duration: 0.75, ease: easeBounce, stagger: 0.18,
        scrollTrigger: { trigger: '.cert-grid', start: 'top 80%' }
      }
    );

    // ── RESUME ──
    gsap.fromTo('#resume .section-tag',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: ease1,
        scrollTrigger: { trigger: '#resume', start: 'top 82%' }
      }
    );
    gsap.fromTo('#resume .section-title',
      { opacity: 0, y: 50, skewX: -2 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.9, ease: ease1,
        scrollTrigger: { trigger: '#resume', start: 'top 78%' }
      }
    );
    gsap.fromTo('.rb-item',
      { opacity: 0, x: -24 },
      { opacity: 1, x: 0, duration: 0.55, ease: ease1, stagger: 0.1,
        scrollTrigger: { trigger: '.resume-layout', start: 'top 80%' }
      }
    );
    gsap.fromTo('.resume-download-card',
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: easeBounce,
        scrollTrigger: { trigger: '.resume-right', start: 'top 80%' }
      }
    );
    gsap.fromTo('.resume-highlights',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, ease: ease1, delay: 0.2,
        scrollTrigger: { trigger: '.resume-right', start: 'top 80%' }
      }
    );

    // ── CONTACT ──
    gsap.fromTo('#contact .section-tag',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: ease1,
        scrollTrigger: { trigger: '#contact', start: 'top 82%' }
      }
    );
    gsap.fromTo('#contact .section-title',
      { opacity: 0, y: 50, skewX: -2 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.9, ease: ease1,
        scrollTrigger: { trigger: '#contact', start: 'top 78%' }
      }
    );
    gsap.fromTo('.contact-lead, .contact-email-block, .contact-edu-block, .contact-cta',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.65, ease: ease1, stagger: 0.12,
        scrollTrigger: { trigger: '.contact-left', start: 'top 78%' }
      }
    );
    gsap.fromTo('.social-link',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.6, ease: easeBounce, stagger: 0.12,
        scrollTrigger: { trigger: '.contact-right', start: 'top 80%' }
      }
    );

    // ── 3D CARD TILT (desktop only) ──
    if (!window.matchMedia('(pointer: coarse)').matches) {
      const tiltCards = document.querySelectorAll('.bento-card, .cert-card, .resume-download-card');
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect();
          const mx = (e.clientX - r.left) / r.width  - 0.5;  // -0.5 to +0.5
          const my = (e.clientY - r.top)  / r.height - 0.5;
          gsap.to(card, {
            rotationY:   mx * 8,
            rotationX:  -my * 8,
            transformPerspective: 800,
            ease: 'power2.out',
            duration: 0.4,
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationY: 0, rotationX: 0,
            ease: 'elastic.out(1, 0.5)',
            duration: 0.8,
          });
        });
      });

      // Social links slide-tilt
      document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mousemove', (e) => {
          const r = link.getBoundingClientRect();
          const mx = (e.clientX - r.left) / r.width - 0.5;
          gsap.to(link, { rotationY: mx * 6, transformPerspective: 600, duration: 0.35, ease: 'power2.out' });
        });
        link.addEventListener('mouseleave', () => {
          gsap.to(link, { rotationY: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        });
      });
    }
  }


  /* ════════════════════════════════════════════
     14. ANCHOR SCROLL — hero scroll hint
  ════════════════════════════════════════════ */
  document.querySelector('.hero-scroll-hint')?.addEventListener('click', () => {
    const about = document.getElementById('about');
    if (about) {
      if (lenis) lenis.scrollTo(about, { duration: 1.4 });
      else about.scrollIntoView({ behavior: 'smooth' });
    }
  });

  /* ════════════════════════════════════════════
     15. COPY EMAIL ON CLICK
  ════════════════════════════════════════════ */
  const emailEl = document.getElementById('contact-email');
  if (emailEl) {
    emailEl.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('surenderchoudhary07072004@gmail.com').then(() => {
        const orig = emailEl.textContent;
        emailEl.textContent = '✓ Copied!';
        emailEl.style.color = 'var(--green)';
        setTimeout(() => {
          emailEl.textContent = orig;
          emailEl.style.color = '';
        }, 2000);
      }).catch(() => {
        window.location.href = 'mailto:surenderchoudhary07072004@gmail.com';
      });
    });
  }

  /* ════════════════════════════════════════════
     16. PAGE VISIBILITY — pause galaxy when hidden
  ════════════════════════════════════════════ */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && lenis) lenis.stop();
    else if (lenis) lenis.start();
  });

  /* ════════════════════════════════════════════
     17. INITIAL STATE SETUP
  ════════════════════════════════════════════ */
  showSlide(0, true);
  projArrowUp.style.opacity = '0.3';

  /* ════════════════════════════════════════════
     18. BYTE — SPEAKING ROBOT GUIDE
  ════════════════════════════════════════════ */
  const rGuide  = document.getElementById('rGuide');
  const rBubble = document.getElementById('rBubble');
  const rText   = document.getElementById('rText');
  const rChar   = document.getElementById('rChar');
  const rMuteBtn = document.getElementById('rMute');
  const rCloseBtn = document.getElementById('rClose');

  // ── Section scripts (what Byte says on each section) ──
  const BYTE_SCRIPTS = {
    hero: "Hey there! I'm Byte 👋 — Surender's personal AI guide. Welcome to his award-winning portfolio! Surender is a Data Scientist, Machine Learning Engineer, and Full-Stack Developer currently in his 7th semester of B.Tech AI and Data Science at MITRC. Scroll down and I'll guide you through everything!",
    about: "Great, you're on the About section! Surender is a passionate AI and Data Science student from MITRC, Alwar. He specializes in Machine Learning, Computer Vision, and Full-Stack Web Development. He's seeking internship and job opportunities, and he's currently open to exciting collaborations. He loves building things that blend intelligence with beautiful interfaces!",
    skills: "Now we're in the Skills section! Surender's tech arsenal is seriously impressive. He codes in Python, JavaScript, and C++. On the AI side, he uses TensorFlow, PyTorch, scikit-learn, and OpenCV. For web development, he's proficient in React, Node.js, Express, and MongoDB. He's a full-spectrum engineer across three domains — Machine Learning, Computer Vision, and Full-Stack!",
    projects: "Welcome to Surender's Projects! He has built 5 featured projects. First is TaskFlow — a full-stack MERN task manager with Kanban boards. Second is PlayStore Pulse — an ML app predicting app ratings using Random Forest. Third is an Emotion Classifier using YOLOv8 and PyTorch with real-time face detection. Fourth is a Hand Gesture Virtual Mouse using MediaPipe for touchless control. And fifth is a Dual-Model Text Summarizer using transformer models. Scroll to explore each one!",
    certs: "These are Surender's Certifications! He completed a Data Science Internship at CODSOFT, where he worked on NLP and machine learning projects using Python and scikit-learn. He also completed a Full-Stack MERN Internship at Web Stack Academy, building complete web applications with React, Node.js, and MongoDB. Both certifications demonstrate his real-world experience!",
    resume: "Here's Surender's Resume section! You can download his complete resume with one click. It includes his full education background at MITRC Alwar, his internship experiences at CODSOFT and Web Stack Academy, all five of his major projects, and his complete tech skill set. Don't miss it!",
    contact: "You've reached the Contact section — the end of the tour! If you'd like to work with Surender, connect with him on GitHub at Surender 7 0 7, on LinkedIn, or drop him an email. He's actively looking for internship and job opportunities in AI, Machine Learning, and Full-Stack development. Don't be a stranger — say hello!"
  };

  let robotMuted    = false;
  let robotClosed   = false;
  let currentUtter  = null;
  let activeSec     = 'hero';
  let spokenSections = new Set();
  let typeTimer     = null;

  // ── Voice: pick best male voice ──
  function getMaleVoice() {
    const voices = window.speechSynthesis.getVoices();
    // Prefer UK / US male voices
    const preferred = ['Google UK English Male', 'Microsoft David Desktop', 'Microsoft Mark Desktop',
                       'Google US English', 'en-GB', 'en-US'];
    for (const name of preferred) {
      const v = voices.find(v => v.name.includes(name) || v.lang === name);
      if (v) return v;
    }
    // Fallback: any English male-sounding voice
    return voices.find(v => v.lang.startsWith('en') && !v.name.toLowerCase().includes('female'))
      || voices[0] || null;
  }

  // ── Typewriter effect ──
  function typeWrite(msg, onDone) {
    clearTimeout(typeTimer);
    rText.textContent = '';
    let i = 0;
    const words = msg.split(' ');
    function nextWord() {
      if (i < words.length) {
        rText.textContent += (i === 0 ? '' : ' ') + words[i];
        i++;
        typeTimer = setTimeout(nextWord, 65);
      } else { if (onDone) onDone(); }
    }
    nextWord();
  }

  // ── Speak a message ──
  function byteSpeak(msg) {
    if (robotClosed) return;
    // Show bubble
    rBubble.classList.remove('r-hidden');
    // Typewriter
    typeWrite(msg);
    // Stop any prior speech
    window.speechSynthesis.cancel();
    if (robotMuted) {
      rChar.classList.remove('r-speaking');
      return;
    }
    const utter = new SpeechSynthesisUtterance(msg);
    utter.rate   = 0.95;
    utter.pitch  = 0.85;
    utter.volume = 1;
    const voice = getMaleVoice();
    if (voice) utter.voice = voice;
    utter.onstart = () => rChar.classList.add('r-speaking');
    utter.onend   = () => rChar.classList.remove('r-speaking');
    utter.onerror = () => rChar.classList.remove('r-speaking');
    currentUtter = utter;
    // Small delay to let voices load
    setTimeout(() => window.speechSynthesis.speak(utter), 200);
  }

  // ── Section change handler ──
  function byteSectionChange(secId) {
    if (secId === activeSec && spokenSections.has(secId)) return;
    activeSec = secId;
    if (spokenSections.has(secId)) return; // only speak once per section per visit
    spokenSections.add(secId);
    const msg = BYTE_SCRIPTS[secId];
    if (msg) byteSpeak(msg);
  }

  // ── Watch active section via IntersectionObserver ──
  const robotObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.dataset.section;
        if (id) byteSectionChange(id);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.section[data-section]').forEach(s => robotObserver.observe(s));

  // ── Mute / Unmute ──
  rMuteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    robotMuted = !robotMuted;
    rMuteBtn.textContent = robotMuted ? '🔇' : '🔊';
    if (robotMuted) {
      window.speechSynthesis.cancel();
      rChar.classList.remove('r-speaking');
    } else {
      // Re-speak current section
      spokenSections.delete(activeSec);
      byteSectionChange(activeSec);
    }
  });

  // ── Close guide ──
  rCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    robotClosed = true;
    window.speechSynthesis.cancel();
    rChar.classList.remove('r-speaking');
    rGuide.classList.add('r-hidden');
  });

  // ── Click robot to replay current section ──
  rChar.addEventListener('click', () => {
    if (robotClosed) return;
    spokenSections.delete(activeSec);
    byteSectionChange(activeSec);
  });
  rChar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      spokenSections.delete(activeSec);
      byteSectionChange(activeSec);
    }
  });

  // ── Load voices asynchronously ──
  window.speechSynthesis.onvoiceschanged = () => { /* voices now available */ };

  // ── Greet after preloader finishes (hero speech) ──
  // Wait 2s for preloader, then speak hero
  setTimeout(() => {
    if (!robotClosed) byteSectionChange('hero');
  }, 3200);

}); // end DOMContentLoaded
