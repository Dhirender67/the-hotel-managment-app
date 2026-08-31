import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function Modal({ onClose, children }) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[500px] max-w-[90%] rounded-xl bg-white p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1 transition hover:bg-gray-100"
        >
          <HiXMark className="h-6 w-6 text-gray-500" />
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
