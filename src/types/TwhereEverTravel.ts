interface FlightQuote {
  price: string;
  rawPrice: number;
  direct: boolean;
}

interface Location {
  id: string;
  skyCode: string;
  name: string;
  type: string;
}

interface Image {
  url: string;
}

interface FlightRoutes {
  directFlightsAvailable: boolean;
}

export interface Content {
  location: Location;
  flightQuotes: {
    cheapest: FlightQuote;
    direct: FlightQuote;
  };
  image: Image;
  flightRoutes: FlightRoutes;
}

interface Result {
  id: string;
  type: string;
  content: Content;
}

interface Context {
  status: string;
  sessionId: string;
  totalResults: number;
}

interface Data {
  context: Context;
  resluts: Result[];
}

export interface ResponseData {
  status: boolean;
  timestamp: number;
  data: Data;
}
