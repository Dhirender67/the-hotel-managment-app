import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClinet = useQueryClient();
  const { mutate: updateSettingMutate, isPending: isUpdateSettingLoad } =
    useMutation({
      mutationFn: updateSetting,
      onSuccess: () => {
        toast.success("Successfuly Updated Setting");
        queryClinet.invalidateQueries({
          queryKey: ["settings"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
  return { updateSettingMutate, isUpdateSettingLoad };
}
