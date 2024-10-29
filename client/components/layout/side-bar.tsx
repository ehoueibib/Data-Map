"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Layers,
  Filter,
  Map as MapIcon,
  Database,
  Users,
  Building2,
  GraduationCap,
  Heart,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const dataLayers = [
  {
    id: "demographics",
    name: "Demographics",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: Building2,
    color: "bg-orange-500",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    color: "bg-red-500",
  },
];

const regions = [
  "Adrar",
  "Assaba",
  "Brakna",
  "Dakhlet Nouadhibou",
  "Gorgol",
  "Guidimaka",
  "Hodh Ech Chargui",
  "Hodh El Gharbi",
  "Inchiri",
  "Nouakchott",
  "Tagant",
  "Tiris Zemmour",
  "Trarza",
];

const timeRanges = [
  "Last 30 Days",
  "Last 3 Months",
  "Last 6 Months",
  "Last Year",
  "All Time",
];

export function SideBar() {
  const [activeLayers, setActiveLayers] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>("");
  const [populationRange, setPopulationRange] = useState([0, 100]);

  const toggleLayer = (layerId: string) => {
    setActiveLayers((current) =>
      current.includes(layerId)
        ? current.filter((id) => id !== layerId)
        : [...current, layerId]
    );
  };

  return (
    <div className="flex h-full w-full flex-col border-r bg-background">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Data Explorer</h2>
        <p className="text-sm text-muted-foreground">
          Filter and analyze map data
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Data Insights */}
          <Card className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <h3 className="font-semibold">Quick Insights</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Population Density</span>
                <Badge variant="secondary">High</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Healthcare Access</span>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Education Centers</span>
                <Badge variant="secondary">12 Nearby</Badge>
              </div>
            </div>
          </Card>

          <Accordion type="single" collapsible className="w-full">
            {/* Data Layers */}
            <AccordionItem value="layers">
              <AccordionTrigger className="text-sm">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Data Layers
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  {dataLayers.map((layer) => (
                    <div
                      key={layer.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${layer.color}`} />
                        <layer.icon className="h-4 w-4" />
                        <span className="text-sm">{layer.name}</span>
                      </div>
                      <Switch
                        checked={activeLayers.includes(layer.id)}
                        onCheckedChange={() => toggleLayer(layer.id)}
                      />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Region Filter */}
            <AccordionItem value="region">
              <AccordionTrigger className="text-sm">
                <div className="flex items-center gap-2">
                  <MapIcon className="h-4 w-4" />
                  Region
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Select
                  value={selectedRegion}
                  onValueChange={setSelectedRegion}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Time Range */}
            <AccordionItem value="time">
              <AccordionTrigger className="text-sm">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Time Range
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Select
                  value={selectedTimeRange}
                  onValueChange={setSelectedTimeRange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </AccordionContent>
            </AccordionItem>

            {/* Population Filter */}
            <AccordionItem value="population">
              <AccordionTrigger className="text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Population Range
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Slider
                    value={populationRange}
                    onValueChange={setPopulationRange}
                    max={100}
                    step={1}
                    className="mt-6"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{populationRange[0]}k</span>
                    <span>{populationRange[1]}k</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Legend */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legend</h3>
            <div className="space-y-2">
              {dataLayers.map((layer) => (
                <div key={layer.id} className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${layer.color}`} />
                  <span className="text-xs">{layer.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}