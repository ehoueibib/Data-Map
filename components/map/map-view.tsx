"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapControls } from "./map-controls";
import { LayerControl } from "./layer-control";
import { MapMarker } from "./map-marker";

// Sample data points for demonstration
const sampleDataPoints = [
  {
    position: [20.5, -10.5],
    type: "Healthcare",
    title: "Regional Hospital",
    value: "Level 3 Facility",
    color: "#44ff44",
  },
  {
    position: [21.2, -11.3],
    type: "Education",
    title: "University",
    value: "5,000 Students",
    color: "#4444ff",
  },
  {
    position: [21.5, -10.2],
    type: "Infrastructure",
    title: "Power Plant",
    value: "50MW Capacity",
    color: "#ffaa44",
  },
];

function MapController() {
  const map = useMap();

  const handleZoomIn = () => {
    map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    map.setZoom(map.getZoom() - 1);
  };

  const handleReset = () => {
    map.setView([21.0079, -10.9408], 6);
  };

  return (
    <>
      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <LayerControl />
    </>
  );
}

export function MapView() {
  const mapRef = useRef(null);
  const center: [number, number] = [21.0079, -10.9408];
  const zoom = 6;

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full"
        ref={mapRef}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController />
        {sampleDataPoints.map((point, index) => (
          <MapMarker key={index} {...point} />
        ))}
      </MapContainer>
    </div>
  );
}