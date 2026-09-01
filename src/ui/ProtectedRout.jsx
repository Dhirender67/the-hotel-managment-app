import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRout({ children }) {
  const navigate = useNavigate();

  // 1. Load the Authanticated User
  const { isPending, isAuthenticated } = useUser();

  // 2. there is no Authenctated user, redirect to the login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate],
  );

  // 3. While Loading, show spinner
  if (isPending)
    return (
      <>
        <div className="flex justify-center items-center h-[100vh]">
          <Spinner />
        </div>
      </>
    );

  // 4. if there IS a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRout;
