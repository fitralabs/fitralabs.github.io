(function () {
  var betaLinks = document.querySelectorAll("[data-android-href][data-web-href]");
  if (!betaLinks.length) return;

  var ua = navigator.userAgent || "";
  var isAndroid = /Android/i.test(ua);
  var hrefKey = isAndroid ? "androidHref" : "webHref";

  betaLinks.forEach(function (betaLink) {
    betaLink.href = betaLink.dataset[hrefKey];
  });
})();
