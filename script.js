/* ═══════════════════════════════════════════════════════════════════
   SURENDER SINGH — PORTFOLIO SCRIPT
   World-class 3D Cinematic Portfolio
   Features: Three.js Galaxy • Three.js Skills Sphere • Lenis Smooth Scroll
             GSAP ScrollTrigger Reveals • Magnetic Cursor • 3D Card Tilt
             Preloader • Physics Orbs • Role Rotator • Stat Counters
═══════════════════════════════════════════════════════════════════ */
'use strict';

/* ─── GSAP PLUGIN REGISTRATION ─────────────────────────────────── */
gsap.registerPlugin(ScrollTrigger);

/* ─── GLOBALS ───────────────────────────────────────────────────── */
let lenis;
let galaxyRAF;

/* ═══════════════════════════════════════════════════════════════
   1. PRELOADER
═══════════════════════════════════════════════════════════════ */
function initPreloader() {
    return new Promise(resolve => {
        const preloader  = document.getElementById('preloader');
        const counter    = document.getElementById('preloaderCount');
        const fill       = document.getElementById('preloaderFill');
        const label      = document.getElementById('preloaderLabel');

        const labels = ['INITIALIZING', 'LOADING ASSETS', 'BUILDING 3D SPACE', 'READY'];
        let count = 0;
        const totalDuration = 2400; // ms
        const stepMs = totalDuration / 100;

        const timer = setInterval(() => {
            count++;
            if (counter) counter.textContent = count;
            if (fill)    fill.style.width = count + '%';

            if (label) {
                if (count < 25)  label.textContent = labels[0];
                else if (count < 60) label.textContent = labels[1];
                else if (count < 85) label.textContent = labels[2];
                else             label.textContent = labels[3];
            }

            if (count >= 100) {
                clearInterval(timer);
                setTimeout(() => {
                    gsap.timeline()
                        .to('.preloader-inner', { opacity:0, y:-20, duration:.5, ease:'power2.in' })
                        .to(preloader, {
                            scaleY: 0,
                            transformOrigin: 'top',
                            duration: .8,
                            ease: 'power4.inOut',
                            onComplete: () => {
                                preloader.style.display = 'none';
                                resolve();
                            }
                        });
                }, 300);
            }
        }, stepMs);
    });
}

