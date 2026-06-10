import {
  Search,
  Filter,
} from "lucide-react";

function SearchPanel({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-5 lg:p-6 h-full">

      <div className="flex items-center gap-3 mb-5">

        <Filter
          size={20}
          className="text-violet-600"
        />

        <h2 className="text-lg font-semibold text-slate-900">
          Search & Filter
        </h2>

      </div>

      <div className="space-y-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          />

        </div>

        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
          className="w-full h-12 px-4 rounded-xl border border-slate-200 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        >
          <option value="">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Completed">
            Completed
          </option>

        </select>

        <div>

          <p className="text-sm font-semibold text-slate-700 mb-3">
            Quick Filters
          </p>

          <div className="flex flex-wrap gap-2">

            <button
              onClick={() =>
                setStatus("")
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                status === ""
                  ? "bg-violet-600 text-white"
                  : "bg-violet-100 text-violet-700 hover:bg-violet-200"
              }`}
            >
              All
            </button>

            <button
              onClick={() =>
                setStatus(
                  "Pending"
                )
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                status ===
                "Pending"
                  ? "bg-amber-500 text-white"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200"
              }`}
            >
              Pending
            </button>

            <button
              onClick={() =>
                setStatus(
                  "Completed"
                )
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                status ===
                "Completed"
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              Completed
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SearchPanel;