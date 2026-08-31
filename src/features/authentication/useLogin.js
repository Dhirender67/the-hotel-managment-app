import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginMutate, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => getLogin({ email, password }),

    onSuccess: async (user) => {
      toast.success("User Successfully Logged In");
      queryClient.setQueryData(["user", user.user]);

      await queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      navigate("/dashboard");
    },

    onError: (err) => toast.error(err.message),
  });

  return { loginMutate, isLoading };
}

export default useLogin;
