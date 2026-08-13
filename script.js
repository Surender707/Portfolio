(function () {
    'use strict';

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ CURSOR ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    var cursorDot  = document.getElementById('cursorDot');
    var cursorRing = document.getElementById('cursorRing');
    var isDesktop  = window.matchMedia('(pointer: fine)').matches;

    if (cursorDot && cursorRing && isDesktop) {
        var mouseX = window.innerWidth / 2;
        var mouseY = window.innerHeight / 2;
        var ringX  = mouseX, ringY = mouseY;
        var dotHalf = 3.5, ringHalf = 18;
        document.addEventListener('mousemove', function (e) { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });
        document.addEventListener('mouseleave', function () { cursorDot.classList.add('hidden'); cursorRing.style.opacity = '0'; });
        document.addEventListener('mouseenter', function () { cursorDot.classList.remove('hidden'); cursorRing.style.opacity = '1'; });
        document.addEventListener('mousedown', function () { cursorRing.classList.add('clicking'); });
        document.addEventListener('mouseup',   function () { cursorRing.classList.remove('clicking'); });
        document.querySelectorAll('a, button, .tech-orb, .stat-card, .skill-cat, .social-link, .skill-tags span, .cert-card, .cert-btn').forEach(function (el) {
            el.addEventListener('mouseenter', function () { cursorRing.classList.add('hovered'); });
            el.addEventListener('mouseleave', function () { cursorRing.classList.remove('hovered'); });
        });
        var LERP = 0.25;
        function tickCursor() {
            cursorDot.style.transform  = 'translate3d(' + (mouseX - dotHalf) + 'px,' + (mouseY - dotHalf) + 'px,0)';
            ringX += (mouseX - ringX) * LERP;
            ringY += (mouseY - ringY) * LERP;
            cursorRing.style.transform = 'translate3d(' + (ringX - ringHalf) + 'px,' + (ringY - ringHalf) + 'px,0)';
            requestAnimationFrame(tickCursor);
        }
        tickCursor();
    }

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 3D BACKGROUND (Three.js) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    (function init3DBackground() {
        var canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        if (typeof THREE === 'undefined') { initFallbackParticles(canvas); return; }

        var isMobile = window.innerWidth < 768;
        var scene    = new THREE.Scene();
        var camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: !isMobile });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        camera.position.z = 35;

        /* Ambient light for phong shading */
        var ambientLight = new THREE.AmbientLight(0xB8860B, 0.4);
        scene.add(ambientLight);
        var pointLight = new THREE.PointLight(0xD4A843, 1.2, 100);
        pointLight.position.set(15, 20, 20);
        scene.add(pointLight);
        var pointLight2 = new THREE.PointLight(0xE8A317, 0.6, 80);
        pointLight2.position.set(-20, -10, 10);
        scene.add(pointLight2);

        var colors = [0xB8860B, 0xD4A843, 0xE8A317, 0xC9972B];
        var wireShapes = [
            new THREE.IcosahedronGeometry(2, 0),
            new THREE.OctahedronGeometry(1.8, 0),
            new THREE.TetrahedronGeometry(2, 0),
            new THREE.DodecahedronGeometry(1.5, 0),
            new THREE.TorusGeometry(1.4, 0.35, 6, 8)
        ];
        var solidShapes = [
            new THREE.IcosahedronGeometry(0.8, 0),
            new THREE.OctahedronGeometry(0.9, 0),
            new THREE.TetrahedronGeometry(0.9, 0)
        ];

        /* Wire meshes ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â larger, background */
        var meshes = [];
        var meshCount = isMobile ? 8 : 18;
        for (var i = 0; i < meshCount; i++) {
            var geo = wireShapes[Math.floor(Math.random() * wireShapes.length)];
            var mat = new THREE.MeshBasicMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                wireframe: true,
                transparent: true,
                opacity: Math.random() * 0.12 + 0.04
            });
            var mesh = new THREE.Mesh(geo, mat);
            var scale = Math.random() * 1.0 + 0.5;
            mesh.scale.set(scale, scale, scale);
            mesh.position.set(
                (Math.random() - 0.5) * 75,
                (Math.random() - 0.5) * 55,
                (Math.random() - 0.5) * 30 - 8
            );
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            mesh.userData = {
                rx: (Math.random() - 0.5) * 0.006,
                ry: (Math.random() - 0.5) * 0.006,
                rz: (Math.random() - 0.5) * 0.003,
                floatSpd: Math.random() * 0.4 + 0.15,
                floatOff: Math.random() * Math.PI * 2,
                baseY: mesh.position.y,
                type: 'wire'
            };
            scene.add(mesh);
            meshes.push(mesh);
        }

        /* Solid glowing crystals ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â small, mid-distance */
        if (!isMobile) {
            var solidCount = 12;
            for (var s = 0; s < solidCount; s++) {
                var sgeo = solidShapes[Math.floor(Math.random() * solidShapes.length)];
                var smat = new THREE.MeshPhongMaterial({
                    color: colors[Math.floor(Math.random() * colors.length)],
                    transparent: true,
                    opacity: Math.random() * 0.2 + 0.06,
                    shininess: 120,
                    specular: 0xFFD700,
                    emissive: colors[Math.floor(Math.random() * colors.length)],
                    emissiveIntensity: 0.15
                });
                var smesh = new THREE.Mesh(sgeo, smat);
                var sc = Math.random() * 0.7 + 0.3;
                smesh.scale.set(sc, sc, sc);
                smesh.position.set(
                    (Math.random() - 0.5) * 60,
                    (Math.random() - 0.5) * 45,
                    (Math.random() - 0.5) * 20 - 5
                );
                smesh.userData = {
                    rx: (Math.random() - 0.5) * 0.01,
                    ry: (Math.random() - 0.5) * 0.01,
                    rz: (Math.random() - 0.5) * 0.005,
                    floatSpd: Math.random() * 0.5 + 0.2,
                    floatOff: Math.random() * Math.PI * 2,
                    baseY: smesh.position.y,
                    type: 'solid'
                };
                scene.add(smesh);
                meshes.push(smesh);
            }
        }

        /* Ring / torus decoratives */
        if (!isMobile) {
            for (var r = 0; r < 5; r++) {
                var rGeo = new THREE.TorusGeometry(Math.random() * 2 + 1.5, 0.06, 6, 20);
                var rMat = new THREE.MeshBasicMaterial({
                    color: 0xD4A843,
                    transparent: true,
                    opacity: Math.random() * 0.08 + 0.03
                });
                var rMesh = new THREE.Mesh(rGeo, rMat);
                rMesh.position.set(
                    (Math.random() - 0.5) * 60,
                    (Math.random() - 0.5) * 40,
                    (Math.random() - 0.5) * 15
                );
                rMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
                rMesh.userData = {
                    rx: (Math.random() - 0.5) * 0.008,
                    ry: (Math.random() - 0.5) * 0.008,
                    rz: 0.002,
                    floatSpd: Math.random() * 0.3 + 0.1,
                    floatOff: Math.random() * Math.PI * 2,
                    baseY: rMesh.position.y,
                    type: 'ring'
                };
                scene.add(rMesh);
                meshes.push(rMesh);
            }
        }

        /* Star points */
        var ptCount = isMobile ? 80 : 280;
        var ptGeo   = new THREE.BufferGeometry();
        var ptPos   = new Float32Array(ptCount * 3);
        for (var j = 0; j < ptCount * 3; j += 3) {
            ptPos[j]     = (Math.random() - 0.5) * 100;
            ptPos[j + 1] = (Math.random() - 0.5) * 80;
            ptPos[j + 2] = (Math.random() - 0.5) * 60;
        }
        ptGeo.setAttribute('position', new THREE.BufferAttribute(ptPos, 3));
        var ptMat = new THREE.PointsMaterial({
            color: 0xD4A843,
            size: isMobile ? 0.18 : 0.12,
            transparent: true,
            opacity: 0.55,
            sizeAttenuation: true
        });
        var points = new THREE.Points(ptGeo, ptMat);
        scene.add(points);

        /* Mouse parallax */
        var mxTarget = 0, myTarget = 0, mx = 0, my = 0;
        if (!isMobile) {
            window.addEventListener('mousemove', function (e) {
                mxTarget = (e.clientX / window.innerWidth  - 0.5) * 2;
                myTarget = (e.clientY / window.innerHeight - 0.5) * 2;
            }, { passive: true });
        }

        function animate() {
            requestAnimationFrame(animate);
            mx += (mxTarget - mx) * 0.025;
            my += (myTarget - my) * 0.025;
            camera.position.x = mx * 5;
            camera.position.y = -my * 3.5;
            camera.lookAt(scene.position);

            var t = performance.now() * 0.001;
            for (var i = 0; i < meshes.length; i++) {
                var m = meshes[i];
                m.rotation.x += m.userData.rx;
                m.rotation.y += m.userData.ry;
                m.rotation.z += m.userData.rz;
                m.position.y  = m.userData.baseY + Math.sin(t * m.userData.floatSpd + m.userData.floatOff) * 2.5;
            }

            /* Slowly drift point cloud */
            points.rotation.y += 0.0002;
            points.rotation.x += 0.00007;
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
        var P = [], C = window.innerWidth < 768 ? 40 : 100;
        for (var i = 0; i < C; i++) {
            P.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5 + 0.3, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, a: Math.random() * 0.5 + 0.1 });
        }
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            P.forEach(function (p) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(184,134,11,' + p.a + ')';
                ctx.fill();
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width)  p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });
            requestAnimationFrame(draw);
        }
        draw();
    }

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ HERO 3D SCENE (Three.js canvas overlay around avatar) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    (function initHero3D() {
        if (typeof THREE === 'undefined') return;
        if (window.innerWidth < 768) return;

        var canvas = document.createElement('canvas');
        canvas.id  = 'hero3DCanvas';
        canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:3;';

        var heroRight = document.querySelector('.hero-right');
        if (!heroRight) return;
        heroRight.style.position = 'relative';
        heroRight.appendChild(canvas);

        var W = heroRight.offsetWidth  || 440;
        var H = heroRight.offsetHeight || 440;
        canvas.width  = W * window.devicePixelRatio;
        canvas.height = H * window.devicePixelRatio;
        canvas.style.width  = W + 'px';
        canvas.style.height = H + 'px';

        var scene    = new THREE.Scene();
        var camera   = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
        var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        camera.position.z = 5.5;

        /* Lights */
        scene.add(new THREE.AmbientLight(0xffffff, 0.3));
        var pl1 = new THREE.PointLight(0xD4A843, 2.5, 20);
        pl1.position.set(3, 3, 4);
        scene.add(pl1);
        var pl2 = new THREE.PointLight(0xB8860B, 1.5, 15);
        pl2.position.set(-3, -2, 3);
        scene.add(pl2);

        /* Orbiting crystal shards around avatar */
        var shards = [];
        var shardColors = [0xB8860B, 0xD4A843, 0xE8A317, 0xC9972B, 0xFFD700];

        var shardGeos = [
            new THREE.OctahedronGeometry(0.18, 0),
            new THREE.TetrahedronGeometry(0.2, 0),
            new THREE.IcosahedronGeometry(0.15, 0),
            new THREE.OctahedronGeometry(0.12, 0)
        ];

        var orbitCount = 16;
        for (var i = 0; i < orbitCount; i++) {
            var sgeo = shardGeos[i % shardGeos.length];
            var isWire = i % 4 === 0;
            var smat;
            if (isWire) {
                smat = new THREE.MeshBasicMaterial({
                    color: shardColors[i % shardColors.length],
                    wireframe: true,
                    transparent: true,
                    opacity: 0.6
                });
            } else {
                smat = new THREE.MeshPhongMaterial({
                    color: shardColors[i % shardColors.length],
                    transparent: true,
                    opacity: 0.7 + Math.random() * 0.2,
                    shininess: 150,
                    specular: 0xFFFFFF,
                    emissive: shardColors[i % shardColors.length],
                    emissiveIntensity: 0.3
                });
            }
            var smesh = new THREE.Mesh(sgeo, smat);

            /* Distribute across 3 orbital rings at varying radii & inclinations */
            var orbitR     = [1.55, 2.0, 2.55][i % 3];
            var incl       = [0.3, 0.65, 1.1][i % 3];
            var phaseOff   = (i / orbitCount) * Math.PI * 2;
            var selfRotSpd = (Math.random() - 0.5) * 0.08;

            smesh.userData = {
                orbitR:    orbitR,
                incl:      incl,
                phaseOff:  phaseOff,
                orbitSpd:  0.004 + Math.random() * 0.003,
                selfRotSpd:selfRotSpd,
                selfRotX:  Math.random() * 0.05,
                selfRotZ:  Math.random() * 0.04,
                phase:     phaseOff
            };
            scene.add(smesh);
            shards.push(smesh);
        }

        /* Central glowing sphere ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â sits behind avatar (semi-transparent) */
        var coreGeo = new THREE.IcosahedronGeometry(1.0, 1);
        var coreMat = new THREE.MeshPhongMaterial({
            color: 0xD4A843,
            transparent: true,
            opacity: 0.08,
            wireframe: false,
            shininess: 200,
            specular: 0xFFD700,
            emissive: 0xB8860B,
            emissiveIntensity: 0.1
        });
        var coreSphere = new THREE.Mesh(coreGeo, coreMat);
        scene.add(coreSphere);

        /* Wire sphere outer ring */
        var wGeo = new THREE.IcosahedronGeometry(1.3, 1);
        var wMat = new THREE.MeshBasicMaterial({ color: 0xD4A843, wireframe: true, transparent: true, opacity: 0.06 });
        var wSphere = new THREE.Mesh(wGeo, wMat);
        scene.add(wSphere);

        /* Mouse influence */
        var hmx = 0, hmy = 0, hmxT = 0, hmyT = 0;
        var heroEl = document.querySelector('.hero');
        if (heroEl) {
            heroEl.addEventListener('mousemove', function (e) {
                var rect = heroEl.getBoundingClientRect();
                hmxT = ((e.clientX - rect.left) / rect.width  - 0.5) * 1.5;
                hmyT = ((e.clientY - rect.top)  / rect.height - 0.5) * 1.5;
            }, { passive: true });
        }

        function animHero() {
            requestAnimationFrame(animHero);
            var t = performance.now() * 0.001;

            hmx += (hmxT - hmx) * 0.04;
            hmy += (hmyT - hmy) * 0.04;

            /* Gently rotate core sphere */
            coreSphere.rotation.x = t * 0.08 + hmy * 0.3;
            coreSphere.rotation.y = t * 0.12 + hmx * 0.3;
            wSphere.rotation.x    = -t * 0.06;
            wSphere.rotation.y    = t * 0.09;

            /* Move light with mouse */
            pl1.position.x = hmx * 3 + 3;
            pl1.position.y = -hmy * 3 + 3;

            /* Orbit shards */
            for (var i = 0; i < shards.length; i++) {
                var d = shards[i].userData;
                d.phase += d.orbitSpd;

                /* Rotated orbit plane (inclination) */
                var cx = Math.cos(d.phase) * d.orbitR;
                var cy = Math.sin(d.phase) * d.orbitR * Math.sin(d.incl);
                var cz = Math.sin(d.phase) * d.orbitR * Math.cos(d.incl) * 0.5;

                shards[i].position.set(cx + hmx * 0.2, cy + hmy * 0.2, cz);
                shards[i].rotation.x += d.selfRotX;
                shards[i].rotation.y += d.selfRotSpd;
                shards[i].rotation.z += d.selfRotZ;

                /* Pulse opacity */
                if (shards[i].material.opacity !== undefined) {
                    shards[i].material.opacity = 0.6 + Math.sin(t * 1.5 + d.phaseOff) * 0.2;
                }
            }

            renderer.render(scene, camera);
        }
        animHero();

        /* Resize */
        window.addEventListener('resize', function () {
            var nW = heroRight.offsetWidth  || 440;
            var nH = heroRight.offsetHeight || 440;
            camera.aspect = nW / nH;
            camera.updateProjectionMatrix();
            renderer.setSize(nW, nH);
        }, { passive: true });
    })();

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ BOUNCING ORBS (Skills) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
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
                x:  margin + Math.random() * (bounds.w - margin * 2),
                y:  margin + Math.random() * (bounds.h - margin * 2),
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                r:  45,
                el: orb,
                depth: Math.random() * 0.6 + 0.7   /* 0.7ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“1.3 simulated depth */
            });
        });

        function tickOrbs() {
            var bounds = getArenaBounds();
            var t = performance.now() * 0.001;
            state.forEach(function (o, idx) {
                o.x += o.vx * o.depth; o.y += o.vy * o.depth;
                if (o.x - o.r < 0)        { o.x = o.r;           o.vx *= -1; }
                if (o.x + o.r > bounds.w) { o.x = bounds.w - o.r; o.vx *= -1; }
                if (o.y - o.r < 0)        { o.y = o.r;           o.vy *= -1; }
                if (o.y + o.r > bounds.h) { o.y = bounds.h - o.r; o.vy *= -1; }
                o.el.style.left = o.x + 'px';
                o.el.style.top  = o.y + 'px';

                /* 3D depth scale + bob */
                var sc    = 0.75 + o.depth * 0.35;
                var bob   = Math.sin(t * 0.8 + idx) * 4;
                var tiltX = Math.sin(t * 0.5 + idx * 1.3) * 8;
                var tiltY = Math.cos(t * 0.4 + idx * 0.9) * 8;
                o.el.style.transform = 'translate(-50%, -50%) translateY(' + bob + 'px) scale(' + sc.toFixed(3) + ') perspective(300px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
                o.el.style.opacity   = (0.55 + o.depth * 0.45).toFixed(2);
                o.el.style.zIndex    = Math.round(o.depth * 5);
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
                        var speed = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
                        if (speed > 2) { a.vx = a.vx / speed * 2; a.vy = a.vy / speed * 2; }
                        speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
                        if (speed > 2) { b.vx = b.vx / speed * 2; b.vy = b.vy / speed * 2; }
                    }
                }
            }
            requestAnimationFrame(tickOrbs);
        }
        tickOrbs();
    })();

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ NAV ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
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
            if (navLinks)  navLinks.classList.remove('open');
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

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ ROLE ROTATOR ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
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

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ SCROLL REVEAL ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
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

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ STAT COUNTERS ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
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

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 3D CARD TILT (enhanced) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    (function init3DTilt() {
        if (!isDesktop) return;

        var tiltEls = document.querySelectorAll('.stat-card, .skill-cat, .cert-card, .social-link, .resume-card');
        tiltEls.forEach(function (el) {
            /* Add shine layer */
            var shine = document.createElement('div');
            shine.className = 'tilt-shine';
            el.style.position = 'relative';
            el.appendChild(shine);

            /* Add depth shadow layer */
            el.style.willChange = 'transform';

            el.addEventListener('mousemove', function (e) {
                var rect = el.getBoundingClientRect();
                var x   = e.clientX - rect.left;
                var y   = e.clientY - rect.top;
                var cx  = rect.width  / 2;
                var cy  = rect.height / 2;
                var rx  = -(y - cy) / 12;
                var ry  = (x - cx)  / 12;

                el.style.transform  = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(14px) scale(1.02)';
                el.style.transition = 'none';
                el.style.boxShadow  = '0 ' + (14 + Math.abs(rx)) + 'px ' + (40 + Math.abs(ry) * 2) + 'px rgba(184,134,11,0.18), 0 ' + (6 + Math.abs(ry)) + 'px ' + (20 + Math.abs(rx)) + 'px rgba(0,0,0,0.12)';

                shine.style.opacity    = '1';
                shine.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.22) 0%, transparent 65%)';
            });

            el.addEventListener('mouseleave', function () {
                el.style.transform  = '';
                el.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s';
                el.style.boxShadow  = '';
                shine.style.opacity = '0';
            });
        });

        /* Screenshot frames 3D tilt */
        document.querySelectorAll('.screenshot-frame').forEach(function (frame) {
            var shine2 = document.createElement('div');
            shine2.className = 'tilt-shine';
            frame.style.position = 'relative';
            frame.appendChild(shine2);

            frame.addEventListener('mousemove', function (e) {
                var rect = frame.getBoundingClientRect();
                var x   = e.clientX - rect.left;
                var y   = e.clientY - rect.top;
                var cx  = rect.width  / 2;
                var cy  = rect.height / 2;
                var rx  = (y - cy) / 18;
                var ry  = (cx - x) / 18;
                frame.style.transform  = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(1.025)';
                frame.style.transition = 'none';
                frame.style.boxShadow  = '0 20px 60px rgba(0,0,0,0.16), 0 0 40px rgba(184,134,11,0.15)';

                shine2.style.opacity    = '1';
                shine2.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.14) 0%, transparent 60%)';
            });
            frame.addEventListener('mouseleave', function () {
                frame.style.transform  = '';
                frame.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s';
                frame.style.boxShadow  = '';
                shine2.style.opacity   = '0';
            });
        });

        /* Hero avatar 3D depth tilt */
        var avatarWrap = document.querySelector('.hero-avatar-wrap');
        if (avatarWrap) {
            avatarWrap.addEventListener('mousemove', function (e) {
                var rect = avatarWrap.getBoundingClientRect();
                var x   = e.clientX - rect.left;
                var y   = e.clientY - rect.top;
                var cx  = rect.width  / 2;
                var cy  = rect.height / 2;
                var rx  = -(y - cy) / 15;
                var ry  = (x - cx)  / 15;
                avatarWrap.style.transform  = 'perspective(600px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(8px)';
                avatarWrap.style.transition = 'none';
            });
            avatarWrap.addEventListener('mouseleave', function () {
                avatarWrap.style.transform  = '';
                avatarWrap.style.transition = 'transform 0.7s cubic-bezier(0.16,1,0.3,1)';
            });
        }
    })();

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ HERO PARALLAX ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    (function initHeroParallax() {
        if (!isDesktop) return;
        var heroLeft  = document.querySelector('.hero-left');
        var heroRight = document.querySelector('.hero-right');
        if (!heroLeft || !heroRight) return;
        document.querySelector('.hero').addEventListener('mousemove', function (e) {
            var cx = window.innerWidth  / 2;
            var cy = window.innerHeight / 2;
            var dx = (e.clientX - cx) / cx;
            var dy = (e.clientY - cy) / cy;
            heroLeft.style.transform  = 'translate3d(' + (dx * -14) + 'px,' + (dy * -9) + 'px, 0)';
            heroRight.style.transform = 'translate3d(' + (dx * 16)  + 'px,' + (dy * 11) + 'px, 0)';
        });
    })();

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ SCROLL PARALLAX (project numbers + 3D section depth) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    (function initScrollParallax() {
        var projectNums    = document.querySelectorAll('.project-num-bg');
        var sectionHeaders = document.querySelectorAll('.section-header');
        var sections3D     = document.querySelectorAll('.section');

        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;

            projectNums.forEach(function (num) {
                var rect = num.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    var offset = (rect.top - window.innerHeight / 2) * 0.09;
                    num.style.transform = 'translateY(calc(-50% + ' + offset + 'px))';
                }
            });

            sectionHeaders.forEach(function (header) {
                var rect = header.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    var progress = 1 - (rect.top / window.innerHeight);
                    var depth    = Math.max(0, (0.5 - progress) * 20);
                    header.style.transform = 'translateZ(' + depth + 'px)';
                }
            });

            /* Subtle section background depth shift */
            sections3D.forEach(function (sec) {
                var rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    var prog = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
                    sec.style.backgroundPositionY = (prog * 20) + 'px';
                }
            });
        }, { passive: true });
    })();

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ SKILL TAG MICRO-ANIMATION ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    document.querySelectorAll('.skill-tags span').forEach(function (tag) {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.08) perspective(200px) rotateX(-6deg)';
        });
        tag.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ 3D FLOATING PARTICLES (ambient, CSS-driven) ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    (function spawnAmbientParticles() {
        if (window.innerWidth < 768) return;
        var body = document.body;
        for (var i = 0; i < 8; i++) {
            var p = document.createElement('div');
            p.className = 'floating-particle';
            var sz = Math.random() * 4 + 2;
            p.style.cssText = [
                'width:' + sz + 'px',
                'height:' + sz + 'px',
                'left:' + (Math.random() * 100) + '%',
                'animation-duration:' + (12 + Math.random() * 20) + 's',
                'animation-delay:' + (-Math.random() * 20) + 's',
                'opacity:' + (Math.random() * 0.3 + 0.05)
            ].join(';');
            body.appendChild(p);
        }
    })();

})();

/* ÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚Â
   SPEAKING ROBOT TOUR GUIDE  (Web Speech API)
   ÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚ÂÃƒÂ¢Ã¢â‚¬Â¢Ã‚Â */
(function () {
    'use strict';

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Tour messages ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â proper grammar, no name overuse ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    var TOUR = {
        hero:             "Welcome to Surender's portfolio! He is a passionate AI and Data Science student who specializes in Machine Learning, Computer Vision, and Full Stack Development. Scroll down to explore the full portfolio!",
        about:            "Let me tell you about him! He is currently in his 7th semester of B.Tech in AI and Data Science at MITRC. He is deeply curious about how machines learn and is actively seeking internship and job opportunities!",
        skills:           "Here are his skills! His techstack spans over 10 technologies. On the AI side he uses Python, PyTorch, and TensorFlow. For web development he works with React, Node.js, and Flask.",
        projects:         "Check out his projects! He has built 5 real-world applications ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â a MERN task management system, a machine learning analytics app, computer vision systems, and natural language processing tools. Click any project to see the code on GitHub!",
        resume:           "His resume is available right here! You can download it or open it to view his full academic background, skill set, and project experience all in one place.",
        certifications:   "These are his certifications! He completed a professional internship in Data Science at CODSOFT, and another in Full Stack MERN development at Web Stack Academy. Both certificates are available to view and download!",
        contact:          "Want to connect? He is currently open to internship and job opportunities! You can reach out via email, connect on LinkedIn, or explore his open-source work on GitHub."
    };

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ DOM refs ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    var rGuide  = document.getElementById('rGuide');
    var rBubble = document.getElementById('rBubble');
    var rText   = document.getElementById('rText');
    var rChar   = document.getElementById('rChar');
    var rClose  = document.getElementById('rClose');
    var rMute   = document.getElementById('rMute');
    var rMouth  = document.getElementById('rMouth');
    if (!rGuide || !rChar) return;

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ State ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    var muted         = false;
    var bubbleVisible = false;
    var hideTimer     = null;
    var lastSection   = null;
    var synth         = window.speechSynthesis || null;
    var currentUtter  = null;

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Speech helpers ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    function speak(text) {
        if (!synth || muted) return;
        synth.cancel();
        var u = new SpeechSynthesisUtterance(text);
        u.rate   = 0.84;   /* slightly slower = smoother, more deliberate */
        u.pitch  = 0.65;   /* lower pitch = deep male voice */
        u.volume = 0.92;

        /* Prefer a deep male English voice */
        function pickVoice() {
            var voices = synth.getVoices();
            /* Priority 1: explicitly male named voices */
            var maleNames = /david|mark|james|george|daniel|alex|fred|reed|liam|oliver|thomas|eric|guy|richard|paul|william/i;
            var pick = voices.find(function (v) { return /en/i.test(v.lang) && maleNames.test(v.name); });
            /* Priority 2: Google UK English Male */
            if (!pick) pick = voices.find(function (v) { return /en[-_]GB/i.test(v.lang) && /google/i.test(v.name); });
            /* Priority 3: any US English voice except Zira/Cortana (female) */
            if (!pick) pick = voices.find(function (v) { return /en[-_]US/i.test(v.lang) && !/zira|cortana|samantha|victoria|karen|moira|fiona|tessa|allison/i.test(v.name); });
            /* Fallback: any English */
            if (!pick) pick = voices.find(function (v) { return /en/i.test(v.lang); });
            return pick;
        }

        var v = pickVoice();
        if (v) { u.voice = v; }

        /* Animate mouth while speaking */
        u.onstart = function () {
            if (rMouth) rMouth.classList.add('speaking');
            if (rChar) rChar.classList.add('talking');
        };
        u.onend = u.onerror = function () {
            if (rMouth) rMouth.classList.remove('speaking');
            if (rChar) rChar.classList.remove('talking');
        };
        currentUtter = u;
        synth.speak(u);
    }


    function stopSpeech() {
        if (synth) synth.cancel();
        if (rMouth) rMouth.classList.remove('speaking');
        if (rChar) rChar.classList.remove('talking');
    }

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Bubble show / hide ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    function showBubble(text, autoHide) {
        clearTimeout(hideTimer);
        rText.textContent = text;
        rBubble.classList.add('show');
        bubbleVisible = true;
        speak(text);
        if (autoHide) {
            hideTimer = setTimeout(hideBubble, 9000);
        }
    }

    function hideBubble() {
        rBubble.classList.remove('show');
        bubbleVisible = false;
        stopSpeech();
    }

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Mute toggle ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    if (rMute) {
        rMute.addEventListener('click', function (e) {
            e.stopPropagation();
            muted = !muted;
            rMute.textContent = muted ? 'ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ¢â‚¬Â¡' : 'ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂÃ…Â ';
            if (muted) stopSpeech();
            else if (bubbleVisible && rText.textContent) speak(rText.textContent);
        });
    }

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Robot click ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â toggle bubble ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    rChar.addEventListener('click', function () {
        if (bubbleVisible) {
            hideBubble();
        } else {
            showBubble(TOUR[lastSection || 'hero'], false);
        }
    });
    rChar.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); rChar.click(); }
    });

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Close button ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    rClose.addEventListener('click', function (e) {
        e.stopPropagation();
        hideBubble();
    });

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ IntersectionObserver ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â auto-narrate sections ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    var sectionKeys = ['hero', 'about', 'skills', 'projects', 'resume', 'certifications', 'contact'];

    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var key = entry.target.getAttribute('data-tour');
                if (!key || key === lastSection) return;
                lastSection = key;
                clearTimeout(hideTimer);
                setTimeout(function () {
                    showBubble(TOUR[key], true);
                }, 600);
            });
        }, { threshold: 0.3 });

        sectionKeys.forEach(function (k) {
            var el = document.getElementById(k);
            if (el) { el.setAttribute('data-tour', k); io.observe(el); }
        });
    }

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Welcome greeting on load ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    /* Wait for voices to load (Chrome async) */
    function tryWelcome() {
        lastSection = 'hero';
        showBubble(TOUR.hero, true);
    }
    if (synth && synth.getVoices().length === 0) {
        synth.addEventListener('voiceschanged', function once() {
            synth.removeEventListener('voiceschanged', once);
            setTimeout(tryWelcome, 2200);
        });
    } else {
        setTimeout(tryWelcome, 2200);
    }

    /* ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ Custom cursor hover ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ */
    var cRing = document.getElementById('cursorRing');
    if (cRing) {
        rChar.addEventListener('mouseenter', function () { cRing.classList.add('hovered'); });
        rChar.addEventListener('mouseleave', function () { cRing.classList.remove('hovered'); });
    }

})();

