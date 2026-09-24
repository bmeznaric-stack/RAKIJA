const CACHE_NAME="rakija-v3";

const FILES=[
"./",
"./index.html",
"./manifest.json",
"./icon-192.png",
"./icon-512.png",
"./icon-maskable-192.png",
"./icon-maskable-512.png"
];

self.addEventListener("install",event=>{
event.waitUntil(
caches.open(CACHE_NAME).then(cache=>cache.addAll(FILES))
);
});

self.addEventListener("fetch",event=>{
event.respondWith(
caches.match(event.request).then(r=>r||fetch(event.request))
);
});
