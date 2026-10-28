# Particle Charge Calculator 2D PWA

## GitHub Pages deployment

1. Create a GitHub repository.
2. Upload every file and the `icons` folder from this package to the repository root.
3. Open **Settings > Pages**.
4. Choose **Deploy from a branch**, select `main`, choose `/ (root)`, then save.
5. Open the published HTTPS URL. Install from the browser menu or address bar.

The app shell is cached after the first successful online visit. Imported field and particle files remain local to the browser. When updating the app, change `CACHE_NAME` in `service-worker.js` so existing installations receive the new cache.

## Local test

Run from this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

Do not test service workers by opening `index.html` directly with a `file://` address.
