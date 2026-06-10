import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Pagination({
  page,
  setPage,
  totalPages,
  limit,
  setLimit,
}) {
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
    }

    return [1, 2, 3, "...", totalPages];
  };

  return (
    <div className="flex items-center justify-between gap-4 overflow-x-auto">

      {/* Pagination Buttons */}

      <div className="flex items-center gap-2 flex-shrink-0">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>

        {getVisiblePages().map(
          (item, index) => {
            if (item === "...") {
              return (
                <span
                  key={index}
                  className="px-2 text-slate-500 font-medium"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={item}
                onClick={() =>
                  setPage(item)
                }
                className={`w-10 h-10 rounded-xl text-sm font-medium transition ${page === item
                    ? "bg-violet-600 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
              >
                {item}
              </button>
            );
          }
        )}

        <button
          disabled={
            page === totalPages
          }
          onClick={() =>
            setPage(page + 1)
          }
          className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Per Page Selector */}

      <div className="flex-shrink-0">

        <select
          value={limit}
          onChange={(e) =>
            setLimit(
              Number(
                e.target.value
              )
            )
          }
          className="h-10 px-4 rounded-xl border border-slate-200 text-sm outline-none focus:border-violet-500"
        >
          <option value={5}>
            5 per page
          </option>

          <option value={10}>
            10 per page
          </option>

        </select>

      </div>

    </div>
  );
}

export default Pagination;