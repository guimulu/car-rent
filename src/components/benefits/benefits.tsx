import React from "react";
import { Container, Title, BenefitWrap, Text } from "./styles";

import { GiCheckMark } from "react-icons/gi";

const Benefits: React.FC = () => {
  return (
    <Container>
      <Title>Benefits</Title>
      <BenefitWrap>
        <Text>
          <GiCheckMark /> Unlimited Mileage
        </Text>
        <Text>
          <GiCheckMark /> Free Insurance
        </Text>
        <Text>
          <GiCheckMark /> Free Cancellation Until 24hrs Before
        </Text>
      </BenefitWrap>
    </Container>
  );
};

export default Benefits;
