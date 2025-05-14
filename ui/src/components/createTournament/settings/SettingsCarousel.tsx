import React from "react";
import { cn, feltToString } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WEDGE_LEFT, WEDGE_RIGHT } from "@/components/Icons";
// import SettingsTable from "@/components/createTournament/settings/SettingsTable";
import TokenGameIcon from "@/components/icons/TokenGameIcon";
import useUIStore from "@/hooks/useUIStore";
import SettingsCard from "./SettingsCard";

interface SettingsCarouselProps {
  game: string;
  settings: any[];
  value: string;
  onChange: (value: string) => void;
  setOpen: (value: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const SettingsCarousel = ({
  game,
  settings,
  value,
  onChange,
  setOpen,
  currentPage,
  setCurrentPage,
}: SettingsCarouselProps) => {
  const { getGameImage, getGameName } = useUIStore();

  // If no settings available, show fallback UI
  if (!Object.values(settings)?.length) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center text-center gap-2 text-muted-foreground">
          <TokenGameIcon size="lg" image={getGameImage(game)} />
          <div className="text-sm">No settings available for this game yet</div>
          <div className="text-xs">Default configuration will be used</div>
        </div>
      </div>
    );
  }

  // const settingsArray = Array.isArray(settings)
  //   ? settings
  //   : Object.values(settings);
  // const fakeSettings = [
  //   ...settingsArray,
  //   ...settingsArray,
  //   ...settingsArray,
  //   ...settingsArray,
  //   ...settingsArray,
  // ];

  console.log(settings);

  const currentSetting = settings[currentIndex];

  console.log(Object.values(settings));

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col gap-5 px-10 min-h-[200px] max-h-[600px] w-full">
        <div className="flex flex-col gap-5 items-center w-full">
          <TokenGameIcon size="lg" image={getGameImage(game)} />
          <h3 className="text-2xl font-brand">{getGameName(game)}</h3>

          <div className="flex flex-col gap-2 w-full">
            {Object.entries(settings).map(([key, setting]) => (
              <SettingsCard
                key={key}
                settings_id={Number(key)}
                setting={setting}
              />
            ))}
          </div>
        </div>
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <div className="pointer-events-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="h-8 w-8 rounded-full"
            >
              <WEDGE_LEFT />
            </Button>
          </div>
          <div className="pointer-events-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === Object.values(settings).length - 1}
              className="h-8 w-8 rounded-full"
            >
              <WEDGE_RIGHT />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-5 items-center border-brand w-full">
        <div className="flex gap-1 w-1/2 overflow-hidden">
          {Object.values(settings).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full",
                i === currentIndex ? "bg-brand" : "bg-muted"
              )}
            />
          ))}
        </div>
        {game ===
          "0x0444834e7b71749832f0db8c64f17ed1c3af8462c1682c10dcd6068b1c57494b" && (
          <div className="flex flex-row gap-2">
            <span className="text-brand-muted">More info at</span>
            <a
              href={`https://darkshuffle.io/settings/${currentIndex}`}
              target="_blank"
              className="text-brand underline"
            >
              Dark Shuffle
            </a>
          </div>
        )}
        <Button
          onClick={() => {
            onChange(currentSetting.settings_id.toString());
            setOpen(false);
          }}
          disabled={currentIndex === Number(value)}
        >
          {currentIndex === Number(value) ? "Selected" : "Select"}
        </Button>
      </div>
    </div>
  );
};

export default SettingsCarousel;
