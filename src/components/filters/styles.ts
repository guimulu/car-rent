import styled from "styled-components";
import breakpoints from "../../themes/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  width: 100%;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.secondary};
  ${breakpoints.desktop} {
    position: sticky;
    top: 168px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.color};
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 8px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  margin: 8px 0;
  padding-left: 32px;
`;

export const Label = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color};
  margin-left: 16px;
`;
