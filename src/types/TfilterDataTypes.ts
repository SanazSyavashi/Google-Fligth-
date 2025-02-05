export interface RelevantFlightParams {
  entityId: string;
  flightPlaceType: string;
  localizedName: string;
  skyId: string;
}

export interface RelevantHotelParams {
  entityId: string;
  entityType: string;
  localizedName: string;
}

export interface Presentation {
  subtitle: string;
  suggestionTitle: string;
  title: string;
}

export interface Entity {
  entityId: string;
  entityType: string;
  localizedName: string;
  skyId: string;
}

export interface Navigation {
  entityId: string;
  entityType: string;
  localizedName: string;
  relevantFlightParams: RelevantFlightParams;
  relevantHotelParams: RelevantHotelParams;
}

export interface DataObject {
  entityId: string;
  navigation: Navigation;
  relevantFlightParams: RelevantFlightParams;
  relevantHotelParams: RelevantHotelParams;
  presentation: Presentation;
  skyId: string;
}

