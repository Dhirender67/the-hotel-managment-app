import { useSearchParams } from "react-router-dom";

function FilterDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("days") || "7";

  function handelFilter(value) {
    searchParams.set("days", value);
    setSearchParams(searchParams);
    // console.log(searchParams);
  }

  return (
    <>
      <div className="flex gap-1.5 rounded-md border border-gray-100 bg-white p-1 shadow-sm">
        <button
          onClick={() => handelFilter("7")}
          className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300 ${currentFilter === "7" ? "bg-blue-600 text-white" : "bg-white"}`}
        >
          Last 7 days
        </button>
        <button
          onClick={() => handelFilter("30")}
          className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300 ${currentFilter === "30" ? "bg-blue-600 text-white" : "bg-white"}`}
        >
          Last 30 days
        </button>
        <button
          onClick={() => handelFilter("90")}
          className={`rounded-md border-none px-3 py-1 text-base font-medium
          transition-all duration-300  ${currentFilter === "90" ? "bg-blue-600 text-white" : "bg-white"}`}
        >
          Last 90 days
        </button>
      </div>
    </>
  );
}

export default FilterDashboard;
