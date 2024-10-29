"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Layers } from "lucide-react";

interface Layer {
  id: string;
  name: string;
  color: string;
}

const availableLayers: Layer[] = [
  { id: "population", name: "Population Density", color: "#ff4444" },
  { id: "healthcare", name: "Healthcare Facilities", color: "#44ff44" },
  { id: "education", name: "Educational Institutions", color: "#4444ff" },
  { id: "infrastructure", name: "Infrastructure", color: "#ffaa44" },
];

export function LayerControl() {
  const [activeLayers, setActiveLayers] = useState<string[]>([]);

  const toggleLayer = (layerId: string) => {
    setActiveLayers((current) =>
      current.includes(layerId)
        ? current.filter((id) => id !== layerId)
        : [...current, layerId]
    );
  };

  return (
    <div className="absolute left-4 top-4 z-[400]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="shadow-lg">
            <Layers className="mr-2 h-4 w-4" />
            Layers
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Available Layers</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {availableLayers.map((layer) => (
            <DropdownMenuCheckboxItem
              key={layer.id}
              checked={activeLayers.includes(layer.id)}
              onCheckedChange={() => toggleLayer(layer.id)}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
                {layer.name}
              </div>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}