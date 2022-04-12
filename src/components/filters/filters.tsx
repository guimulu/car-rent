import React, { useContext } from "react";
import { Container, SwitchWrapper, Label, Title } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface Props {
  isGroupByVendor: boolean;
  setIsGroupByVendor: React.Dispatch<React.SetStateAction<boolean>>;
  isFilterByPrice: boolean;
  setIsFilterByPrice: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filters: React.FC<Props> = ({
  isGroupByVendor,
  setIsGroupByVendor,
  isFilterByPrice,
  setIsFilterByPrice,
}) => {
  const { primary, white } = useContext(ThemeContext);
  return (
    <Container>
      <Title>Filters</Title>
      <SwitchWrapper>
        <Switch
          onChange={() => {
            setIsFilterByPrice(!isFilterByPrice);
            setIsGroupByVendor(false);
          }}
          checked={isFilterByPrice}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={primary}
          offColor={white}
          onHandleColor={primary}
          offHandleColor={primary}
        />
        <Label>Price low to high</Label>
      </SwitchWrapper>
      <SwitchWrapper>
        <Switch
          onChange={() => {
            setIsGroupByVendor(!isGroupByVendor);
            setIsFilterByPrice(false);
          }}
          checked={isGroupByVendor}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={primary}
          offColor={white}
          onHandleColor={primary}
          offHandleColor={primary}
        />
        <Label>Group by vendor</Label>
      </SwitchWrapper>
    </Container>
  );
};

export default Filters;
