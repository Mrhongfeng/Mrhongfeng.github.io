/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f0f858a4bbb216baa515004d1736b182"
  },
  {
    "url": "accumulate/1.html",
    "revision": "7788bb8459b2bca547078a374ca6ab9e"
  },
  {
    "url": "accumulate/10.html",
    "revision": "955f284ac9f5158ef2e9ac763674bdf6"
  },
  {
    "url": "accumulate/11.html",
    "revision": "f6362ad2b2f25da19c27af66de0e17ef"
  },
  {
    "url": "accumulate/2.html",
    "revision": "883619adeed3a49317b64c08e2e9a15f"
  },
  {
    "url": "accumulate/3.html",
    "revision": "26f6fac3f06b13ab596d750539af40c2"
  },
  {
    "url": "accumulate/4.html",
    "revision": "8f7364295848e4ab26a4468bab42e3d7"
  },
  {
    "url": "accumulate/5.html",
    "revision": "6d5c7b7822907c3f7a0672ad089d656f"
  },
  {
    "url": "accumulate/6.html",
    "revision": "21a8db927a6ac5f70ce590959511f6f1"
  },
  {
    "url": "accumulate/7.html",
    "revision": "7f512279601e5303de9dc5fd3b5518d0"
  },
  {
    "url": "accumulate/8.html",
    "revision": "52a8d6b3695c605309f46f9830d7e5cd"
  },
  {
    "url": "accumulate/9.html",
    "revision": "4019550e4ec153c507301ebdc38a6834"
  },
  {
    "url": "accumulate/index.html",
    "revision": "2c773705fe4035f286b48bfd8ddec998"
  },
  {
    "url": "algorithm/index.html",
    "revision": "56adc9fbb2d6054c9a52097cc53a6749"
  },
  {
    "url": "assets/css/0.styles.8eb0d87d.css",
    "revision": "4128d7f240c09e8131493c3b9d34a224"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c2d37694.js",
    "revision": "c61a31f185a701f6b1a3c072dc0a3bcb"
  },
  {
    "url": "assets/js/11.f33dd2fb.js",
    "revision": "fa19ae822581629837439df04f307c43"
  },
  {
    "url": "assets/js/12.5b5e0a86.js",
    "revision": "5615e27e6f642a18eeeaecd7bfb417f9"
  },
  {
    "url": "assets/js/13.7783dffd.js",
    "revision": "14f98fd281517e4472c450c9e391640b"
  },
  {
    "url": "assets/js/14.fdd77f34.js",
    "revision": "17b25a2a60883a01cf1acce595d1560b"
  },
  {
    "url": "assets/js/15.45aa3312.js",
    "revision": "f2c4b26a9696181e06d3fe701daf66af"
  },
  {
    "url": "assets/js/16.d16279ab.js",
    "revision": "96e647929d520cd342187bd741da3434"
  },
  {
    "url": "assets/js/17.86feb4ad.js",
    "revision": "33713f453a31c152f8e2b5371465be20"
  },
  {
    "url": "assets/js/18.02dbdf28.js",
    "revision": "727891f1df9fc1a3dd8ff2c57c4e6e3d"
  },
  {
    "url": "assets/js/19.4291ce76.js",
    "revision": "c63cfa7fac28ad100b0ecbeb41146f52"
  },
  {
    "url": "assets/js/2.bea9e773.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/20.8b93a682.js",
    "revision": "f11119ae0014b1eb42e60ec39d16fb22"
  },
  {
    "url": "assets/js/3.dad9bf50.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.dd1196e1.js",
    "revision": "86421c7f5b670fffa32338a8f5bfeadb"
  },
  {
    "url": "assets/js/5.c506c4bf.js",
    "revision": "97f134b1663787ff5815a73ec30ff891"
  },
  {
    "url": "assets/js/6.9763d998.js",
    "revision": "4dc3e22e4434bd1776d248a3ab8f42b4"
  },
  {
    "url": "assets/js/7.1961b880.js",
    "revision": "826497afe0ba2cbaec4ebe931d97b417"
  },
  {
    "url": "assets/js/8.f8dfdb84.js",
    "revision": "0b03e7f66ee612372d0156e1636c0e5d"
  },
  {
    "url": "assets/js/9.72acfe56.js",
    "revision": "92c1ab86e2b0983dfcae50f57b25eb7f"
  },
  {
    "url": "assets/js/app.d2a1eb9d.js",
    "revision": "715d1f7d5c39b59c51875164c06e3b96"
  },
  {
    "url": "guide.html",
    "revision": "44e625c4ddaf34e3a200f690379a2e65"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "b21768ed0290a3e8f29ce22182134437"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/gitcommit.jpg",
    "revision": "40f73e9e8c183461bada9b09dd93981d"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/photo.png",
    "revision": "0dceb06cc5462aa2c40bfa3ef5cba212"
  },
  {
    "url": "images/pink.jpg",
    "revision": "8dbee8cee20194743f2307bbfc5973bc"
  },
  {
    "url": "index.html",
    "revision": "2795af1d01d1fc0a3e61cb407ab2e52c"
  },
  {
    "url": "others/1.html",
    "revision": "371067f361f4a8d7f6dc2af26a92d7c5"
  },
  {
    "url": "others/index.html",
    "revision": "68943eecf63cb5148c1446de83171059"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
