import styled from "styled-components";
import breakpoints from "../../themes/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.secondary};
  padding: 40px 24px 80px 24px;

  ${breakpoints.desktopLarge} {
    padding: 32px 80px;
  }
`;

export const Vehicle = styled.div`
  max-width: 398px;
  width: 100%;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 398px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.color};
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-size: 22px;
  font-weight: bold;
  outline: none;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.primary};
    transition: 0.6s ease-in-out;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const NotFound = styled.div`
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.color};
  width: 100%;
  padding: 24px;
  text-align: center;
  cursor: pointer;
`;
