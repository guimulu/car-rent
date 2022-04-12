import React, { useContext } from "react";

import {
  GiGearStickPattern,
  GiCarDoor,
  GiGasPump,
  GiThermometerCold,
  GiCarSeat,
  GiRollingSuitcase,
} from "react-icons/gi";

import { ThemeContext } from "styled-components";

import { InfoItem, InfoWrap } from "./styles";

interface Props {
  airConditionInd: string;
  transmissionType: string;
  fuelType: string;
  passengerQuantity: string;
  doorCount: string;
  baggageQuantity: string;
}

const Info: React.FC<Props> = ({
  airConditionInd,
  transmissionType,
  doorCount,
  baggageQuantity,
  fuelType,
  passengerQuantity,
}) => {
  const { color } = useContext(ThemeContext);
  return (
    <InfoWrap>
      <InfoItem>
        <GiGearStickPattern fontSize={18} color={color} />
        <span>{transmissionType}</span>
      </InfoItem>
      <InfoItem>
        <GiCarDoor fontSize={18} color={color} />
        <span>{doorCount} Doors</span>
      </InfoItem>
      <InfoItem>
        <GiCarSeat fontSize={18} color={color} />
        <span>{passengerQuantity}</span>
      </InfoItem>
      <InfoItem>
        <GiRollingSuitcase fontSize={18} color={color} />
        <span>{baggageQuantity} Suitcase</span>
      </InfoItem>
      <InfoItem>
        <GiGasPump fontSize={18} color={color} />
        <span>{fuelType}</span>
      </InfoItem>
      <InfoItem>
        <GiThermometerCold fontSize={18} color={color} />
        <span>{airConditionInd === "true" ? "Air Cond..." : "n/a"}</span>
      </InfoItem>
    </InfoWrap>
  );
};

export default Info;
