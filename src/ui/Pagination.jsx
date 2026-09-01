import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constans";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function handlePrevious() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  function handleNext() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-[1.4rem] ml-[0.8rem]">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of {""}
        <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-[0.6rem]">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="
            bg-[var(--color-grey-50)]
            border-none
            rounded-[var(--border-radius-sm)]
            font-medium
            text-[1.4rem]
            flex items-center justify-center
            gap-[0.4rem]
            px-[1.2rem] py-[0.6rem]
            transition-all duration-300
            hover:bg-[var(--color-brand-600)]
            hover:text-[var(--color-brand-50)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          ← Previous
        </button>

        <button
          className="
            bg-[var(--color-brand-600)]
            text-[var(--color-brand-50)]
            border-none
            rounded-[var(--border-radius-sm)]
            font-medium
            text-[1.4rem]
            flex items-center justify-center
            gap-[0.4rem]
            px-[1.2rem] py-[0.6rem]
          "
        >
          {currentPage}
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === pageCount}
          className="
            bg-[var(--color-grey-50)]
            border-none
            rounded-[var(--border-radius-sm)]
            font-medium
            text-[1.4rem]
            flex items-center justify-center
            gap-[0.4rem]
            px-[1.2rem] py-[0.6rem]
            transition-all duration-300
            hover:bg-[var(--color-brand-600)]
            hover:text-[var(--color-brand-50)]
          "
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Pagination;
