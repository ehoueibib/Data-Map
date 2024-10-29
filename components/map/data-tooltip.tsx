"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface DataPoint {
  title: string;
  value: string | number;
  type: string;
  coordinates: [number, number];
}

interface DataTooltipProps {
  data: DataPoint;
  children: React.ReactNode;
}

export function DataTooltip({ data, children }: DataTooltipProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{data.title}</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Type</p>
              <p className="text-sm">{data.type}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Value</p>
              <p className="text-sm">{data.value}</p>
            </div>
            <div className="col-span-2 space-y-1">
              <p className="text-xs text-muted-foreground">Coordinates</p>
              <p className="text-sm">
                {data.coordinates[0].toFixed(4)}, {data.coordinates[1].toFixed(4)}
              </p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}