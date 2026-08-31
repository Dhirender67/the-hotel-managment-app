import { useMutation } from "@tanstack/react-query";
import { signUpAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { mutate: signupMutate, isPending: isSignup } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: (newUser) => {
      toast.success("New User Created Successfuly ");
      console.log("New User Created", newUser);
    },
    onError: (err) => toast.error(err.message),
  });
  return { signupMutate, isSignup };
}

export default useSignUp;
