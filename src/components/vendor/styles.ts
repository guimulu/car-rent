import styled from "styled-components";
import breakpoints from "../../themes/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 16px 24px;
  margin: 32px 0 8px 0;
  border-radius: 8px;
  width: 100%;

  :first-child {
    margin-top: 0;
  }

  img {
    width: 100px;
  }

  ${breakpoints.desktop} {
    width: calc(100% - 32px);
    margin-left: 32px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.primary};
`;

export const Badge = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
