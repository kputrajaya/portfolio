import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

setupRouting();

// Precache
const precacheUrls = getFiles();
precacheUrls.push({url: '/favicon.ico', revision: null});
setupPrecaching(precacheUrls);

// Runtime cache
registerRoute(
  ({ url }) => (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ),
  new StaleWhileRevalidate()
);
