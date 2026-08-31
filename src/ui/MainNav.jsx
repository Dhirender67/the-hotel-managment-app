import { NavLink } from "react-router-dom";
import {
  HiMiniWindow,
  HiOutlineCalendarDays,
  HiOutlineUsers,
  HiOutlineCog8Tooth,
  HiBuildingOffice2,
} from "react-icons/hi2";

function MainNav() {
  return (
    <>
      <nav>
        <ul>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md px-6 py-3 text-base font-medium transition-all text-gray-600 hover:bg-gray-100 hover:text-gray-800 ${isActive ? "bg-gray-100 text-gray-800" : ""}`
            }
          >
            <span className="text-[18px]">
              <HiMiniWindow />
            </span>
            Dashboard
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-6 py-3 text-base font-medium transition-all text-gray-600 hover:bg-gray-100 hover:text-gray-800 ${isActive ? "bg-gray-100 text-gray-800" : ""}`
            }
          >
            <span className="text-[18px]">
              <HiOutlineCalendarDays />
            </span>
            Booking
          </NavLink>
          <NavLink
            to="/cabins"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-6 py-3 text-base font-medium transition-all text-gray-600 hover:bg-gray-100 hover:text-gray-800 ${isActive ? "bg-gray-100 text-gray-800" : ""}`
            }
          >
            <span className="text-[18px]">
              <HiBuildingOffice2 />
            </span>
            Cabins
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-6 py-3 text-base font-medium transition-all text-gray-600 hover:bg-gray-100 hover:text-gray-800 ${isActive ? "bg-gray-100 text-gray-800" : ""}`
            }
          >
            <span className="text-[18px]">
              <HiOutlineUsers />
            </span>
            Users
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-6 py-3 text-base font-medium transition-all text-gray-600 hover:bg-gray-100 hover:text-gray-800 ${isActive ? "bg-gray-100 text-gray-800" : ""}`
            }
          >
            <span className="text-[18px]">
              <HiOutlineCog8Tooth />
            </span>
            Settings
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
