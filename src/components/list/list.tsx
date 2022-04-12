import React from "react";
import Card from "../card/card";

import { Container } from "./styles";

import { Vehicle } from "../../models/VehicleModel";
import Vendor from "../vendor/vendor";
import {
  handleDataToShowByVendor,
  handleDataToShowOnlyVehicles,
} from "./logic";

interface Props {
  isGroupByVendor: boolean;
  isFilterByPrice: boolean;
  vendorFilter: string[];
}

const List: React.FC<Props> = ({
  isFilterByPrice,
  isGroupByVendor,
  vendorFilter,
}) => {
  const buildList = (vehicles: Vehicle[]) => {
    return (
      <Container>
        {vehicles.map((vehicle: Vehicle) => {
          if (!vendorFilter.includes(vehicle.vendorName)) {
            return null;
          }
          return <Card key={vehicle.code} vehicle={vehicle} />;
        })}
      </Container>
    );
  };

  const buildGroupedList = (vendors: Array<Vehicle[]>) => {
    return (
      <div>
        {vendors.map((vehicles: Vehicle[]) => {
          if (!vendorFilter.includes(vehicles[0].vendorName)) {
            return null;
          }
          return (
            <>
              <Vendor
                vendorName={vehicles[0].vendorName}
                vendorCount={vehicles.length}
              />
              <Container key={vehicles[0].vendorName}>
                {vehicles.map((vehicle: Vehicle) => {
                  return <Card key={vehicle.code} vehicle={vehicle} />;
                })}
              </Container>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {isGroupByVendor
        ? buildGroupedList(handleDataToShowByVendor())
        : buildList(handleDataToShowOnlyVehicles(isFilterByPrice))}
    </>
  );
};
export default List;
