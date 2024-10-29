"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { DataTooltip } from "./data-tooltip";

interface MapMarkerProps {
  position: [number, number];
  type: string;
  title: string;
  value: string | number;
  color: string;
}

export function MapMarker({ position, type, title, value, color }: MapMarkerProps) {
  const customIcon = new L.DivIcon({
    className: "custom-div-icon",
    html: `
      <div style="
        background-color: ${color};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

  return (
    <DataTooltip
      data={{
        title,
        value,
        type,
        coordinates: position,
      }}
    >
      <div>
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{type}</p>
              <p className="text-sm">{value}</p>
            </div>
          </Popup>
        </Marker>
      </div>
    </DataTooltip>
  );
}