import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  function close() {
    setOpenId("");
  }
  function open(id) {
    setOpenId(id);
  }
  return (
    <>
      <MenuContext.Provider
        value={{ openId, close, open, position, setPosition }}
      >
        {children}
      </MenuContext.Provider>
    </>
  );
}

function Menu({ children }) {
  return <>{children}</>;
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenuContext);

  function handleMenuToggle(e) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 8,
      left: rect.right - 160,
    });

    if (openId === id) {
      close();
    } else {
      open(id);
    }
  }

  return (
    <button data-menu-toggle onClick={handleMenuToggle}>
      <HiEllipsisVertical />
    </button>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenuContext);

  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      // agar click List ke bahar hai AUR kisi toggle button pe bhi nahi hai, tabhi close karo
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.closest("[data-menu-toggle]")
      ) {
        close();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [close]);

  if (openId !== id) return null;
  return createPortal(
    <ul
      ref={ref}
      className="fixed z-50 w-40 rounded-lg border bg-white shadow-lg"
      style={{ top: position?.top, left: position?.left }}
    >
      {children}
    </ul>,
    document.body,
  );
}

// function Toggle({ id }) {
//   const { openId, close, open, setPosition } = useContext(MenuContext);

//   function handleMenuToggle(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setPosition({
//       top: rect.bottom + 8,
//       left: rect.right - 160, // menu width
//     });

//     // openId === "" || openId !== id ? open(id) : close();
//     if (openId === id) {
//       close();
//     } else {
//       open(id);
//     }
//   }

//   return (
//     <>
//       <button onClick={handleMenuToggle}>
//         <HiEllipsisVertical />
//       </button>
//     </>
//   );
// }

// function List({ id, children }) {
//   const { openId, position, close } = useContext(MenuContext);

//   const ref = useRef();
//   useEffect(() => {
//     function handleClick(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         console.log("CLICK OUTSIDE");
//         close();
//       }
//     }

//     document.addEventListener("click", handleClick, true);

//     return () => {
//       document.removeEventListener("click", handleClick, true);
//     };
//   }, [close]);

//   if (openId !== id) return null;
//   return createPortal(
//     <ul
//       ref={ref}
//       className="fixed z-50 w-40 rounded-lg border bg-white shadow-lg"
//       style={{
//         top: position?.top,
//         left: position?.left,
//       }}
//     >
//       {children}
//     </ul>,
//     document.body,
//   );
// }

function Button({ children, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.(); // pehle action run karo
    close(); // fir menu close karo
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="w-full px-4 py-2 text-left hover:bg-gray-100"
      >
        {children}
      </button>
    </li>
  );
}

// function Button({ children, onClick }) {
//   return (
//     <li>
//       <button
//         onClick={onClick}
//         className="w-full px-4 py-2 text-left hover:bg-gray-100"
//       >
//         {children}
//       </button>
//     </li>
//   );
// }

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
