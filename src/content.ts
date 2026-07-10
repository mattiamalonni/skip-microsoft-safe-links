(() => {
  "use strict";

  const urlParams: URLSearchParams = new URLSearchParams(
    window.location.search,
  );

  const realUrl: string | null = urlParams.get("url");

  if (realUrl) {
    window.location.replace(decodeURIComponent(realUrl));
  }
})();
