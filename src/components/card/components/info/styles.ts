import styled from "styled-components";

export const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  span {
    margin-left: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.color};
  }
`;
