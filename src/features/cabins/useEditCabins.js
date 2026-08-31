import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addNewEditCabins } from "../../services/apiCabins";

export function useEditCabins() {
  // EDIT
  const queryClinet = useQueryClient();
  const { mutate: editCabinMutate } = useMutation({
    mutationFn: ({ data, id }) => addNewEditCabins(data, id), // yeh already sahi hai
    onSuccess: () => {
      toast.success("Successfuly Edited Cabin");
      queryClinet.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCabinMutate };
}
