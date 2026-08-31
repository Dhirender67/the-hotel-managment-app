import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

// step 1. Create Context
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState();

  //Action Handles
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openModalWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openModalWindowName) });
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[500px] max-w-[90%] rounded-xl bg-white p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute right-4 top-4 rounded-md p-1 transition hover:bg-gray-100"
        >
          <HiXMark className="h-6 w-6 text-gray-500" />
        </button>

        {cloneElement(children, { onCloseModel: close })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
