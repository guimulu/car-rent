import styled from "styled-components";

import breakpoint from "../../themes/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.secondary};
  padding: 16px 24px 80px 24px;
  ${breakpoint.desktop} {
    flex-direction: row;
  }

  ${breakpoint.desktopLarge} {
    padding: 32px 80px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  ${breakpoint.desktop} {
    position: sticky;
    top: 0;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
