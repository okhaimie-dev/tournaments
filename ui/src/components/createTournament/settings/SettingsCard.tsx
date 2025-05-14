import { feltToString } from "@/lib/utils";

interface SettingsCardProps {
  settings_id: number;
  setting: any;
}

const SettingsCard = ({ settings_id, setting }: SettingsCardProps) => {
  return (
    <div className="flex flex-col border border-brand-muted rounded-lg p-5 w-full cursor-pointer hover:bg-brand-muted/10 transition-all duration-300">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-brand">{feltToString(setting.name)}</h3>
        <p className="text-brand-muted">{`#${settings_id}`}</p>
      </div>
      <p className="text-brand-muted text-sm">{setting.description}</p>
    </div>
  );
};

export default SettingsCard;
