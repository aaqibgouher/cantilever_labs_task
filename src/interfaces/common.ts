import React, { ReactNode, FC } from "react";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ReactComponentProps {
  children?: ReactNode;
  icon?: string;
  color?: string;
  margin?: string;
  size?: number;
  cardType?: string,
  startCoords?: Coordinates;
  endCoords?: Coordinates;
}

export interface ReactComponentType extends FC<ReactComponentProps> {}

export interface RouteMappingType {
  [key: string]: React.ComponentType<any>;
}
