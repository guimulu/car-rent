export interface Response {
  VehAvailRSCore: VehAvailRSCore;
}

export interface VehAvailRSCore {
  VehRentalCore: VehRentalCore;
  VehVendorAvails: VehVendorAvail[];
}

export interface VehRentalCore {
  "@PickUpDateTime": Date;
  "@ReturnDateTime": Date;
  PickUpLocation: PickUpLocation;
  ReturnLocation: PickUpLocation;
}

export interface PickUpLocation {
  "@Name": string;
}

export interface VehVendorAvail {
  Vendor: Vendor;
  VehAvails: VehAvail[];
}

export interface VehAvail {
  "@Status": Status;
  Vehicle: Vehicle;
  TotalCharge: TotalCharge;
}

export enum Status {
  Available = "Available",
}

export interface TotalCharge {
  "@RateTotalAmount": string;
  "@EstimatedTotalAmount": string;
  "@CurrencyCode": CurrencyCode;
}

export enum CurrencyCode {
  CAD = "CAD",
}

export interface Vehicle {
  "@AirConditionInd": string;
  "@TransmissionType": TransmissionType;
  "@FuelType": FuelType;
  "@DriveType": DriveType;
  "@PassengerQuantity": string;
  "@BaggageQuantity": string;
  "@Code": string;
  "@CodeContext": CodeContext;
  "@DoorCount": string;
  VehMakeModel: PickUpLocation;
  PictureURL: string;
  "@Size"?: string;
}

export enum CodeContext {
  Cartrawler = "CARTRAWLER",
}

export enum DriveType {
  Unspecified = "Unspecified",
}

export enum FuelType {
  Petrol = "Petrol",
}

export enum TransmissionType {
  Automatic = "Automatic",
}

export interface Vendor {
  "@Code": string;
  "@Name": string;
}
