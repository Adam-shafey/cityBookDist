self.paw__env={"PAW_CACHE":"true","PAW_VERBOSE":"false","PAW_ENV":"production","PAW_CONFIG_PATH":"/Users/helloworld/Documents/GitHub/CityBook/prod.pawconfig.json","PAW_HOT":"false"};importScripts("/examples/material-ui/precache-manifest.17d1d4fe537bc759bbb0d8724be6acea.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// eslint-disable-next-line
const serviceWorker = self;

serviceWorker.workbox.skipWaiting();
serviceWorker.workbox.clientsClaim();

serviceWorker.workbox.setConfig({
  debug: serviceWorker.paw__env.PAW_ENV !== 'production',
});

const getOfflineHtml = () => {
  const scripts = serviceWorker.paw__offline_assets.filter(a => a.endsWith('.js')).map(js => `<script type="text/javascript" src="${js}" async></script>`).join('');
  return `<!DOCTYPE html><html><head></head><body><div id="${serviceWorker.paw__injected_variables.clientRootElementId}"></div>${scripts}</body></html>`;
};

serviceWorker.workbox.routing.registerRoute(
  new RegExp(`^${serviceWorker.location.origin}/.*__hmm_update.*`),
  serviceWorker.workbox.strategies.networkOnly(),
);

const assetsRegExp = /\.(css|js|jpg|png|jpeg|gif|woff|woff2|ttf|eot|ico|mp4|avi)$/;

const networkFirstHandler = serviceWorker.workbox.strategies.networkFirst();
const cacheFirstHandler = serviceWorker.workbox.strategies.cacheFirst();
const staleHandler = serviceWorker.workbox.strategies.staleWhileRevalidate();

serviceWorker.workbox.routing.setDefaultHandler(({ event }) => {
  const { request } = event;
  const requestMethod = request.method.toUpperCase();

  if (requestMethod !== 'GET') {
    return fetch(event.request);
  }

  if (
    request.url.indexOf(serviceWorker.location.origin) !== -1
    && assetsRegExp.test(request.url)
  ) {
    return cacheFirstHandler.handle({ event });
  }

  if (
    request.url.indexOf(serviceWorker.location.origin) === -1
    && assetsRegExp.test(request.url)
  ) {
    return staleHandler.handle({ event });
  }

  if (
    request.url.indexOf(serviceWorker.location.origin) !== -1
    && request.headers.get('accept').indexOf('html') !== -1
  ) {
    return networkFirstHandler.handle({ event }).then((response) => {
      if (!response) {
        return new Response(
          getOfflineHtml(),
          { headers: { 'Content-Type': 'text/html' } },
        );
      }
      return response;
    });
  }

  return networkFirstHandler.handle({ event });
});

// eslint-disable-next-line
serviceWorker.workbox.precaching.precacheAndRoute(serviceWorker.__precacheManifest);

;self.paw__offline_assets = ["/examples/material-ui/js/be732b130763e7dc6402.js","/examples/material-ui/js/e6ba260176cb1b269ff2.js"];self.paw__injected_variables = {"workboxDebug":true,"port":"9007","host":"0.0.0.0","appRootUrl":"/examples/material-ui","serviceWorker":true,"asyncCSS":false,"serverSideRender":true,"singlePageApplication":false,"cdnUrl":"","clientRootElementId":"app","hstsEnabled":true,"hstsmaxAge":31536000,"hstsIncludeSubDomains":true,"hstsPreload":false,"resourcesBaseUrl":"/examples/material-ui/"};