import {
  LayoutGrid,
  Clock3,
  CheckCircle2,
} from "lucide-react";

function QuickFilters({
  activeFilter,
  setActiveFilter,
}) {
  const filters = [
    {
      label: "All",
      value: "all",
      icon: LayoutGrid,
    },
    {
      label: "Pending",
      value: "pending",
      icon: Clock3,
    },
    {
      label: "Completed",
      value: "completed",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">

      {filters.map((filter) => {
        const Icon =
          filter.icon;

        return (
          <button
            key={filter.value}
            onClick={() =>
              setActiveFilter(
                filter.value
              )
            }
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl transition ${
              activeFilter ===
              filter.value
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                : "bg-white border border-slate-200 hover:bg-slate-50"
            }`}
          >
            <Icon size={18} />

            {filter.label}
          </button>
        );
      })}

    </div>
  );
}

export default QuickFilters;