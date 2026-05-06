(function () {
  var betaLink = document.querySelector("[data-android-href][data-web-href]");
  if (!betaLink) return;

  var ua = navigator.userAgent || "";
  var isAndroid = /Android/i.test(ua);

  betaLink.href = isAndroid ? betaLink.dataset.androidHref : betaLink.dataset.webHref;
  betaLink.textContent = isAndroid ? "Download on Play Store" : "Join the open beta";
})();
