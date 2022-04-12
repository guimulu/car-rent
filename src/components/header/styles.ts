import styled from "styled-components";
import breakpoint from "../../themes/breakpoints";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  padding: 16px 24px;
  ${breakpoint.desktop} {
    padding: 24px 80px;
  }
`;
