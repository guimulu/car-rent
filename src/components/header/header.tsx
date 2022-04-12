import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Navbar } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { name, secondary } = useContext(ThemeContext);
  return (
    <Navbar>
      <img
        alt="CarTrawler"
        src="https://ctwebsite.cartrawler.com/wp-content/uploads/2021/12/ct-logo-light.svg"
      />
      <Switch
        onChange={toggleTheme}
        checked={name === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={secondary}
        offColor={secondary}
        onHandleColor={secondary}
      />
    </Navbar>
  );
};

export default Header;
