import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import SettingsCarousel from "@/components/createTournament/settings/SettingsCarousel";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  game: string;
  settings: any[];
  value: string;
  onChange: (value: string) => void;
}
export const SettingsDialog = ({
  open,
  onOpenChange,
  game,
  settings,
  value,
  onChange,
}: SettingsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Game Settings</DialogTitle>
        </DialogHeader>
        <div>
          {game && (
            <SettingsCarousel
              game={game}
              settings={settings}
              value={value}
              onChange={onChange}
              setOpen={onOpenChange}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
