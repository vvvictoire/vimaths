self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('vimaths').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        // CSS
        '/css/normalize.css',
        '/css/pure-min.css',
        // JS
        '/js/mustache.min.js',
        '/js/math.min.js',
        '/js/utilities.js',
        // MathJax
        '/js/MathJax-master/es5/tex-chtml.js',
        '/js/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff',
        '/js/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff',
        '/js/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff',
        '/js/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff',
        '/js/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff',
        // Pages & templates
        '/pages/pythagore.html',
        '/pages/templates/pythagore_template.html'
      ]);
    })
    );
  });
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
    );
  });
    