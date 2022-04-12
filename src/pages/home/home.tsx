import React, { useState } from "react";
import Filters from "../../components/filters/filters";
import List from "../../components/list/list";
import Summary from "../../components/summary/summary";
import VendorFilter from "../../components/vendorFilter/vendorFilter";
import { Container, TopWrapper } from "./styles";

const Home: React.FC = () => {
  const [isFilterByPrice, setIsFilterByPrice] = useState(true);
  const [isGroupByVendor, setIsGroupByVendor] = useState(false);
  const [vendorFilter, setVendorFilter] = useState<string[]>([
    "ALAMO",
    "AVIS",
    "HERTZ",
  ]);

  return (
    <Container>
      <TopWrapper>
        <Summary />
        <Filters
          isFilterByPrice={isFilterByPrice}
          setIsFilterByPrice={setIsFilterByPrice}
          isGroupByVendor={isGroupByVendor}
          setIsGroupByVendor={setIsGroupByVendor}
        />
        <VendorFilter
          vendorFilter={vendorFilter}
          setVendorFilter={setVendorFilter}
        />
      </TopWrapper>
      <List
        isFilterByPrice={isFilterByPrice}
        isGroupByVendor={isGroupByVendor}
        vendorFilter={vendorFilter}
      />
    </Container>
  );
};

export default Home;
