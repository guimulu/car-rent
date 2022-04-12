import { getImgFromVendor } from "./vendor";

describe("getImgFromVendor", () => {
  it("should return the correct image url", () => {
    expect(getImgFromVendor("AVIS")).toBe(
      "https://cartrawler.com/ct/wp-content/uploads/2022/01/Avis-2.png"
    );
    expect(getImgFromVendor("ALAMO")).toBe(
      "https://www.alamo.com/content/dam/alamo/functional/alamo-brand-logos/alamo_site_logo.png"
    );
    expect(getImgFromVendor("HERTZ")).toBe(
      "https://cartrawler.com/ct/wp-content/uploads/2022/01/Hertz-2.png"
    );
  });
});
