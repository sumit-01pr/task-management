import {
  Pencil,
  Trash2,
  Check,
} from "lucide-react";

function TaskActions({
  task,
  onEdit,
  onToggle,
  onDelete,
}) {
  return (
    <div className="flex items-center gap-3">

      <button
        onClick={() =>
          onEdit(task)
        }
        className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition"
      >
        <Pencil
          size={16}
          className="text-slate-500"
        />
      </button>

      <button
        title={
          task.status === "Completed"
            ? "Mark as pending"
            : "Mark as complete"
        }
        onClick={() =>
          onToggle(task._id)
        }
        className={`
            w-8 h-8
            rounded-lg
            flex items-center justify-center
            transition-all duration-150
            ${task.status === "Completed"
            ? "bg-violet-600 border border-green-500 text-white"
            : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"
           }
        `}
      >
        <Check size={14} />
      </button>

      <button
        onClick={() =>
          onDelete(task._id)
        }
        className="w-10 h-10 rounded-xl border border-red-100 bg-white flex items-center justify-center hover:bg-red-50 transition"
      >
        <Trash2
          size={16}
          className="text-red-500"
        />
      </button>

    </div>
  );
}

export default TaskActions;