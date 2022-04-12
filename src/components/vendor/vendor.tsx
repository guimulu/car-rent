import React from "react";
import { getImgFromVendor } from "../../helpers/vendor";
import { Container, Badge } from "./styles";

interface Props {
  vendorName: string;
  vendorCount: number;
}

const Vendor: React.FC<Props> = ({ vendorName, vendorCount }) => {
  return (
    <Container>
      <Badge>{vendorCount}</Badge>
      <img alt={vendorName} src={getImgFromVendor(vendorName)} />
    </Container>
  );
};

export default Vendor;
