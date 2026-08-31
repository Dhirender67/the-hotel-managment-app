import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

function Logout() {
  const { logoutMutate, isLogout } = useLogout();
  function handleLogout() {
    logoutMutate();
  }

  return (
    <>
      <Button onClick={handleLogout}>
        {isLogout ? (
          <Spinner size="w-6 h-6" />
        ) : (
          <>
            <HiOutlineArrowRightOnRectangle className="h-6 w-6" />
          </>
        )}
      </Button>
    </>
  );
}

export default Logout;
