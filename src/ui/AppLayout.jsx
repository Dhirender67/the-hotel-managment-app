import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <div className="grid h-screen grid-cols-[250px_1fr]">
        <Sidebar />
        <div className="grid grid-rows-[64px_1fr]">
          <Header />

          <main className="overflow-auto bg-neutral-100 p-6 h-[calc(100vh-64px)]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
