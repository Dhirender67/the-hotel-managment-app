import { useDarkMode } from "../contextApi/DarkModeTheme";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex justify-center mb-6">
      <img
        src={!isDarkMode ? "./logo-light.png" : "logo-dark.png"}
        alt="Logo"
        className="h-[5.5rem] w-auto"
      />
    </div>
  );
}

export default Logo;