/* ═══════════════════════════════════════════════════════════════
   2. THREE.JS GOLDEN BLACK HOLE  — Large · Natural · 3-D
   Event horizon · glow shells · accretion disk (22 k pts) ·
   gravitational lensing arcs · photon ring · jets · star field
═══════════════════════════════════════════════════════════════ */
function initGalaxy() {
    const canvas = document.getElementById('galaxyCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();

    /* ── Camera — lower angle, closer → feels larger & immersive ── */
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(1.5, 3.2, 8.5);
    camera.lookAt(0.5, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* ── Root group — offset right so hero text isn't blocked ── */
    const bhGroup = new THREE.Group();
    bhGroup.position.x = 1.2;
    scene.add(bhGroup);

    /* ═══════════════════════
       A.  EVENT HORIZON
    ═══════════════════════ */
    const EH_R = 1.6;
    bhGroup.add(new THREE.Mesh(
        new THREE.SphereGeometry(EH_R, 96, 96),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    ));

    /* ═══════════════════════
       B.  GLOW SHELLS
       Layered BackSide spheres produce the warm
       orange-gold photon halo that spills outward.
    ═══════════════════════ */
    [
        { r: EH_R * 1.08, op: 0.45, color: 0xFFCC00 },
        { r: EH_R * 1.20, op: 0.22, color: 0xFFAA00 },
        { r: EH_R * 1.50, op: 0.10, color: 0xFF8800 },
        { r: EH_R * 2.10, op: 0.05, color: 0xFFCC55 },
        { r: EH_R * 3.20, op: 0.02, color: 0xFFDD88 },
    ].forEach(({ r, op, color }) => {
        bhGroup.add(new THREE.Mesh(
            new THREE.SphereGeometry(r, 48, 48),
            new THREE.MeshBasicMaterial({
                color, transparent: true, opacity: op,
                side: THREE.BackSide, depthWrite: false,
                blending: THREE.AdditiveBlending
            })
        ));
    });

    /* ═══════════════════════
       C.  ACCRETION DISK
       22 000 particles · 22° tilt
       Palette: white-hot core → gold → amber → deep orange → ember
    ═══════════════════════ */
    const diskGroup = new THREE.Group();
    diskGroup.rotation.x = THREE.MathUtils.degToRad(22);
    bhGroup.add(diskGroup);

    const DISK_N  = 22000;
    const INNER_R = EH_R * 1.12;
    const OUTER_R = 11.5;

    const pal = [
        new THREE.Color('#FFFFFF'),   // 0 – white-hot inner
        new THREE.Color('#FFFACD'),   // 1 – lemon-white
        new THREE.Color('#FFE566'),   // 2 – warm white-gold
        new THREE.Color('#FFD700'),   // 3 – pure gold
        new THREE.Color('#FFB300'),   // 4 – amber
        new THREE.Color('#FF8C00'),   // 5 – deep gold-orange
        new THREE.Color('#FF5500'),   // 6 – outer orange
        new THREE.Color('#6B1A00'),   // 7 – distant ember
    ];

    const dPos = new Float32Array(DISK_N * 3);
    const dCol = new Float32Array(DISK_N * 3);
    const dSiz = new Float32Array(DISK_N);

    for (let i = 0; i < DISK_N; i++) {
        /* Quadratic bias → dense inner ring, sparse outer */
        const t   = Math.pow(Math.random(), 2.4);
        const r   = INNER_R + t * (OUTER_R - INNER_R);
        const ang = Math.random() * Math.PI * 2;

        /* Gaussian vertical scatter — thin near BH, flares outward */
        const sigma = 0.05 + t * 0.22;
        const y     = (Math.random() - 0.5) * sigma * 2.5 *
                      (1 - Math.exp(-r / (OUTER_R * 0.15)));

        /* Slight radial scatter for texture */
        const jit = (Math.random() - 0.5) * 0.09 * (0.2 + t);

        dPos[i * 3]     = (r + jit) * Math.cos(ang);
        dPos[i * 3 + 1] = y;
        dPos[i * 3 + 2] = (r + jit) * Math.sin(ang);

        /* Interpolate palette */
        const ct  = t * (pal.length - 1);
        const cLo = Math.floor(ct);
        const cHi = Math.min(cLo + 1, pal.length - 1);
        const col = pal[cLo].clone().lerp(pal[cHi], ct - cLo);

        /* Inner-edge brightness burst */
        const boost  = t < 0.06 ? 2.2 : t < 0.15 ? 1.4 : 1.0;
        const bright = (0.5 + Math.random() * 0.5) * boost;

        dCol[i * 3]     = Math.min(col.r * bright, 1);
        dCol[i * 3 + 1] = Math.min(col.g * bright, 1);
        dCol[i * 3 + 2] = Math.min(col.b * bright, 1);

        /* Larger points near the bright inner edge */
        dSiz[i] = t < 0.12 ? 0.05 : 0.03;
    }

    const diskGeom = new THREE.BufferGeometry();
    diskGeom.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    diskGeom.setAttribute('color',    new THREE.BufferAttribute(dCol, 3));
    const disk = new THREE.Points(diskGeom, new THREE.PointsMaterial({
        size: 0.038, vertexColors: true, transparent: true, opacity: 0.97,
        blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    }));
    diskGroup.add(disk);

    /* ═══════════════════════
       D.  PHOTON RING (torus)
       Sharp bright ring right at the event horizon edge.
    ═══════════════════════ */
    diskGroup.add(new THREE.Mesh(
        new THREE.TorusGeometry(INNER_R, 0.038, 12, 200),
        new THREE.MeshBasicMaterial({
            color: 0xFFEE44, transparent: true, opacity: 0.98,
            blending: THREE.AdditiveBlending, depthWrite: false
        })
    ));
    /* Softer outer halo ring */
    diskGroup.add(new THREE.Mesh(
        new THREE.TorusGeometry(INNER_R * 1.22, 0.016, 8, 200),
        new THREE.MeshBasicMaterial({
            color: 0xFFAA22, transparent: true, opacity: 0.55,
            blending: THREE.AdditiveBlending, depthWrite: false
        })
    ));

    /* ═══════════════════════
       E.  GRAVITATIONAL LENSING ARCS
       The "back" of the disk appears bent above & below
       the event horizon — the iconic Interstellar look.
    ═══════════════════════ */
    const LENS_N = 3500;
    const lPos   = new Float32Array(LENS_N * 3);
    const lCol   = new Float32Array(LENS_N * 3);

    for (let i = 0; i < LENS_N; i++) {
        const topArc  = i < LENS_N / 2;
        /* Only sample the "back" half of the disk (π .. 2π) */
        const ang = Math.PI + Math.random() * Math.PI;
        /* Tight ring close to event horizon */
        const r   = INNER_R + Math.pow(Math.random(), 2.5) * (INNER_R * 1.6);
        /* Lensing lifts particles away from disk plane */
        const liftBase   = 0.18 + (1 - r / (INNER_R * 2.5)) * 0.9;
        const liftScatter = Math.random() * 0.25;
        const y = (topArc ? 1 : -1) * (liftBase + liftScatter);

        lPos[i * 3]     = r * Math.cos(ang);
        lPos[i * 3 + 1] = y;
        lPos[i * 3 + 2] = r * Math.sin(ang);

        const lc = new THREE.Color('#FFD700').lerp(new THREE.Color('#FF8800'), Math.random() * 0.7);
        const lb = 0.35 + Math.random() * 0.55;
        lCol[i * 3]     = Math.min(lc.r * lb, 1);
        lCol[i * 3 + 1] = Math.min(lc.g * lb, 1);
        lCol[i * 3 + 2] = Math.min(lc.b * lb, 1);
    }

    const lensGeom = new THREE.BufferGeometry();
    lensGeom.setAttribute('position', new THREE.BufferAttribute(lPos, 3));
    lensGeom.setAttribute('color',    new THREE.BufferAttribute(lCol, 3));
    /* Lensing arcs rotate in the same plane as the disk */
    const lensPoints = new THREE.Points(lensGeom, new THREE.PointsMaterial({
        size: 0.034, vertexColors: true, transparent: true, opacity: 0.82,
        blending: THREE.AdditiveBlending, depthWrite: false
    }));
    diskGroup.add(lensPoints);

    /* ═══════════════════════
       F.  RELATIVISTIC JETS
       Golden polar beams, wider base, longer reach.
    ═══════════════════════ */
    const JET_N = 1800;
    const jPos  = new Float32Array(JET_N * 3);
    const jCol  = new Float32Array(JET_N * 3);
    for (let i = 0; i < JET_N; i++) {
        const up  = i < JET_N / 2 ? 1 : -1;
        const t   = Math.random();
        const yy  = up * (EH_R * 1.05 + t * 13.0);
        const rr  = (0.05 + (1 - t) * 0.22) * Math.random();
        const aa  = Math.random() * Math.PI * 2;
        jPos[i * 3]     = rr * Math.cos(aa);
        jPos[i * 3 + 1] = yy;
        jPos[i * 3 + 2] = rr * Math.sin(aa);

        const jC = new THREE.Color('#FFE066').lerp(new THREE.Color('#FF7700'), t * 0.85);
        const jB = (1 - t * 0.7) * (0.45 + Math.random() * 0.55);
        jCol[i * 3]     = Math.min(jC.r * jB, 1);
        jCol[i * 3 + 1] = Math.min(jC.g * jB, 1);
        jCol[i * 3 + 2] = Math.min(jC.b * jB, 1);
    }
    const jetGeom = new THREE.BufferGeometry();
    jetGeom.setAttribute('position', new THREE.BufferAttribute(jPos, 3));
    jetGeom.setAttribute('color',    new THREE.BufferAttribute(jCol, 3));
    bhGroup.add(new THREE.Points(jetGeom, new THREE.PointsMaterial({
        size: 0.06, vertexColors: true, transparent: true, opacity: 0.7,
        blending: THREE.AdditiveBlending, depthWrite: false
    })));

    /* ═══════════════════════
       G.  WARM STAR FIELD
    ═══════════════════════ */
    const STAR_N = 3200;
    const sPos   = new Float32Array(STAR_N * 3);
    const sCol   = new Float32Array(STAR_N * 3);
    for (let i = 0; i < STAR_N; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        const sr    = 60 + Math.random() * 120;
        sPos[i * 3]     = sr * Math.sin(phi) * Math.cos(theta);
        sPos[i * 3 + 1] = sr * Math.sin(phi) * Math.sin(theta);
        sPos[i * 3 + 2] = sr * Math.cos(phi);
        const warm = Math.random() > 0.5;
        sCol[i * 3]     = warm ? 1.0  : 0.85 + Math.random() * 0.15;
        sCol[i * 3 + 1] = warm ? 0.9  : 0.88 + Math.random() * 0.12;
        sCol[i * 3 + 2] = warm ? 0.4  : 0.95 + Math.random() * 0.05;
    }
    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    starGeom.setAttribute('color',    new THREE.BufferAttribute(sCol, 3));
    scene.add(new THREE.Points(starGeom, new THREE.PointsMaterial({
        size: 0.13, vertexColors: true, transparent: true, opacity: 0.6,
        blending: THREE.AdditiveBlending, depthWrite: false
    })));

    /* ── Mouse parallax ── */
    let mX = 0, mY = 0, tRX = 0, tRY = 0;
    document.addEventListener('mousemove', e => {
        mX = (e.clientX / window.innerWidth  - 0.5) * 0.35;
        mY = (e.clientY / window.innerHeight - 0.5) * 0.22;
    });

    /* ── Render loop ── */
    const clock = new THREE.Clock();
    function animateGalaxy() {
        galaxyRAF = requestAnimationFrame(animateGalaxy);
        const elapsed = clock.getElapsedTime();

        /* Disk + lensing arcs rotate together */
        diskGroup.rotation.y = elapsed * 0.16;

        /* Smooth parallax */
        tRX += (mY  - tRX) * 0.02;
        tRY += (mX  - tRY) * 0.02;
        bhGroup.rotation.x = tRX;
        bhGroup.rotation.y = tRY;

        /* Subtle pulse of inner glow opacity */
        const pulse = 0.42 + Math.sin(elapsed * 1.4) * 0.06;
        bhGroup.children[1].material.opacity = pulse; // first glow shell

        renderer.render(scene, camera);
    }
    animateGalaxy();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

/* ═══════════════════════════════════════════════════════════════
   3. SKILLS SPHERE  (no-op on non-skills pages — canvas absent)
═══════════════════════════════════════════════════════════════ */
function initSkillsSphere() {
    /* The actual Three.js sphere is embedded directly in skills.html.
       This stub exists so main() can call it safely on all pages. */
}

/* ═══════════════════════════════════════════════════════════════
   5. CUSTOM CURSOR
═══════════════════════════════════════════════════════════════ */
function initCursor() {
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
        dotX = e.clientX;
        dotY = e.clientY;
        dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
    });

    /* Ring follows with lerp for smooth trailing */
    (function animateRing() {
        ringX += (dotX - ringX) * 0.13;
        ringY += (dotY - ringY) * 0.13;
        ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
        requestAnimationFrame(animateRing);
    })();

    /* Cursor state changes */
    const interactables = document.querySelectorAll(
        'a, button, .btn, .nav-link, .project-card, .social-link, .cert-btn, .tech-orb, .stat-card, .skill-cat'
    );
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
    });

    document.addEventListener('mousedown', () => ring.classList.add('clicking'));
    document.addEventListener('mouseup',   () => ring.classList.remove('clicking'));
    document.addEventListener('mouseleave',() => { dot.classList.add('hidden'); ring.classList.add('hidden'); });
    document.addEventListener('mouseenter',() => { dot.classList.remove('hidden'); ring.classList.remove('hidden'); });
}

