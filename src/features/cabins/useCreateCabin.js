import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewEditCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClinet = useQueryClient();
  const { mutate: createCabinMutate, isPending: isLoadingCabin } = useMutation({
    mutationFn: (newCabin) => addNewEditCabins(newCabin),
    onSuccess: () => {
      toast.success("Successfuly Added New Cabin");
      queryClinet.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createCabinMutate, isLoadingCabin };
}
