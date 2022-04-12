import React from "react";

import { Container, Title, Image, Status } from "./styles";

import Info from "./components/info/info";
import Price from "./components/price/price";
import { Vehicle } from "../../models/VehicleModel";

import { useNavigate } from "react-router-dom";

interface Props {
  vehicle: Vehicle;
}

const Card: React.FC<Props> = ({ vehicle }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/${vehicle.code}`)}>
      <Title>{vehicle.vehMakeModelName}</Title>
      <Image alt={vehicle.vehMakeModelName} src={vehicle.pictureUrl} />
      <Info
        airConditionInd={vehicle.airConditionInd}
        baggageQuantity={vehicle.baggageQuantity}
        doorCount={vehicle.doorCount}
        fuelType={vehicle.fuelType}
        transmissionType={vehicle.transmissionType}
        passengerQuantity={vehicle.passengerQuantity}
      />
      <Price
        amount={vehicle.rateTotalAmount}
        currencyCode={vehicle.rateCurrencyCode}
        vendorName={vehicle.vendorName}
      />
      <Status>{vehicle.status}</Status>
    </Container>
  );
};

export default Card;
