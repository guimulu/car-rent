// http://www.cartrawler.com/ctabe/cars.json

import {
  Response,
  CodeContext,
  Status,
  TransmissionType,
  DriveType,
  FuelType,
  CurrencyCode,
} from "../models/ResponseModel";

export const response: Response = {
  VehAvailRSCore: {
    VehRentalCore: {
      "@PickUpDateTime": new Date("2020-03-22T10:00:00Z"),
      "@ReturnDateTime": new Date("2020-04-06T10:00:00Z"),
      PickUpLocation: {
        "@Name": "Las Vegas - Airport",
      },
      ReturnLocation: {
        "@Name": "Las Vegas - Airport",
      },
    },
    VehVendorAvails: [
      {
        Vendor: {
          "@Code": "125",
          "@Name": "ALAMO",
        },
        VehAvails: [
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5+",
              "@BaggageQuantity": "3",
              "@Code": "IFAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "5",
              VehMakeModel: {
                "@Name": "Toyota Rav4 or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "878.98",
              "@EstimatedTotalAmount": "878.98",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "4",
              "@Code": "PCAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "4",
              VehMakeModel: {
                "@Name": "Chrysler 300 or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/chrysler/300/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "851.03",
              "@EstimatedTotalAmount": "851.03",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
        ],
      },
      {
        Vendor: {
          "@Code": "1364",
          "@Name": "AVIS",
        },
        VehAvails: [
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "4",
              "@Code": "FDAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "4",
              VehMakeModel: {
                "@Name": "Chevrolet Impala or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/chevrolet/impala/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "836.25",
              "@EstimatedTotalAmount": "836.25",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "4",
              "@Code": "FCAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "3",
              VehMakeModel: {
                "@Name": "Chevrolet Impala or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/chevrolet/impala/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "836.25",
              "@EstimatedTotalAmount": "836.25",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5+",
              "@BaggageQuantity": "3",
              "@Code": "IFAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "5",
              VehMakeModel: {
                "@Name": "Ford Escape or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/ford/escape/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "928.29",
              "@EstimatedTotalAmount": "928.29",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "5",
              "@Code": "LDAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "4",
              VehMakeModel: {
                "@Name": "Cadillac CTS or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/cadillac/cts/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "1118.83",
              "@EstimatedTotalAmount": "1118.83",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "5",
              "@Code": "PDAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "4",
              VehMakeModel: {
                "@Name": "Chrysler 300 or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/chrysler/300/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "1071.92",
              "@EstimatedTotalAmount": "1071.92",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
        ],
      },
      {
        Vendor: {
          "@Code": "2338",
          "@Name": "HERTZ",
        },
        VehAvails: [
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "4",
              "@Code": "ICAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "3",
              "@Size": "6",
              VehMakeModel: {
                "@Name": "Toyota Corolla or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/toyota/corolla/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "752.31",
              "@EstimatedTotalAmount": "752.31",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "2",
              "@Code": "ECAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "2",
              VehMakeModel: {
                "@Name": "Kia Rio or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/kia/rio/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "731.47",
              "@EstimatedTotalAmount": "731.47",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
          {
            "@Status": Status.Available,
            Vehicle: {
              "@AirConditionInd": "true",
              "@TransmissionType": TransmissionType.Automatic,
              "@FuelType": FuelType.Petrol,
              "@DriveType": DriveType.Unspecified,
              "@PassengerQuantity": "5",
              "@BaggageQuantity": "2",
              "@Code": "CDAR",
              "@CodeContext": CodeContext.Cartrawler,
              "@DoorCount": "5",
              VehMakeModel: {
                "@Name": "Ford Focus or similar",
              },
              PictureURL:
                "https://ctimg-fleet.cartrawler.com/ford/focus/primary.png?auto=format&w=600",
            },
            TotalCharge: {
              "@RateTotalAmount": "731.49",
              "@EstimatedTotalAmount": "731.49",
              "@CurrencyCode": CurrencyCode.CAD,
            },
          },
        ],
      },
    ],
  },
};
