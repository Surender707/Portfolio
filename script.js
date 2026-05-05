(function () {
    'use strict';
    var cursorDot  = document.getElementById('cursorDot');
    var cursorRing = document.getElementById('cursorRing');
    if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
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
    (function initParticles() {
        var canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        function resize() {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize, { passive: true });
        var PARTICLES = [];
        var COUNT = window.innerWidth < 768 ? 30 : 80;
        for (var i = 0; i < COUNT; i++) {
            PARTICLES.push({
                x:     Math.random() * window.innerWidth,
                y:     Math.random() * window.innerHeight,
                r:     Math.random() * 1.5 + 0.3,
                vx:    (Math.random() - 0.5) * 0.3,
                vy:    (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.5 + 0.1
            });
        }
        var mouse = { x: -9999, y: -9999 };
        window.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }, { passive: true });
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            PARTICLES.forEach(function (p) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(184, 134, 11, ' + p.alpha + ')';
                ctx.fill();
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });
            for (var i = 0; i < PARTICLES.length; i++) {
                for (var j = i + 1; j < PARTICLES.length; j++) {
                    var dx = PARTICLES[i].x - PARTICLES[j].x;
                    var dy = PARTICLES[i].y - PARTICLES[j].y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(PARTICLES[i].x, PARTICLES[i].y);
                        ctx.lineTo(PARTICLES[j].x, PARTICLES[j].y);
                        ctx.strokeStyle = 'rgba(184, 134, 11, ' + ((1 - dist / 100) * 0.15) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
                var dmx = PARTICLES[i].x - mouse.x;
                var dmy = PARTICLES[i].y - mouse.y;
                var distM = Math.sqrt(dmx * dmx + dmy * dmy);
                if (distM < 140) {
                    ctx.beginPath();
                    ctx.moveTo(PARTICLES[i].x, PARTICLES[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = 'rgba(212, 168, 67, ' + ((1 - distM / 140) * 0.35) + ')';
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
            requestAnimationFrame(draw);
        }
        draw();
    })();
    (function initOrbs() {
        var arena   = document.getElementById('orbsArena');
        var container = document.getElementById('orbsContainer');
        if (!arena || !container) return;
        var orbs = Array.from(container.querySelectorAll('.tech-orb'));
        var state = [];
        function getArenaBounds() {
            return { w: arena.offsetWidth, h: arena.offsetHeight };
        }
        orbs.forEach(function (orb, i) {
            var bounds = getArenaBounds();
            var margin = 60;
            state.push({
                x:  margin + Math.random() * (bounds.w - margin * 2),
                y:  margin + Math.random() * (bounds.h - margin * 2),
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                r:  45,
                el: orb
            });
        });
        function tickOrbs() {
            var bounds = getArenaBounds();
            state.forEach(function (o) {
                o.x += o.vx;
                o.y += o.vy;
                if (o.x - o.r < 0)         { o.x = o.r;           o.vx *= -1; }
                if (o.x + o.r > bounds.w)   { o.x = bounds.w - o.r; o.vx *= -1; }
                if (o.y - o.r < 0)          { o.y = o.r;           o.vy *= -1; }
                if (o.y + o.r > bounds.h)   { o.y = bounds.h - o.r; o.vy *= -1; }
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
                        a.x -= nx * overlap;
                        a.y -= ny * overlap;
                        b.x += nx * overlap;
                        b.y += ny * overlap;
                        var dvx = a.vx - b.vx, dvy = a.vy - b.vy;
                        var dot = dvx * nx + dvy * ny;
                        a.vx -= dot * nx * 0.8;
                        a.vy -= dot * ny * 0.8;
                        b.vx += dot * nx * 0.8;
                        b.vy += dot * ny * 0.8;
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
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        var sections = document.querySelectorAll('.section, .hero');
        var currentId = '';
        sections.forEach(function (s) {
            if (window.scrollY >= s.offsetTop - 200) currentId = s.id;
        });
        navLinkEls.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentId) {
                link.classList.add('active');
            }
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
                    var delay = entry.target.style.transitionDelay;
                    if (!delay || delay === '0s' || delay === '0ms') {
                        entry.target.classList.add('revealed');
                    } else {
                        entry.target.classList.add('revealed');
                    }
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('revealed'); });
    }
    var counted = false;
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
    if (window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.screenshot-frame').forEach(function (frame) {
            frame.addEventListener('mousemove', function (e) {
                var rect = frame.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var cx = rect.width / 2, cy = rect.height / 2;
                var rx = (y - cy) / 30;
                var ry = (cx - x) / 30;
                frame.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(1.01)';
            });
            frame.addEventListener('mouseleave', function () {
                frame.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }
    document.querySelectorAll('.skill-tags span').forEach(function (tag) {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.06)';
        });
        tag.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
})();
