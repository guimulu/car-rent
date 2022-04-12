const size = {
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl: "2560px",
};

const device = {
  mobile: `(min-width: ${size.sm})`,
  tablet: `(min-width: ${size.md})`,
  desktop: `(min-width: ${size.lg})`,
  desktopLarge: `(min-width: ${size.xl})`,
  screen4k: `(min-width: ${size.xxl})`,
};

const mobile = `@media only screen and ${device.mobile}`;
const tablet = `@media only screen and ${device.tablet}`;
const desktop = `@media only screen and ${device.desktop}`;
const desktopLarge = `@media only screen and ${device.desktopLarge}`;
const screen4k = `@media only screen and ${device.screen4k}`;

const breakpoints = {
  mobile,
  tablet,
  desktop,
  screen4k,
  desktopLarge,
};

export default breakpoints;
