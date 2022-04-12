import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  Container,
  PickupReturn,
  Title,
  Info,
  Label,
  City,
  Date as DateComponent,
  Action,
} from "./styles";

import { FiChevronsRight } from "react-icons/fi";
import { formatDate } from "../../helpers/date";

import { response } from "../../mock/response";

const Summary: React.FC = () => {
  const { color } = useContext(ThemeContext);
  const {
    VehAvailRSCore: { VehRentalCore },
  } = response;
  const {
    "@PickUpDateTime": pickUpDateTime,
    "@ReturnDateTime": returnDateTime,
    PickUpLocation: { "@Name": pickUpLocationName },
    ReturnLocation: { "@Name": returnLocationName },
  } = VehRentalCore;

  return (
    <Container>
      <Title>Details</Title>
      <PickupReturn>
        <Info>
          <Label>
            Pickup
            <Action onClick={() => alert("fake button")}>Change</Action>
          </Label>
          <City>{pickUpLocationName}</City>
          <DateComponent>{formatDate(new Date(pickUpDateTime))}</DateComponent>
        </Info>
        <FiChevronsRight color={color} size={30} />
        <Info>
          <Label>
            Return
            <Action onClick={() => alert("fake button")}>Change</Action>
          </Label>
          <City>{returnLocationName}</City>
          <DateComponent>{formatDate(new Date(returnDateTime))}</DateComponent>
        </Info>
      </PickupReturn>
    </Container>
  );
};
export default Summary;
