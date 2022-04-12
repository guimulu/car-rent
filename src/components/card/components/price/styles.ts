import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  padding: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  img {
    width: 120px;
  }
`;

export const Wrap = styled.div``;

export const Title = styled.h1`
  font-size: 12px;
  color: ${({ theme }) => theme.color};
`;

export const Amount = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;