/* ═══════════════════════════════════════════════════════════════
   6. HERO ANIMATIONS — text char reveal with GSAP
═══════════════════════════════════════════════════════════════ */
function splitChars(el) {
    const text = el.textContent;
    el.innerHTML = '';
    text.split('').forEach(ch => {
        const span = document.createElement('span');
        span.className = 'char';
        span.style.cssText = 'display:inline-block; overflow:hidden;';
        const inner = document.createElement('span');
        inner.className = 'char-inner';
        inner.style.display = 'inline-block';
        inner.textContent = ch === ' ' ? '\u00a0' : ch;
        span.appendChild(inner);
        el.appendChild(span);
    });
    return el.querySelectorAll('.char-inner');
}

function animateHero() {
    const line1 = document.getElementById('heroLine1');
    const line2 = document.getElementById('heroLine2');
    const chars1 = line1 ? splitChars(line1) : [];
    const chars2 = line2 ? splitChars(line2) : [];

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-greeting', { opacity:0, y:20, duration:.7 }, 0)
      .from(chars1, { y:'110%', opacity:0, stagger:.04, duration:.8, ease:'back.out(1.4)' }, .2)
      .from(chars2, { y:'110%', opacity:0, stagger:.04, duration:.8, ease:'back.out(1.4)' }, .35)
      .from('.hero-role-wrapper', { opacity:0, y:20, duration:.6 }, .6)
      .from('.hero-sub',          { opacity:0, y:15, duration:.6 }, .72)
      .from('.hero-actions',      { opacity:0, y:20, duration:.6 }, .84)
      .from('.hero-right',        { opacity:0, x:50, duration:.9 }, .3)
      .from('.hero-scroll-hint',  { opacity:0, duration:.5 }, 1.1);
}

