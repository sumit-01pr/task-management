import {
  ClipboardList,
} from "lucide-react";

import TaskRow from "./TaskRow";
import Pagination from "./Pagination";

function TaskTable({
  tasks,
  onEdit,
  onToggle,
  onDelete,
  page,
  setPage,
  totalPages,
  limit,
  setLimit,
}) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 text-center">

        <div className="w-20 h-20 mx-auto rounded-3xl bg-violet-100 flex items-center justify-center mb-5">

          <ClipboardList
            size={40}
            className="text-violet-600"
          />

        </div>

        <h3 className="text-xl font-bold text-slate-900">
          No Tasks Found
        </h3>

        <p className="text-slate-500 mt-2">
          Create your first task
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

      <div className="px-5 md:px-6 py-5 border-b border-slate-100">

        <div className="flex items-center gap-3">

          <ClipboardList
            size={20}
            className="text-violet-600"
          />

          <h2 className="text-lg md:text-xl font-bold text-slate-900">
            Your Tasks
          </h2>

        </div>

      </div>

      <div>

        {tasks.map((task) => (
          <TaskRow
            key={task._id}
            task={task}
            onEdit={onEdit}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}

      </div>

      <div className="px-4 md:px-6 py-4 border-t border-slate-100">

        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          limit={limit}
          setLimit={setLimit}
        />

      </div>

    </div>
  );
}

export default TaskTable;