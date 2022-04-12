import React from "react";
import { formatMonetary } from "../../../../helpers/money";
import { getImgFromVendor } from "../../../../helpers/vendor";

import { Amount, Container, Title, Wrap } from "./styles";

interface Props {
  amount: number;
  currencyCode: string;
  vendorName: string;
}

const Price: React.FC<Props> = ({ amount, currencyCode, vendorName }) => {
  return (
    <Container>
      <img alt={vendorName} src={getImgFromVendor(vendorName)} />
      <Wrap>
        <Amount>{formatMonetary(amount, currencyCode)}</Amount>
        <Title>Total car rental price</Title>
      </Wrap>
    </Container>
  );
};

export default Price;
