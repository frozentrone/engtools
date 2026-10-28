"use strict";

/*
 * Increase this version whenever the app shell changes.
 *
 * Example future versions:
 * particle-charge-2d-v29
 * particle-charge-2d-v30
 */
const CACHE_NAME = "particle-charge-2d-v28";

/*
 * Used to identify caches belonging only to the
 * Particle Charge Calculator.
 */
const CACHE_PREFIX = "particle-charge-2d-";

/*
 * Files required to open and install the app.
 *
 * Every listed file must exist. If one file is missing,
 * cache.addAll() will fail and the service worker will
 * not install.
 */
const APP_SHELL = [
  "/pccc/",
  "/pccc/index.html",
  "/pccc/manifest.webmanifest",
  "/pccc/favicon.png",

  "/pccc/icons/icon-48.png",
  "/pccc/icons/icon-72.png",
  "/pccc/icons/icon-96.png",
  "/pccc/icons/icon-128.png",
  "/pccc/icons/icon-144.png",
  "/pccc/icons/icon-152.png",
  "/pccc/icons/icon-180.png",
  "/pccc/icons/icon-192.png",
  "/pccc/icons/icon-384.png",
  "/pccc/icons/icon-512.png",

  "/pccc/icons/icon-maskable-192.png",
  "/pccc/icons/icon-maskable-512.png"
];

/*
 * Install:
 * Pre-cache the application shell for offline use.
 */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_SHELL);
    })
  );

  /*
   * Activate this worker without waiting for all
   * existing app windows to close.
   */
  self.skipWaiting();
});

/*
 * Activate:
 * Remove only obsolete Particle Charge Calculator caches.
 *
 * Aero S and unrelated GitHub Pages caches are preserved.
 */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      const obsoletePcccCaches = cacheNames.filter(cacheName => {
        return (
          cacheName.startsWith(CACHE_PREFIX) &&
          cacheName !== CACHE_NAME
        );
      });

      return Promise.all(
        obsoletePcccCaches.map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );

  /*
   * Allow the new worker to control open /pccc/ pages.
   */
  self.clients.claim();
});

/*
 * Support an update button that sends:
 *
 * { type: "SKIP_WAITING" }
 */
self.addEventListener("message", event => {
  if (
    event.data &&
    event.data.type === "SKIP_WAITING"
  ) {
    self.skipWaiting();
  }
});

/*
 * Handle requests made by the PCCC application.
 */
self.addEventListener("fetch", event => {
  const request = event.request;

  /*
   * Ignore POST and other non-GET requests.
   */
  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);

  /*
   * Ignore external origins.
   */
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  /*
   * Restrict this worker to the /pccc/ repository.
   *
   * Requests for /aeros/ and other repositories
   * are deliberately ignored.
   */
  if (!requestUrl.pathname.startsWith("/pccc/")) {
    return;
  }

  /*
   * Navigation:
   *
   * Use network first to retrieve the latest HTML.
   * If offline, return the cached index page.
   */
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const responseCopy = response.clone();

            event.waitUntil(
              caches.open(CACHE_NAME).then(cache => {
                return cache.put(
                  "/pccc/index.html",
                  responseCopy
                );
              })
            );
          }

          return response;
        })
        .catch(async () => {
          const cachedIndex = await caches.match(
            "/pccc/index.html"
          );

          if (cachedIndex) {
            return cachedIndex;
          }

          return caches.match("/pccc/");
        })
    );

    return;
  }

  /*
   * Static resources:
   *
   * Use a cache-first strategy for icons, the manifest,
   * and other same-origin app assets.
   */
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then(response => {
        /*
         * Do not cache unsuccessful responses.
         */
        if (!response || !response.ok) {
          return response;
        }

        const responseCopy = response.clone();

        event.waitUntil(
          caches.open(CACHE_NAME).then(cache => {
            return cache.put(
              request,
              responseCopy
            );
          })
        );

        return response;
      });
    })
  );
});
