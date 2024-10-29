import { TopBar } from "@/components/layout/top-bar";
import { SideBar } from "@/components/layout/side-bar";
import { MapView } from "@/components/map/map-view";
import { DataPanel } from "@/components/dashboard/data-panel";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 flex-shrink-0 hidden md:block">
          <SideBar />
        </aside>
        <main className="flex-1 flex flex-col">
          <div className="p-4 bg-background border-b">
            <DataPanel />
          </div>
          <div className="flex-1">
            <MapView />
          </div>
        </main>
      </div>
    </div>
  );
}