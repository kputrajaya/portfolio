import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

setupRouting();

// Precache
const urlsToCache = getFiles();
urlsToCache.push({url: '/favicon.ico', revision: null});
setupPrecaching(urlsToCache);

// Runtime cache
registerRoute(
  ({ url }) => (url.hostname === 'fonts.googleapis.com'),
  new StaleWhileRevalidate()
);
