import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { handleDataToShowOnlyVehicles } from "../../components/list/logic";
import Card from "../../components/card/card";
import { Container, Vehicle, Button, NotFound } from "./styles";
import Summary from "../../components/summary/summary";
import Benefits from "../../components/benefits/benefits";

const Details: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const vehicles = handleDataToShowOnlyVehicles();

  const vehicle = vehicles.find((vehicle) => vehicle.code === id);

  return (
    <Container>
      {vehicle ? (
        <>
          <Summary />
          <Vehicle>
            <Card vehicle={vehicle} />
          </Vehicle>
          <Benefits />
          <Button>Book Now</Button>
        </>
      ) : (
        <NotFound onClick={() => navigate("/")}>
          Vehicle not found, <span>BACK</span>
        </NotFound>
      )}
    </Container>
  );
};

export default Details;
