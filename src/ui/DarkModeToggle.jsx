import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import Button from "../ui/Button";
import { useDarkMode } from "../contextApi/DarkModeTheme";

function DarkModeToggle() {
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();
  return (
    <>
      <Button onClick={handleDarkModeToggle}>
        {isDarkMode ? (
          <HiOutlineSun className="h-6 w-6" />
        ) : (
          <HiOutlineMoon className="h-6 w-6" />
        )}
      </Button>
    </>
  );
}

export default DarkModeToggle;