/* ═══════════════════════════════════════════════════════════════
   7. ROLE ROTATOR
═══════════════════════════════════════════════════════════════ */
function initRoleRotator() {
    const items = document.querySelectorAll('.role-item');
    if (!items.length) return;
    let current = 0;
    setInterval(() => {
        items[current].classList.remove('active');
        items[current].classList.add('exiting');
        const prev = current;
        setTimeout(() => items[prev].classList.remove('exiting'), 500);
        current = (current + 1) % items.length;
        items[current].classList.add('active');
    }, 2600);
}

/* ═══════════════════════════════════════════════════════════════
   8. NAVBAR — URL-based active link for multi-page
═══════════════════════════════════════════════════════════════ */
function initNav() {
    const navbar  = document.getElementById('navbar');
    const toggle  = document.getElementById('navToggle');
    const navMenu = document.getElementById('navLinks');
    const links   = document.querySelectorAll('.nav-link');
    const isInner = document.body.classList.contains('page-inner');

    /* On inner pages navbar is always glassmorphic */
    if (isInner && navbar) navbar.classList.add('scrolled');

    /* Scroll updates for hero page only */
    if (!isInner) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
            const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
            const bar = document.getElementById('scrollBar');
            if (bar) bar.style.width = pct + '%';
        }, { passive: true });
    } else {
        window.addEventListener('scroll', () => {
            const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
            const bar = document.getElementById('scrollBar');
            if (bar) bar.style.width = pct + '%';
        }, { passive: true });
    }

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });
        links.forEach(l => l.addEventListener('click', () => {
            if (!l.getAttribute('href').startsWith('#')) {
                toggle.classList.remove('active');
                navMenu.classList.remove('open');
            }
        }));
    }
}