/* ═══════════════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';
    var bar = document.getElementById('scrollBar');
    if (!bar) return;
    window.addEventListener('scroll', function () {
        var doc = document.documentElement;
        var top = window.pageYOffset || doc.scrollTop;
        var ht  = doc.scrollHeight - doc.clientHeight;
        bar.style.width = (ht > 0 ? (top / ht) * 100 : 0) + '%';
    }, { passive: true });
})();

/* ═══════════════════════════════════════════════════════════════════
   SMOOTH SCROLL — nav links use CSS scroll-behavior:smooth already,
   this JS override ensures it works even in browsers that ignore CSS
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
})();

/* ═══════════════════════════════════════════════════════════════════
   3D TILT CARDS
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.querySelectorAll('.project-card, .cert-card').forEach(function (card) {
        if (!card.querySelector('.card-shine')) {
            var shine = document.createElement('div');
            shine.className = 'card-shine';
            card.style.position = card.style.position || 'relative';
            card.appendChild(shine);
        }
        card.addEventListener('mousemove', function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left, y = e.clientY - rect.top;
            var px = (x / rect.width - 0.5) * 2, py = (y / rect.height - 0.5) * 2;
            card.style.transform = 'perspective(700px) rotateX('+(-py*12)+'deg) rotateY('+(px*12)+'deg) scale3d(1.02,1.02,1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.18),'+(px*8)+'px '+(py*8)+'px 20px rgba(184,134,11,0.12)';
            var s = card.querySelector('.card-shine');
            if (s) s.style.background = 'radial-gradient(circle at '+(x/rect.width*100)+'% '+(y/rect.height*100)+'%, rgba(255,255,255,0.18) 0%, transparent 65%)';
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
})();

/* ═══════════════════════════════════════════════════════════════════
   MAGNETIC BUTTONS
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.querySelectorAll('.btn, .btn-primary, .btn-ghost').forEach(function (btn) {
        btn.addEventListener('mousemove', function (e) {
            var rect = btn.getBoundingClientRect();
            var dx = e.clientX - (rect.left + rect.width / 2);
            var dy = e.clientY - (rect.top  + rect.height / 2);
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
                var pull = (1 - dist / 80) * 0.4;
                btn.style.transform = 'translate(' + (dx * pull) + 'px,' + (dy * pull) + 'px)';
            }
        });
        btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
})();

/* ═══════════════════════════════════════════════════════════════════
   TEXT SCRAMBLE REVEAL
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';
    var CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
    function scramble(el, txt, dur) {
        var fr = Math.round(dur / 16), f = 0, len = txt.length;
        el.classList.remove('scramble-ready');
        var iv = setInterval(function () {
            f++;
            var rev = Math.floor((f / fr) * len), out = '';
            for (var i = 0; i < len; i++) {
                if (i < rev) out += txt[i];
                else if (txt[i] === ' ') out += ' ';
                else out += CH[Math.floor(Math.random() * CH.length)];
            }
            el.textContent = out;
            if (f >= fr) { clearInterval(iv); el.textContent = txt; el.classList.add('scramble-done'); }
        }, 16);
    }
    if ('IntersectionObserver' in window) {
        document.querySelectorAll('.section-title, .hero-name .name-line').forEach(function (el) {
            var orig = el.textContent.trim();
            el.dataset.scrambleText = orig;
            el.classList.add('scramble-ready');
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) {
                        obs.unobserve(e.target);
                        setTimeout(function () { scramble(e.target, e.target.dataset.scrambleText, 700); }, 150);
                    }
                });
            }, { threshold: 0.3 });
            obs.observe(el);
        });
    }
})();

/* ═══════════════════════════════════════════════════════════════════
   WEB CURSOR TRAIL
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';
    if (!window.matchMedia('(pointer: fine)').matches) return;
    var lx = 0, ly = 0, lt = 0;
    document.addEventListener('mousemove', function (e) {
        var now = Date.now(), dt = now - lt;
        if (dt < 1) return;
        var spd = Math.sqrt(Math.pow(e.clientX - lx, 2) + Math.pow(e.clientY - ly, 2)) / dt;
        if (spd > 5) {
            var ang = Math.atan2(e.clientY - ly, e.clientX - lx) * 180 / Math.PI;
            var len = Math.min(spd * 4, 28);
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', len + 6);
            svg.setAttribute('height', '4');
            svg.style.cssText = 'left:' + (lx - 3) + 'px;top:' + (ly - 2) + 'px;transform:rotate(' + ang + 'deg);transform-origin:0 50%;';
            svg.classList.add('web-trail');
            var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', '0'); line.setAttribute('y1', '2');
            line.setAttribute('x2', String(len)); line.setAttribute('y2', '2');
            line.setAttribute('stroke', 'rgba(192,57,43,0.55)');
            line.setAttribute('stroke-width', '1.5');
            line.setAttribute('stroke-linecap', 'round');
            svg.appendChild(line);
            document.body.appendChild(svg);
            setTimeout(function () { if (svg.parentNode) svg.parentNode.removeChild(svg); }, 520);
        }
        lx = e.clientX; ly = e.clientY; lt = now;
    }, { passive: true });
})();
