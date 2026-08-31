import Uploader from "../data/Uploader";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <>
      <aside className="bg-white border-r border-neutral-200 p-4 text-white">
        <Logo />
        <MainNav />
        {/* <Uploader /> */}
      </aside>
    </>
  );
}

export default Sidebar;