/* ═══════════════════════════════════════════════════════════════
   8b. PAGE TRANSITIONS
═══════════════════════════════════════════════════════════════ */
function initPageTransition() {
    const overlay = document.getElementById('pageOverlay');
    if (!overlay) return;

    /* Fade in on page load */
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.style.pointerEvents = 'none';
            }, 600);
        });
    });

    /* Fade out on internal navigation */
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        /* Skip anchor-only, external, mailto/tel, download links */
        if (href.startsWith('#') || href.startsWith('http') ||
            href.startsWith('mailto') || href.startsWith('tel') ||
            link.hasAttribute('download') || link.target === '_blank') return;

        link.addEventListener('click', e => {
            e.preventDefault();
            overlay.style.pointerEvents = 'all';
            overlay.classList.remove('fade-out');
            setTimeout(() => { window.location.href = href; }, 580);
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   9. GSAP SCROLL REVEALS
═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
    /* Generic reveals */
    ['reveal-up', 'reveal-left', 'reveal-right', 'reveal-scale'].forEach(cls => {
        document.querySelectorAll('.' + cls).forEach(el => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 87%',
                onEnter: () => el.classList.add('revealed'),
                once: true
            });
        });
    });

    /* Stagger children */
    document.querySelectorAll('.stagger-parent').forEach(parent => {
        const children = parent.querySelectorAll('.stagger-child');
        ScrollTrigger.create({
            trigger: parent,
            start: 'top 82%',
            onEnter: () => {
                children.forEach((child, i) => {
                    setTimeout(() => child.classList.add('revealed'), i * 100);
                });
            },
            once: true
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   10. STAT COUNTERS
═══════════════════════════════════════════════════════════════ */
function initCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let triggered = false;

        ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                if (triggered) return;
                triggered = true;
                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 1.8,
                    ease: 'power2.out',
                    onUpdate: function() {
                        el.textContent = Math.round(this.targets()[0].val);
                    }
                });
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   11. PROJECT CARD 3D TILT
═══════════════════════════════════════════════════════════════ */
function initCardTilt() {
    const isMobile = window.matchMedia('(max-width:768px)').matches;
    if (isMobile) return;

    document.querySelectorAll('.project-card').forEach(card => {
        const shine = card.querySelector('.card-shine');

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top)  / rect.height;

            const rotX = (y - 0.5) * -16;
            const rotY = (x - 0.5) *  16;

            gsap.to(card, {
                rotateX: rotX, rotateY: rotY,
                transformPerspective: 800,
                transformOrigin: 'center center',
                duration: .25,
                ease: 'power1.out'
            });

            if (shine) {
                shine.style.opacity = '1';
                shine.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(255,255,255,0.13), transparent 55%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateX:0, rotateY:0, duration:.5, ease:'power2.out' });
            if (shine) shine.style.opacity = '0';
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   12. MAGNETIC BUTTONS
═══════════════════════════════════════════════════════════════ */
function initMagneticButtons() {
    const isMobile = window.matchMedia('(max-width:768px)').matches;
    if (isMobile) return;

    document.querySelectorAll('.btn, .cert-btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width  / 2;
            const y = e.clientY - rect.top  - rect.height / 2;
            gsap.to(btn, { x: x * 0.18, y: y * 0.18, duration:.25, ease:'power1.out' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x:0, y:0, duration:.5, ease:'elastic.out(1, 0.4)' });
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   13. TECH ORBS PHYSICS (skills section)
═══════════════════════════════════════════════════════════════ */
function initOrbsPhysics() {
    const arena     = document.getElementById('orbsArena');
    const container = document.getElementById('orbsContainer');
    if (!arena || !container) return;

    const orbs = [...container.querySelectorAll('.tech-orb')];
    if (!orbs.length) return;

    let W = arena.clientWidth;
    let H = arena.clientHeight;
    const ORB_R = 44; // half of orb width (88px)

    /* Initial positions in a circle */
    const state = orbs.map((_, i) => {
        const angle = (i / orbs.length) * Math.PI * 2;
        const r     = Math.min(W, H) * 0.31;
        const px    = W / 2 + Math.cos(angle) * r;
        const py    = H / 2 + Math.sin(angle) * r * 0.65;
        return { x: px, y: py, vx: (Math.random()-.5)*.5, vy: (Math.random()-.5)*.5, tx: px, ty: py };
    });

    orbs.forEach((orb, i) => {
        orb.style.left = state[i].x + 'px';
        orb.style.top  = state[i].y + 'px';
    });

    let mouseX = -9999, mouseY = -9999;
    arena.addEventListener('mousemove', e => {
        const rect = arena.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });
    arena.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });

    let active = true;
    const observer = new IntersectionObserver(entries => {
        active = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(arena);

    (function tick() {
        requestAnimationFrame(tick);
        if (!active) return;

        orbs.forEach((orb, i) => {
            const s = state[i];

            /* Spring to target */
            s.vx += (s.tx - s.x) * 0.016;
            s.vy += (s.ty - s.y) * 0.016;

            /* Mouse repulsion */
            const mdx = s.x - mouseX;
            const mdy = s.y - mouseY;
            const md  = Math.sqrt(mdx * mdx + mdy * mdy) || 1;
            const repR = 130;
            if (md < repR) {
                const f = ((repR - md) / repR) * 3.2;
                s.vx += (mdx / md) * f;
                s.vy += (mdy / md) * f;
            }

            /* Orb-orb repulsion */
            for (let j = i + 1; j < orbs.length; j++) {
                const sj = state[j];
                const ox  = s.x - sj.x;
                const oy  = s.y - sj.y;
                const od  = Math.sqrt(ox * ox + oy * oy) || 1;
                const minD = ORB_R * 2 + 10;
                if (od < minD) {
                    const f = ((minD - od) / minD) * 0.9;
                    const fx = (ox / od) * f;
                    const fy = (oy / od) * f;
                    s.vx += fx;  s.vy += fy;
                    sj.vx -= fx; sj.vy -= fy;
                }
            }

            /* Damping */
            s.vx *= 0.83;
            s.vy *= 0.83;

            s.x += s.vx;
            s.y += s.vy;

            /* Boundary */
            if (s.x < ORB_R)     { s.x = ORB_R;     s.vx *= -0.4; }
            if (s.x > W - ORB_R) { s.x = W - ORB_R; s.vx *= -0.4; }
            if (s.y < ORB_R)     { s.y = ORB_R;      s.vy *= -0.4; }
            if (s.y > H - ORB_R) { s.y = H - ORB_R;  s.vy *= -0.4; }

            orb.style.left = s.x + 'px';
            orb.style.top  = s.y + 'px';
        });
    })();

    window.addEventListener('resize', () => {
        W = arena.clientWidth;
        H = arena.clientHeight;
        const r = Math.min(W, H) * 0.31;
        state.forEach((s, i) => {
            const angle = (i / orbs.length) * Math.PI * 2;
            s.tx = W / 2 + Math.cos(angle) * r;
            s.ty = H / 2 + Math.sin(angle) * r * 0.65;
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   14. PARALLAX HERO AVATAR on mouse
═══════════════════════════════════════════════════════════════ */
function initHeroParallax() {
    const avatar = document.getElementById('heroAvatar');
    if (!avatar) return;

    document.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth  - 0.5) * 16;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        gsap.to(avatar, { rotateY: x, rotateX: -y, duration:.6, ease:'power1.out', transformPerspective:800 });
    });
}

/* ═══════════════════════════════════════════════════════════════
   15. SCROLL TOP BUTTON
═══════════════════════════════════════════════════════════════ */
function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    btn.addEventListener('click', e => {
        e.preventDefault();
        if (lenis) lenis.scrollTo(0, { duration: 1.5 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ═══════════════════════════════════════════════════════════════
   16. SECTION PARALLAX BACKGROUNDS via ScrollTrigger
═══════════════════════════════════════════════════════════════ */
function initParallax() {
    if (window.matchMedia('(max-width:768px)').matches) return;

    gsap.utils.toArray('.section').forEach(section => {
        const deco = section.querySelector('[class*="3d-deco"]');
        if (!deco) return;
        gsap.to(deco, {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   17. GLITCH HOVER on section titles
═══════════════════════════════════════════════════════════════ */
function initGlitchTitles() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

    document.querySelectorAll('.section-title').forEach(el => {
        const original = el.textContent;
        let timeout;

        el.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            let iter = 0;
            const interval = setInterval(() => {
                el.textContent = original.split('').map((ch, i) => {
                    if (ch === ' ') return ' ';
                    if (i < iter)   return original[i];
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join('');
                if (iter >= original.length) {
                    clearInterval(interval);
                    el.textContent = original;
                }
                iter += 0.5;
            }, 35);
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   18. CURSOR TRAIL (sparkle particles)
═══════════════════════════════════════════════════════════════ */
function initCursorTrail() {
    const isMobile = window.matchMedia('(max-width:768px)').matches;
    if (isMobile) return;

    document.addEventListener('mousemove', e => {
        if (Math.random() > 0.35) return; // throttle
        const dot = document.createElement('div');
        const size = 3 + Math.random() * 4;
        dot.style.cssText = `
            position:fixed; border-radius:50%; pointer-events:none; z-index:99997;
            width:${size}px; height:${size}px;
            background:rgba(0,212,255,${0.3 + Math.random() * 0.4});
            box-shadow:0 0 ${size * 2}px rgba(0,212,255,0.5);
            left:${e.clientX - size/2}px; top:${e.clientY - size/2}px;
            transform:scale(1);
        `;
        document.body.appendChild(dot);
        gsap.to(dot, {
            opacity: 0, scale: 0,
            x: (Math.random() - .5) * 30,
            y: (Math.random() - .5) * 30,
            duration: .5 + Math.random() * .3,
            ease: 'power2.out',
            onComplete: () => dot.remove()
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   19. STAGGERED SECTION HEADING REVEAL
═══════════════════════════════════════════════════════════════ */
function initHeadingReveal() {
    document.querySelectorAll('.section-header').forEach(header => {
        gsap.from(header.querySelector('.section-tag'), {
            opacity: 0, y: 20, duration: .6, ease: 'power2.out',
            scrollTrigger: { trigger: header, start: 'top 85%', once: true }
        });
        gsap.from(header.querySelector('.section-title'), {
            opacity: 0, y: 30, duration: .8, ease: 'power3.out', delay: .15,
            scrollTrigger: { trigger: header, start: 'top 85%', once: true }
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   19. ROBOT GUIDE — Per-Page Speaking Bot
═══════════════════════════════════════════════════════════════ */
function initRobotGuide() {
    const guide  = document.getElementById('rGuide');
    const bubble = document.getElementById('rBubble');
    const rChar  = document.getElementById('rChar');
    const rText  = document.getElementById('rText');
    const rMute  = document.getElementById('rMute');
    const rClose = document.getElementById('rClose');
    const rMouth = document.getElementById('rMouth');
    if (!guide || !rChar) return;

    const scripts = {
        hero:           "Hi there! 👋 I'm your AI guide. This portfolio belongs to Surender Singh — a Data Scientist, ML Engineer, and Full-Stack Developer. Use the dots below or nav links to explore each page!",
        about:          "Welcome to the About page! Surender is a B.Tech AI & Data Science student at MITRC, 7th semester. Passionate about Machine Learning, Computer Vision, and Full-Stack Development — actively seeking internship opportunities!",
        skills:         "Skills page! Surender works with Python, React, TensorFlow, PyTorch, Node.js, MongoDB, and more. Hover the floating orbs to see his full tech stack!",
        projects:       "Work page! 5 featured projects — TaskFlow is a MERN productivity app, PlayStore Pulse uses ML to predict app ratings, plus emotion recognition, hand gesture mouse, and a dual-model text summarizer!",
        resume:         "Resume page! You can download or open Surender's resume directly here. He's skilled and ready for exciting opportunities!",
        certifications: "Certificates page! Surender completed a Data Science internship at CODSOFT and a Full-Stack MERN internship at Web Stack Academy — both in 2026 with wonderful remarks!",
        contact:        "Contact page! Reach Surender on GitHub as Surender707, on LinkedIn as Surender Choudhary, or send him an email. He's always open to new collaborations!"
    };

    let muted = false, bubbleOpen = false, typeInterval = null;
    const synth = window.speechSynthesis || null;
    const currentPage = document.body.dataset.page || 'hero';

    function stopSpeech() {
        if (synth) synth.cancel();
        rChar && rChar.classList.remove('talking');
        rMouth && rMouth.classList.remove('speaking');
    }
    function speak(text) {
        stopSpeech();
        if (muted || !synth) return;
        const utt = new SpeechSynthesisUtterance(text);
        utt.rate = 0.92; utt.pitch = 1.1;
        utt.onstart = () => { rChar && rChar.classList.add('talking'); rMouth && rMouth.classList.add('speaking'); };
        utt.onend = utt.onerror = () => { rChar && rChar.classList.remove('talking'); rMouth && rMouth.classList.remove('speaking'); };
        synth.speak(utt);
    }
    function typeText(text) {
        if (!rText) return;
        if (typeInterval) clearInterval(typeInterval);
        rText.textContent = '';
        let i = 0;
        typeInterval = setInterval(() => {
            rText.textContent += text[i++];
            if (i >= text.length) clearInterval(typeInterval);
        }, 22);
    }
    function openBubble(msg) {
        bubbleOpen = true; bubble.classList.add('visible');
        typeText(msg); speak(msg);
    }
    function closeBubble() {
        bubbleOpen = false; bubble.classList.remove('visible'); stopSpeech();
    }

    /* Click robot character */
    rChar.addEventListener('click', () => {
        if (bubbleOpen) closeBubble();
        else openBubble(scripts[currentPage] || scripts.hero);
    });
    rChar.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') rChar.click(); });
    rMute.addEventListener('click', () => { muted=!muted; rMute.textContent=muted?'🔇':'🔊'; if(muted)stopSpeech(); });
    rClose.addEventListener('click', closeBubble);

    /* Auto greet on each page load */
    const delay = document.body.classList.contains('page-inner') ? 1200 : 3200;
    setTimeout(() => openBubble(scripts[currentPage] || scripts.hero), delay);
}


async function main() {
    /* Wait for DOM */
    await new Promise(r => {
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', r);
        else r();
    });

    const isInner = document.body.classList.contains('page-inner');

    /* Preloader only on hero page; inner pages use overlay fade */
    if (!isInner) {
        await initPreloader();
    }

    /* Page transition overlay (works on all pages) */
    initPageTransition();

    /* Fire everything */
    initLenis();
    initGalaxy();
    initSkillsSphere();
    initCursor();
    initNav();
    initScrollReveal();
    initHeadingReveal();
    initCounters();
    initCardTilt();
    initMagneticButtons();
    initOrbsPhysics();
    initHeroParallax();
    initScrollTop();
    initParallax();
    initGlitchTitles();
    initCursorTrail();
    animateHero();
    initRoleRotator();
    initRobotGuide();

    /* Project slide show (only on projects.html) */
    if (document.body.dataset.page === 'projects') {
        initProjectSlides();
    }

    /* Refresh ScrollTrigger after all reveals are setup */
    ScrollTrigger.refresh();
}

/* ═══════════════════════════════════════════════════════════════
   20. PROJECT SLIDES — Full-screen scroll-snap navigation
═══════════════════════════════════════════════════════════════ */
function initProjectSlides() {
    const wrapper   = document.getElementById('slidesWrapper');
    const dots      = document.querySelectorAll('.ssnav-dot');
    const counter   = document.getElementById('scCurrent');
    const arrowUp   = document.getElementById('slideArrowUp');
    const arrowDown = document.getElementById('slideArrowDown');
    const slides    = document.querySelectorAll('.slide');
    if (!wrapper || !slides.length) return;

    let currentIdx = 0;
    const TOTAL = slides.length - 1; // exclude intro from numbered count

    /* ── Mark active slide and update UI ── */
    function setActive(idx) {
        currentIdx = Math.max(0, Math.min(idx, slides.length - 1));

        /* Active class for CSS entry animations */
        slides.forEach((s, i) => s.classList.toggle('slide-active', i === currentIdx));

        /* Dot nav */
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIdx));

        /* Counter: 00 for intro, 01–05 for projects */
        if (counter) {
            counter.textContent = currentIdx === 0 ? '00' : String(currentIdx).padStart(2, '0');
        }

        /* Up/Down arrow visibility */
        if (arrowUp)   arrowUp.style.opacity   = currentIdx === 0 ? '0.2' : '1';
        if (arrowDown) arrowDown.style.opacity = currentIdx === slides.length - 1 ? '0.2' : '1';
    }

    /* ── Scroll to a specific slide ── */
    function goTo(idx) {
        const target = slides[idx];
        if (!target) return;
        wrapper.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }

    /* ── IntersectionObserver tracks which slide is visible ── */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = parseInt(entry.target.dataset.index ?? '0', 10);
                setActive(idx);
            }
        });
    }, { root: wrapper, threshold: 0.55 });

    slides.forEach(s => observer.observe(s));

    /* ── Dot nav click ── */
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goTo(i));
    });

    /* ── Arrow buttons ── */
    arrowUp?.addEventListener('click',   () => goTo(currentIdx - 1));
    arrowDown?.addEventListener('click', () => goTo(currentIdx + 1));

    /* ── Keyboard navigation ── */
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(currentIdx + 1); }
        if (e.key === 'ArrowUp'   || e.key === 'PageUp'  ) { e.preventDefault(); goTo(currentIdx - 1); }
        if (e.key === 'Home') { e.preventDefault(); goTo(0); }
        if (e.key === 'End')  { e.preventDefault(); goTo(slides.length - 1); }
    });

    /* ── Init first slide ── */
    setActive(0);
}

main();


