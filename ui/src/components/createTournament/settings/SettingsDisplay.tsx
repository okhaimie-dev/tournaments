import { Button } from "@/components/ui/button";
import { feltToString } from "@/lib/utils";
import SettingsTable from "./SettingsTable";

interface SettingsDisplayProps {
  currentSetting: any;
  currentSettingId: number;
  onChange: (value: string) => void;
  setOpen: (value: boolean) => void;
  currentIndex: number;
  value: string;
  close: () => void;
  setSelectedSetting: (value: number | null) => void;
}

const SettingsDisplay = ({
  currentSetting,
  currentSettingId,
  onChange,
  setOpen,
  currentIndex,
  value,
  close,
  setSelectedSetting,
}: SettingsDisplayProps) => {
  return (
    <div className="relative flex flex-col gap-2 border border-brand-subtle rounded-lg p-5">
      <div className="absolute -top-12 left-0">
        <Button variant="outline" onClick={() => close()} size="sm">
          Back
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-brand">
          {feltToString(currentSetting.name)}
        </h3>
        <p className="text-sm text-muted-foreground">
          {currentSetting.description}
        </p>
      </div>
      <SettingsTable hasSettings={true} settings={currentSetting.settings} />
      <Button
        onClick={() => {
          onChange(currentSettingId.toString());
          setOpen(false);
          setSelectedSetting(null);
        }}
        disabled={currentSettingId === Number(value)}
        className="flex items-center justify-center"
      >
        {currentIndex === Number(value) ? "Selected" : "Select"}
      </Button>
    </div>
  );
};

export default SettingsDisplay;
