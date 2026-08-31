import { useSearchParams } from "react-router-dom";

function FilterBoking() {
  const [searchParams, setSearchParam] = useSearchParams();
  const currentFilter = searchParams.get("bookingFilter") || "all";

  function handleClick(value) {
    searchParams.set("bookingFilter", value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParam(searchParams);
  }

  return (
    <>
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
          onClick={() => handleClick("checkedOut")}
          className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300
          ${
            currentFilter === "checkedOut"
              ? "bg-blue-600 text-blue-50"
              : "bg-white"
          }
          hover:bg-blue-600 hover:text-blue-50
        `}
        >
          Checked Out
        </button>

        <button
          onClick={() => handleClick("checkedIn")}
          className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300
          ${
            currentFilter === "checkedIn"
              ? "bg-blue-600 text-blue-50"
              : "bg-white"
          }
          hover:bg-blue-600 hover:text-blue-50
        `}
        >
          Checked In
        </button>
        <button
          onClick={() => handleClick("unconfirmed")}
          className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300
          ${
            currentFilter === "unconfirmed"
              ? "bg-blue-600 text-blue-50"
              : "bg-white"
          }
          hover:bg-blue-600 hover:text-blue-50
        `}
        >
          Unconfirmed
        </button>
      </div>
    </>
  );
}

export default FilterBoking;
