export const GA_TRACKING_ID = "UA-4114546-51";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
