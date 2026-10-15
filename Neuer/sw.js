const CACHE = "feussner-shell-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", event => { const req = event.request; if (req.method !== "GET") return; const url = new URL(req.url); if (url.origin !== self.location.origin) return; event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); } return res; }).catch(() => caches.match("./index.html")))); });
