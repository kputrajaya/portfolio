import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Runtime cache
registerRoute(
  ({ url: { hostname } }) => (
    hostname === 'fonts.googleapis.com' ||
    hostname === 'fonts.gstatic.com'
  ),
  new StaleWhileRevalidate()
);

setupRouting();

// Precache
const precacheUrls = getFiles();
precacheUrls.push({url: '/favicon.ico', revision: null});
setupPrecaching(precacheUrls);
