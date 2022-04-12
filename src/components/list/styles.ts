import styled from "styled-components";

import breakpoint from "../../themes/breakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  ${breakpoint.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${breakpoint.desktop} {
    margin-left: 32px;
    grid-template-columns: 1fr 1fr;
  }
  ${breakpoint.desktopLarge} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${breakpoint.screen4k} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
