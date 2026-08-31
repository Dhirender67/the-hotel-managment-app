import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const { isPending: isSettingLoad, data: settingData = {} } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isSettingLoad, settingData };
}
