(function () {
    'use strict';

    var cursorDot  = document.getElementById('cursorDot');
    var cursorRing = document.getElementById('cursorRing');
    var isDesktop  = window.matchMedia('(pointer: fine)').matches;

    if (cursorDot && cursorRing && isDesktop) {
        var mouseX = window.innerWidth / 2;
        var mouseY = window.innerHeight / 2;
        var ringX = mouseX;
        var ringY = mouseY;
        var dotHalf  = 3.5;
        var ringHalf = 18;
        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });
        document.addEventListener('mouseleave', function () {
            cursorDot.classList.add('hidden');
            cursorRing.style.opacity = '0';
        });
        document.addEventListener('mouseenter', function () {
            cursorDot.classList.remove('hidden');
            cursorRing.style.opacity = '1';
        });
        document.addEventListener('mousedown', function () { cursorRing.classList.add('clicking'); });
        document.addEventListener('mouseup',   function () { cursorRing.classList.remove('clicking'); });
        document.querySelectorAll('a, button, .tech-orb, .stat-card, .skill-cat, .social-link, .skill-tags span, .cert-card, .cert-btn').forEach(function (el) {
            el.addEventListener('mouseenter', function () { cursorRing.classList.add('hovered'); });
            el.addEventListener('mouseleave', function () { cursorRing.classList.remove('hovered'); });
        });
        var LERP = 0.25;
        function tickCursor() {
            cursorDot.style.transform = 'translate3d(' + (mouseX - dotHalf) + 'px,' + (mouseY - dotHalf) + 'px,0)';
            ringX += (mouseX - ringX) * LERP;
            ringY += (mouseY - ringY) * LERP;
            cursorRing.style.transform = 'translate3d(' + (ringX - ringHalf) + 'px,' + (ringY - ringHalf) + 'px,0)';
            requestAnimationFrame(tickCursor);
        }
        tickCursor();
    }

    (function init3DBackground() {
        var canvas = document.getElementById('particleCanvas');
        if (!canvas) return;

        if (typeof THREE === 'undefined') {
            initFallbackParticles(canvas);
            return;
        }

        var isMobile = window.innerWidth < 768;
        var scene    = new THREE.Scene();
        var camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: !isMobile });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        camera.position.z = 35;

        var colors = [0xB8860B, 0xD4A843, 0xE8A317];
        var shapes = [
            new THREE.IcosahedronGeometry(2, 0),
            new THREE.OctahedronGeometry(1.8, 0),
            new THREE.TetrahedronGeometry(2, 0),
            new THREE.DodecahedronGeometry(1.5, 0)
        ];

        var meshes = [];
        var meshCount = isMobile ? 8 : 16;
        for (var i = 0; i < meshCount; i++) {
            var geo = shapes[Math.floor(Math.random() * shapes.length)];
            var mat = new THREE.MeshBasicMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                wireframe: true,
                transparent: true,
                opacity: Math.random() * 0.14 + 0.04
            });
            var mesh = new THREE.Mesh(geo, mat);
            var scale = Math.random() * 0.8 + 0.6;
            mesh.scale.set(scale, scale, scale);
            mesh.position.set(
                (Math.random() - 0.5) * 70,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 25 - 5
            );
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            mesh.userData = {
                rx: (Math.random() - 0.5) * 0.005,
                ry: (Math.random() - 0.5) * 0.005,
                rz: (Math.random() - 0.5) * 0.003,
                floatSpd: Math.random() * 0.4 + 0.2,
                floatOff: Math.random() * Math.PI * 2,
                baseY: mesh.position.y
            };
            scene.add(mesh);
            meshes.push(mesh);
        }

        var ptCount = isMobile ? 60 : 200;
        var ptGeo   = new THREE.BufferGeometry();
        var ptPos   = new Float32Array(ptCount * 3);
        for (var j = 0; j < ptCount * 3; j += 3) {
            ptPos[j]     = (Math.random() - 0.5) * 90;
            ptPos[j + 1] = (Math.random() - 0.5) * 70;
            ptPos[j + 2] = (Math.random() - 0.5) * 50;
        }
        ptGeo.setAttribute('position', new THREE.BufferAttribute(ptPos, 3));
        var ptMat = new THREE.PointsMaterial({
            color: 0xB8860B,
            size: isMobile ? 0.15 : 0.1,
            transparent: true,
            opacity: 0.5,
            sizeAttenuation: true
        });
        var points = new THREE.Points(ptGeo, ptMat);
        scene.add(points);

        var mxTarget = 0, myTarget = 0, mx = 0, my = 0;
        if (!isMobile) {
            window.addEventListener('mousemove', function (e) {
                mxTarget = (e.clientX / window.innerWidth - 0.5) * 2;
                myTarget = (e.clientY / window.innerHeight - 0.5) * 2;
            }, { passive: true });
        }

        function animate() {
            requestAnimationFrame(animate);
            mx += (mxTarget - mx) * 0.03;
            my += (myTarget - my) * 0.03;
            camera.position.x = mx * 4;
            camera.position.y = -my * 3;
            camera.lookAt(scene.position);

            var t = performance.now() * 0.001;
            for (var i = 0; i < meshes.length; i++) {
                var m = meshes[i];
                m.rotation.x += m.userData.rx;
                m.rotation.y += m.userData.ry;
                m.rotation.z += m.userData.rz;
                m.position.y = m.userData.baseY + Math.sin(t * m.userData.floatSpd + m.userData.floatOff) * 2;
            }
            points.rotation.y += 0.0002;
            points.rotation.x += 0.00008;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, { passive: true });
    })();

    function initFallbackParticles(canvas) {
        var ctx = canvas.getContext('2d');
        function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        resize();
        window.addEventListener('resize', resize, { passive: true });
        var P = [], C = window.innerWidth < 768 ? 30 : 80;
        for (var i = 0; i < C; i++) {
            P.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*1.5+0.3, vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3, a: Math.random()*0.5+0.1 });
        }
        function draw() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            P.forEach(function(p){ ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(184,134,11,'+p.a+')'; ctx.fill(); p.x+=p.vx; p.y+=p.vy; if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0; if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0; });
            requestAnimationFrame(draw);
        }
        draw();
    }

    (function initOrbs() {
        var arena     = document.getElementById('orbsArena');
        var container = document.getElementById('orbsContainer');
        if (!arena || !container) return;
        var orbs  = Array.from(container.querySelectorAll('.tech-orb'));
        var state = [];
        function getArenaBounds() { return { w: arena.offsetWidth, h: arena.offsetHeight }; }
        orbs.forEach(function (orb) {
            var bounds = getArenaBounds();
            var margin = 60;
            state.push({
                x: margin + Math.random() * (bounds.w - margin * 2),
                y: margin + Math.random() * (bounds.h - margin * 2),
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                r: 45,
                el: orb
            });
        });
        function tickOrbs() {
            var bounds = getArenaBounds();
            state.forEach(function (o) {
                o.x += o.vx; o.y += o.vy;
                if (o.x - o.r < 0)       { o.x = o.r;           o.vx *= -1; }
                if (o.x + o.r > bounds.w) { o.x = bounds.w - o.r; o.vx *= -1; }
                if (o.y - o.r < 0)        { o.y = o.r;           o.vy *= -1; }
                if (o.y + o.r > bounds.h) { o.y = bounds.h - o.r; o.vy *= -1; }
                o.el.style.left = o.x + 'px';
                o.el.style.top  = o.y + 'px';
            });
            for (var i = 0; i < state.length; i++) {
                for (var j = i + 1; j < state.length; j++) {
                    var a = state[i], b = state[j];
                    var dx = b.x - a.x, dy = b.y - a.y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    var minD = a.r + b.r;
                    if (dist < minD && dist > 0) {
                        var overlap = (minD - dist) / 2;
                        var nx = dx / dist, ny = dy / dist;
                        a.x -= nx * overlap; a.y -= ny * overlap;
                        b.x += nx * overlap; b.y += ny * overlap;
                        var dvx = a.vx - b.vx, dvy = a.vy - b.vy;
                        var dot = dvx * nx + dvy * ny;
                        a.vx -= dot * nx * 0.8; a.vy -= dot * ny * 0.8;
                        b.vx += dot * nx * 0.8; b.vy += dot * ny * 0.8;
                        var speed = Math.sqrt(a.vx*a.vx + a.vy*a.vy);
                        if (speed > 2) { a.vx = a.vx/speed*2; a.vy = a.vy/speed*2; }
                        speed = Math.sqrt(b.vx*b.vx + b.vy*b.vy);
                        if (speed > 2) { b.vx = b.vx/speed*2; b.vy = b.vy/speed*2; }
                    }
                }
            }
            requestAnimationFrame(tickOrbs);
        }
        tickOrbs();
    })();

    var navbar     = document.getElementById('navbar');
    var navToggle  = document.getElementById('navToggle');
    var navLinks   = document.getElementById('navLinks');
    var navLinkEls = document.querySelectorAll('.nav-link');

    function handleNavScroll() {
        if (window.scrollY > 60) { navbar.classList.add('scrolled'); }
        else { navbar.classList.remove('scrolled'); }
        var sections  = document.querySelectorAll('.section, .hero');
        var currentId = '';
        sections.forEach(function (s) {
            if (window.scrollY >= s.offsetTop - 200) currentId = s.id;
        });
        navLinkEls.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentId) link.classList.add('active');
        });
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }
    navLinkEls.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navToggle) navToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('open');
        });
    });
    document.addEventListener('click', function (e) {
        var anchor = e.target.closest('a');
        if (!anchor) return;
        var href = anchor.getAttribute('href');
        if (!href || href.charAt(0) !== '#' || href.length < 2) return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });

    var roleItems = document.querySelectorAll('.role-item');
    var roleIdx   = 0;
    if (roleItems.length > 1) {
        setInterval(function () {
            roleItems[roleIdx].classList.remove('active');
            roleItems[roleIdx].classList.add('exiting');
            var exitEl = roleItems[roleIdx];
            setTimeout(function () { exitEl.classList.remove('exiting'); }, 500);
            roleIdx = (roleIdx + 1) % roleItems.length;
            roleItems[roleIdx].classList.add('active');
        }, 2800);
    }

    var revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('revealed'); });
    }

    var counted  = false;
    var statNums = document.querySelectorAll('.stat-number');
    function runCounters() {
        if (counted) return;
        var aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        var rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            counted = true;
            statNums.forEach(function (el, i) {
                var target = parseInt(el.getAttribute('data-count'), 10);
                var start  = null;
                var dur    = 1400;
                setTimeout(function () {
                    function step(ts) {
                        if (!start) start = ts;
                        var prog = Math.min((ts - start) / dur, 1);
                        var ease = 1 - Math.pow(1 - prog, 3);
                        el.textContent = Math.round(target * ease);
                        if (prog < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                }, i * 120);
            });
        }
    }
    window.addEventListener('scroll', runCounters, { passive: true });
    runCounters();

    (function init3DTilt() {
        if (!isDesktop) return;

        var tiltSelectors = '.stat-card, .skill-cat, .cert-card, .social-link, .resume-card';
        var tiltEls = document.querySelectorAll(tiltSelectors);

        tiltEls.forEach(function (el) {
            var shine = document.createElement('div');
            shine.className = 'tilt-shine';
            el.style.position = 'relative';
            el.appendChild(shine);

            el.addEventListener('mousemove', function (e) {
                var rect = el.getBoundingClientRect();
                var x  = e.clientX - rect.left;
                var y  = e.clientY - rect.top;
                var cx = rect.width / 2;
                var cy = rect.height / 2;
                var rx = -(y - cy) / 14;
                var ry = (x - cx) / 14;

                el.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(10px)';
                el.style.transition = 'none';

                shine.style.opacity = '1';
                shine.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.2) 0%, transparent 60%)';
            });

            el.addEventListener('mouseleave', function () {
                el.style.transform = '';
                el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s';
                shine.style.opacity = '0';
            });
        });

        document.querySelectorAll('.screenshot-frame').forEach(function (frame) {
            frame.addEventListener('mousemove', function (e) {
                var rect = frame.getBoundingClientRect();
                var x  = e.clientX - rect.left;
                var y  = e.clientY - rect.top;
                var cx = rect.width / 2;
                var cy = rect.height / 2;
                var rx = (y - cy) / 20;
                var ry = (cx - x) / 20;
                frame.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(1.02)';
                frame.style.transition = 'none';
            });
            frame.addEventListener('mouseleave', function () {
                frame.style.transform = '';
                frame.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s';
            });
        });
    })();

    (function initHeroParallax() {
        if (!isDesktop) return;
        var heroLeft  = document.querySelector('.hero-left');
        var heroRight = document.querySelector('.hero-right');
        if (!heroLeft || !heroRight) return;

        document.querySelector('.hero').addEventListener('mousemove', function (e) {
            var cx = window.innerWidth / 2;
            var cy = window.innerHeight / 2;
            var dx = (e.clientX - cx) / cx;
            var dy = (e.clientY - cy) / cy;

            heroLeft.style.transform  = 'translate3d(' + (dx * -12) + 'px,' + (dy * -8) + 'px, 0)';
            heroRight.style.transform = 'translate3d(' + (dx * 15) + 'px,' + (dy * 10) + 'px, 0)';
        });
    })();

    (function initScrollParallax() {
        var projectNums = document.querySelectorAll('.project-num-bg');
        var sectionHeaders = document.querySelectorAll('.section-header');

        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;

            projectNums.forEach(function (num) {
                var rect = num.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    var offset = (rect.top - window.innerHeight / 2) * 0.08;
                    num.style.transform = 'translateY(calc(-50% + ' + offset + 'px))';
                }
            });

            sectionHeaders.forEach(function (header) {
                var rect = header.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    var progress = 1 - (rect.top / window.innerHeight);
                    var depth = Math.max(0, (0.5 - progress) * 15);
                    header.style.transform = 'translateZ(' + depth + 'px)';
                }
            });
        }, { passive: true });
    })();

    document.querySelectorAll('.skill-tags span').forEach(function (tag) {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.06)';
        });
        tag.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

})();
