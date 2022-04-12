import { response } from "../../mock/response";
import { VehAvail, VehVendorAvail } from "../../models/ResponseModel";
import { Vehicle } from "../../models/VehicleModel";

export const handleDataToShowOnlyVehicles = (
  isFilterByPrice?: boolean
): Vehicle[] => {
  const {
    VehAvailRSCore: { VehVendorAvails },
  } = response;
  const vehicles = VehVendorAvails.reduce(
    (list: Vehicle[], vehVendorAvails: VehVendorAvail) => {
      const { VehAvails, Vendor } = vehVendorAvails;
      const vehAvails = VehAvails.map((vehAvails: VehAvail) => {
        return {
          code: `${Vendor["@Name"]}-${Vendor["@Code"]}-${vehAvails.Vehicle["@Code"]}-${vehAvails.Vehicle["@CodeContext"]}`,
          vendorName: Vendor["@Name"],
          status: vehAvails["@Status"],
          airConditionInd: vehAvails.Vehicle["@AirConditionInd"],
          transmissionType: vehAvails.Vehicle["@TransmissionType"],
          fuelType: vehAvails.Vehicle["@FuelType"],
          driveType: vehAvails.Vehicle["@DriveType"],
          passengerQuantity: vehAvails.Vehicle["@PassengerQuantity"],
          doorCount: vehAvails.Vehicle["@DoorCount"],
          baggageQuantity: vehAvails.Vehicle["@BaggageQuantity"],
          vehMakeModelName: vehAvails.Vehicle.VehMakeModel["@Name"],
          pictureUrl: vehAvails.Vehicle.PictureURL,
          rateTotalAmount: Number(vehAvails.TotalCharge["@RateTotalAmount"]),
          rateCurrencyCode: vehAvails.TotalCharge["@CurrencyCode"],
        };
      });
      return [...list, ...vehAvails];
    },
    []
  );
  if (isFilterByPrice) {
    return vehicles.sort((a, b) => a.rateTotalAmount - b.rateTotalAmount);
  }
  return vehicles;
};

export const handleDataToShowByVendor = (): Array<Vehicle[]> => {
  const {
    VehAvailRSCore: { VehVendorAvails },
  } = response;
  return VehVendorAvails.map((vehVendorAvails: VehVendorAvail) => {
    const { VehAvails, Vendor } = vehVendorAvails;
    return VehAvails.map((vehAvails: VehAvail) => {
      return {
        code: `${Vendor["@Name"]}-${Vendor["@Code"]}-${vehAvails.Vehicle["@Code"]}-${vehAvails.Vehicle["@CodeContext"]}`,
        vendorName: Vendor["@Name"],
        status: vehAvails["@Status"],
        airConditionInd: vehAvails.Vehicle["@AirConditionInd"],
        transmissionType: vehAvails.Vehicle["@TransmissionType"],
        fuelType: vehAvails.Vehicle["@FuelType"],
        driveType: vehAvails.Vehicle["@DriveType"],
        passengerQuantity: vehAvails.Vehicle["@PassengerQuantity"],
        doorCount: vehAvails.Vehicle["@DoorCount"],
        baggageQuantity: vehAvails.Vehicle["@BaggageQuantity"],
        vehMakeModelName: vehAvails.Vehicle.VehMakeModel["@Name"],
        pictureUrl: vehAvails.Vehicle.PictureURL,
        rateTotalAmount: Number(vehAvails.TotalCharge["@RateTotalAmount"]),
        rateCurrencyCode: vehAvails.TotalCharge["@CurrencyCode"],
      };
    });
  });
};
