import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import SmallSettingsTable from "./SmallSettingsTable";
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import { useGameEndpoints } from "@/dojo/hooks/useGameEndpoints";
import { useGetGameSettings } from "@/dojo/hooks/useSqlQueries";
import { feltToString } from "@/lib/utils";
import { formatGameSettingsData } from "@/lib/utils/formatting";
import { useState } from "react";
import { SettingsDialog } from "@/components/dialogs/Settings";

interface GameSettingsFieldProps {
  form: UseFormReturn<any>;
  field: ControllerRenderProps<any, any>;
}

const GameSettingsField = ({ form, field }: GameSettingsFieldProps) => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { gameNamespace, gameSettingsModel } = useGameEndpoints(
    form.watch("game")
  );

  // const { data: rawSettings } = useGetGameSettings({
  //   namespace: gameNamespace ?? "",
  //   settingsModel: gameSettingsModel ?? "",
  //   active: true,
  //   limit: 5,
  //   offset: (currentPage - 1) * 5,
  // });

  const { data: rawSettings } = useGetGameSettings({
    namespace: gameNamespace ?? "",
    settingsModel: gameSettingsModel ?? "",
    active: true,
    limit: 5,
    offset: (currentPage - 1) * 5,
  });

  const settings = rawSettings?.map((setting) =>
    Object.entries(setting).reduce((acc, [key, value]) => {
      if (!key.includes("internal")) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>)
  );

  const formattedSettings = formatGameSettingsData(settings);

  const hasSettings = formattedSettings[field.value]?.hasSettings ?? false;

  return (
    <>
      <SettingsDialog
        open={open}
        onOpenChange={setOpen}
        game={form.watch("game")}
        settings={formattedSettings}
        value={field.value}
        onChange={field.onChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <FormItem>
        <div className="flex flex-row items-center gap-5">
          <FormLabel className="font-brand text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
            Settings
          </FormLabel>
          <FormDescription className="sm:text-xs xl:text-sm 3xl:text-base">
            Select the game settings
          </FormDescription>
        </div>
        <FormControl>
          <div className="flex flex-col gap-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h3 className="font-brand text-lg">
                    {hasSettings
                      ? feltToString(formattedSettings[field.value]?.name ?? "")
                      : "Default"}
                  </h3>
                  <p className="text-sm text-brand-muted">
                    {hasSettings
                      ? formattedSettings[field.value]?.description
                      : "No settings available"}
                  </p>
                </div>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setOpen(true)}
                  disabled={!hasSettings}
                >
                  Select Settings
                </Button>
              </div>

              <SmallSettingsTable
                hasSettings={hasSettings}
                settings={formattedSettings[field.value]?.settings ?? []}
              />
            </div>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default GameSettingsField;
