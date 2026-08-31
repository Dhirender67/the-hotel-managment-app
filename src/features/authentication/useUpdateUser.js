import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: userUpdateMutate, isPending: isUpadateUse } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("Successfuly Updated User");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { userUpdateMutate, isUpadateUse };
}

export default useUpdateUser;
