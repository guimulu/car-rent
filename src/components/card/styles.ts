import styled from "styled-components";
import { Amount } from "./components/price/styles";

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.color};
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 8px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 300px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  max-height: 350px;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.primary};

    ${Title} {
      transition: 0.5s ease-in-out;
      color: ${({ theme }) => theme.secondary};
    }
    ${Amount} {
      transition: 0.9s ease-in-out;
      transform: scale(1.2);
      color: ${({ theme }) => theme.tertiary};
    }
    img {
      transition: 0.9s ease-in-out;
      transform: scale(1.1);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 180px;
`;

export const Status = styled.div`
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.color};
  position: absolute;
  top: 60px;
  right: 25px;
  border-radius: 8px;
  padding: 8px;
`;
