import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logoutMutate, isPending: isLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClinet.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logoutMutate, isLogout };
}

export default useLogout;
