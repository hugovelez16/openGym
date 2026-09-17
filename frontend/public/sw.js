/* openGym service worker — runtime caching (works with Vite's hashed asset names).
   Media (img/gif) cache-first; everything else network-first with offline fallback. */
const CACHE = 'opengym-rt-v2'

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()))
})

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {}
  e.waitUntil(self.registration.showNotification(data.title || 'openGym', {
    body: data.body || '',
    icon: 'icon-512.png',
    badge: 'icon-180.png',
    tag: data.tag || 'opengym',
    renotify: true
  }))
})

self.addEventListener('notificationclick', e => {
  e.notification.close()
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(clients => {
    const c = clients.find(c => 'focus' in c)
    return c ? c.focus() : self.clients.openWindow('./')
  }))
})

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)
  if (e.request.method !== 'GET' || url.origin !== location.origin) return
  if (url.pathname.startsWith('/api/')) return    // never cache auth/data

  const isMedia = url.pathname.includes('/img/') || url.pathname.includes('/gif/')
  if (isMedia) {
    e.respondWith(
      caches.open(CACHE).then(async c => {
        try {
          const hit = await c.match(e.request)
          if (hit) return hit
          const res = await fetch(e.request)
          if (res && res.ok) {
            c.put(e.request, res.clone()).catch(() => {})
          }
          return res
        } catch {
          return new Response('', { status: 404 })
        }
      }).catch(() => fetch(e.request).catch(() => new Response('', { status: 404 })))
    )
  } else {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.ok && e.request.method === 'GET') {
            const copy = res.clone()
            caches.open(CACHE).then(c => c.put(e.request, copy))
          }
          return res
        })
        .catch(async () => {
          const hit = await caches.match(e.request)
          if (hit) return hit
          if (e.request.mode === 'navigate') {
            const indexHit = (await caches.match('/index.html')) || (await caches.match('./index.html')) || (await caches.match('index.html'))
            if (indexHit) return indexHit
          }
          return new Response('Network error', { status: 503, headers: { 'Content-Type': 'text/plain' } })
        })
    )
  }
})
