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
  min-width: 350px;
  ${breakpoints.mobile} {
    z-index: 2;
    position: sticky;
    top: 20px;
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

export const PickupReturn = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.color};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const City = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  margin-bottom: 4px;
`;

export const Date = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.color};
`;

export const Action = styled.div`
  font-size: 12px;
  text-decoration: underline;
  color: ${({ theme }) => theme.primary};
  margin-left: 8px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
