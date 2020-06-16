const staticCacheName = 'site-static-v22';
const dynamicCacheName = 'site-dynamic-v11 ';
const assets = [
    '/',
    '/index.html',
    '/404.html',
    '/imgTxt.html',
    '/about.html',
    '/bookOrder.html',
    '/bookTabel.html',
    '/contact.html',
    '/tts.html',
    '/type.html',
    '/converter.html',
    '/downloadList.html',
    '/gallary.html',
    '/message.html',
    '/music.html',
    '/test.html',
    '/tractTabel.html',
    '/video.html',
    '/js/app.js',
    '/images/icon-74.png',
    '/images/icon.png',
    '/icon.png',
    '/images/icon-74.png',
    '/images/icon-96.png',
    '/images/icon-128.png',
    '/images/icon-144.png',
    '/images/icon-384.png',
    '/images/icon-512.png',
    '/images/sermon1.png',
    '/images/sermon2.png',
    '/images/person_1.png',
    '/images/person_2.png',
    '/images/person_3.png',
    '/images/person_4.png',
    '/media/conv/images/tamil.png',
    '/media/doc/serm.htm',
    '/media/doc/serm.zip',
    '/media/downloads/Software.zip',
    '/media/mp3/serm.mp3',
    '/media/mp3/serm.zip',
    '/media/pdf/serm.pdf',
    '/media/pdf/serm.zip',
    '/media/txt/serm.zip',
    '/media/txt/serm.txt',
    '/media/videos/vid-2.mp4',
    '/media/videos/vid-1.mp4'




];


// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};


// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch events
self.addEventListener('fetch', evt => {
  if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            // check cached items size
            limitCacheSize(dynamicCacheName, 150);
            return fetchRes;
          })
        });
      }).catch(() => {
        if(evt.request.url.indexOf('.html') > -1){
          return caches.match('/fallback.html');
        } 
      })
    );
  }
});