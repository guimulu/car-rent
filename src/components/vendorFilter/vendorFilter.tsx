import React, { useContext } from "react";
import { Container, SwitchWrapper, Label, Title } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface Props {
  vendorFilter: string[];
  setVendorFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const VendorFilter: React.FC<Props> = ({ vendorFilter, setVendorFilter }) => {
  const { primary, white } = useContext(ThemeContext);

  const handleVendorFilter = (vendor: string) => {
    if (vendorFilter.includes(vendor)) {
      setVendorFilter(vendorFilter.filter((v) => v !== vendor));
      return;
    }

    setVendorFilter([...vendorFilter, vendor]);
  };

  return (
    <Container>
      <Title>Vendors</Title>
      <SwitchWrapper>
        <Switch
          onChange={() => handleVendorFilter("ALAMO")}
          checked={vendorFilter.includes("ALAMO")}
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
        <Label>ALAMO</Label>
      </SwitchWrapper>
      <SwitchWrapper>
        <Switch
          onChange={() => handleVendorFilter("AVIS")}
          checked={vendorFilter.includes("AVIS")}
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
        <Label>AVIS</Label>
      </SwitchWrapper>
      <SwitchWrapper>
        <Switch
          onChange={() => handleVendorFilter("HERTZ")}
          checked={vendorFilter.includes("HERTZ")}
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
        <Label>HERTZ</Label>
      </SwitchWrapper>
    </Container>
  );
};

export default VendorFilter;
