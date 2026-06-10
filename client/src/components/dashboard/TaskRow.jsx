import { CalendarDays } from "lucide-react";

import TaskActions from "./TaskActions";

function TaskRow({
  task,
  onEdit,
  onToggle,
  onDelete,
}) {
  const isCompleted =
    task.status === "Completed";

  return (
    <div className="border-b border-slate-100 last:border-b-0">

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-5 px-2">

        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1 min-w-0">

          <div
            className={`w-1 h-14 rounded-full flex-shrink-0 ${
              isCompleted
                ? "bg-green-500"
                : "bg-amber-400"
            }`}
          />

          <div className="min-w-0">

            <h3 className="font-semibold text-slate-900 truncate">
              {task.title}
            </h3>

            <p className="text-sm text-slate-500 truncate">
              {task.description ||
                "No description"}
            </p>

          </div>

        </div>

        {/* Status */}
        <div className="sm:w-[140px] flex sm:justify-center">

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              isCompleted
                ? "bg-green-100 text-green-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {task.status}
          </span>

        </div>

        {/* Date */}
        <div className="sm:w-[150px] flex items-center gap-2 text-slate-500 text-sm whitespace-nowrap">

          <CalendarDays size={16} />

          <span>
            {new Date(
              task.createdAt
            ).toLocaleDateString()}
          </span>

        </div>

        {/* Actions */}
        <div className="sm:w-[140px] flex sm:justify-end">

          <TaskActions
            task={task}
            onEdit={onEdit}
            onToggle={onToggle}
            onDelete={onDelete}
          />

        </div>

      </div>

    </div>
  );
}

export default TaskRow;