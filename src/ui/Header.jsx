import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import HeaderMenu from "./HeaderMenu";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Avatar from "../features/authentication/Avatar";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex  justify-between items-center bg-white px-6">
        <h1>HEADER</h1>

        <HeaderMenu>
          <Avatar />
          <Button onClick={() => navigate("/account")}>
            <HiOutlineUser className="h-6 w-6" />
          </Button>
          <DarkModeToggle />
          <Logout />
        </HeaderMenu>
      </header>
    </>
  );
}
