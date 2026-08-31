import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("discount") || "all";

  function handleClick(value) {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1.5 rounded-md border border-gray-100 bg-white p-1 shadow-sm">
      <button
        onClick={() => handleClick("all")}
        className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300
          ${currentFilter === "all" ? "bg-blue-600 text-blue-50" : "bg-white"}
          hover:bg-blue-600 hover:text-blue-50
        `}
      >
        All
      </button>
      <button
        onClick={() => handleClick("no-discount")}
        className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300
          ${
            currentFilter === "no-discount"
              ? "bg-blue-600 text-blue-50"
              : "bg-white"
          }
          hover:bg-blue-600 hover:text-blue-50
        `}
      >
        No Discount
      </button>

      <button
        onClick={() => handleClick("discount")}
        className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300
          ${
            currentFilter === "discount"
              ? "bg-blue-600 text-blue-50"
              : "bg-white"
          }
          hover:bg-blue-600 hover:text-blue-50
        `}
      >
        With-Discount
      </button>
    </div>
  );
}
