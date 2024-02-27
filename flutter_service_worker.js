'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7c7f8d9281562c58aac701ba4d8abf7a",
"index.html": "6bbafcb5a9d9486bd398138084c76105",
"/": "6bbafcb5a9d9486bd398138084c76105",
"main.dart.js": "bec0ca9477aefd09e4d87cb90c934afc",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bed8caa7daf655a51602e3b8ee18fd2f",
".git/ORIG_HEAD": "ab71b66f60b96b3f5c149e6a57a6b6ca",
".git/config": "bca95c699b5dd14361044005227b0d7f",
".git/objects/57/2ff9bc989d13e4e71e1bace8f41b9af71e3413": "e17090945aa85bd2b2be6cb50cea855f",
".git/objects/6f/d65f43c11621636b5b648e04aed9de3e613473": "3cfea094978d2decc92edeae0aef6feb",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/1c19232ee2619d83c329c29424274a6e095a99": "0734f43d3e07cb05ed5724b85b316a4c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/0b/e7130060b2e713ef30c228ed532439e787d954": "acffed010ab1a62fdfccabb15e963762",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/05/c789603fca62c7eaa11a1b08548e8fea2b52d8": "a3af702abf227b37b5b30213d3cb48a4",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/98296b22eff91fc470ab152775a46242ddd77c": "208ef66965750c4f817bb13e88c9aa20",
".git/objects/ac/84263392f7516342349ac9a4b3445080be0532": "2768219424cf3cebcd5f9e471e6c504b",
".git/objects/ad/5a512661091f4968d4f0ecc589d0d29f2cc645": "7bd25bac01dd93a5171e27bfc5ee976f",
".git/objects/d0/d8be4bcb2cb4c6df711519494516a40363d76c": "70b1730398098b135fd792a87ae2ad01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/477fcb2bdb2442644cd9bcb21fb73caa51460a": "cf069082bbe1184ec6bd4c81c015275e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/60bff7734faad4a0f5e2dc8f03cd5e82ede99f": "fce2f4a34c62464c26a2345b4a84598d",
".git/objects/ee/c084684e1aa02fc0d3dd535e697e8e4f38a361": "0ef0f12060ebf00d7356baebfb794f4e",
".git/objects/fc/7134928cc1a87d453bff1a8cb52fbcb3931951": "6f64f66e1fe57ba502a91e8e0c64b3b9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/410c0244775a07ac96ed7560713d7fc07c89ed": "5d1cda79bc692a3b30d4e3061446573b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/c40d358ce9e2e0a8b5d85a189dc1f6bf0fb428": "0b06546e56d1ac8687261bfaab385048",
".git/objects/17/0f3ba8707c3ceb9b45c13579025c5c0fd11cb9": "c62bc7ba905909d6af120d0b0a56dd6c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/827949406a080cda42eae0e6c1af3eaa69179f": "561a6fb142aa5a459b54c7af0c7192ed",
".git/objects/44/216d29ba9746cdd3d2b504302aa1c0fbe5994d": "57d38cc2cedff4855f6e3078f7391740",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/6e/90cbfe27ff4191e2f4a9d0b3bebdc2a1bab5e8": "e9271083d0cead4826a928c56033d4b7",
".git/objects/5c/1573011471fea257f3141543d9271670025110": "ec20c6d50bad522bf0d89fb9394dfdcc",
".git/objects/96/d3356314185aa4b258a6b2e1bd8a20807ac5e7": "e4bfa2d29c4a13af1cd14925454e3f04",
".git/objects/90/d3db9623b83a3076589959bcbef426ea092976": "02618e8f623f19a32877d07d0f18eac8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/00296d0b68c69dbe659fb1e7386d6e267a3e03": "c49c2e871e27f951d327165b6bd7e0cf",
".git/objects/aa/8ae1eede2691024cc097ea20f09c54e2c454f6": "47b5fabec296a2a471f48ea8fb79ced7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/45999a6c5a614f02cc1bc2d994b5fc229fbd2b": "a6c83c2af96589af5f20cb79542b7a52",
".git/objects/de/f4ce36521f2a08be875e15c3f998759d394edc": "4387b343c27fade33f841506e335f79d",
".git/objects/a6/7b264c81eb5db8469c231139424f656224329e": "260c1754c234393ff4ee46842b3744b7",
".git/objects/a6/3598728ab76cc91b555050e65200cac487627b": "da521d817d7290d3778eb77fb093d3e9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/e14a7c3328f0633b719a5cedc432c5e00b9379": "5517de55ceb7100cff89b36f23c0b92f",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f0/e004c1bf74ff91a4505bcd32fff8dd3630d12d": "d484a01e687cce32209dee37b674bc45",
".git/objects/f7/8c0ad7146d15814f3db1651f1d25235955ee19": "da0d65645f7e9ab204fd01af56a781e9",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f1/b2e8e0b4515362ac6b273f9558c3f7bd771548": "08271e2c5e71ed353d712e0977269912",
".git/objects/ce/dcde8b2db912f494a358ec5881052270f84952": "ce1d89a9dfc007da0e5e106a9afe2c38",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/08176d29c934b0c261d3e25edc3c49ecc0df25": "6cdd8efd8d988f67087e6f879232c8f5",
".git/objects/77/f3f652f8d0bfb176918c9a3c63b5edfeb36ba6": "fbb6a518b80d368d1e6dfa05ba8cd624",
".git/objects/77/0771b231fde010d0ce532b0a93bc662a0ea786": "c5f23e17ce6c08d8d031d5f68d93d1fe",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/498113f9c90777e0afd7906a98f5c80c6eb5a5": "fa5e002340f7224d66dc40de7b850d6f",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/6d4634071f2b75743ac612e9935f2fba44e7d7": "471a1a8dfd62b28fdb324f050683a342",
".git/objects/1d/423bafa0cf059b78a876a7e72b5b4c19ebb91f": "30932cb33e9a325f6d3013cfdb00cfaf",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/14/580893bf95e3704f4c1c13e68055c29ae04b4d": "c7e1cb260308d1e534a48a936c2dafb0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "718449ca74bd44a113d3e13247a24e98",
".git/logs/refs/heads/master": "718449ca74bd44a113d3e13247a24e98",
".git/logs/refs/remotes/origin/master": "5c5b3fec36ef6a058f1a56933594b112",
".git/logs/refs/remotes/origin/main": "82a6b24eade255ab616a6a8e3343591b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "5780118729b483a1e33d68ba7cea4eb8",
".git/refs/remotes/origin/master": "5780118729b483a1e33d68ba7cea4eb8",
".git/refs/remotes/origin/main": "c5f35c752c6962380a8f563e6ebcccf8",
".git/index": "3fa055aa3104579c077db7d9262eeec6",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "e486b1e9ecae4fe88f370dd5eb2db6e9",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "c5e6deac765c4793110b1ae5c8cb5408",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
