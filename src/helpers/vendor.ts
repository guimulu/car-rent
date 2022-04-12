export const getImgFromVendor = (vendor: string) => {
  return {
    AVIS: "https://cartrawler.com/ct/wp-content/uploads/2022/01/Avis-2.png",
    ALAMO:
      "https://www.alamo.com/content/dam/alamo/functional/alamo-brand-logos/alamo_site_logo.png",
    HERTZ: "https://cartrawler.com/ct/wp-content/uploads/2022/01/Hertz-2.png",
  }[vendor];
};
