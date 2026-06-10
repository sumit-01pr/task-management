import { useState } from "react";
import {
  PlusCircle,
  Send,
} from "lucide-react";

function TaskForm({
  onCreate,
}) {
  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (!title.trim()) {
        return;
      }

      try {
        setLoading(true);

        await onCreate({
          title,
          description,
        });

        setTitle("");
        setDescription("");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div
      id="task-form"
      className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-5 lg:p-6"
    >
      <div className="flex items-center gap-3 mb-5">

        <PlusCircle
          size={20}
          className="text-violet-600"
        />

        <h2 className="text-lg font-semibold text-slate-900">
          Create New Task
        </h2>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          id="task-title"
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          className="w-full h-12 px-4 text-sm border border-slate-200 rounded-xl outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
        />

        <textarea
          rows="4"
          placeholder="Task description (optional)"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl resize-none outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
        />

        <div className="flex justify-end">

          <button
            type="submit"
            disabled={loading}
            className="h-11 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium flex items-center gap-2 hover:opacity-90 transition disabled:opacity-60"
          >
            <Send size={16} />

            {loading
              ? "Creating..."
              : "Create Task"}
          </button>

        </div>

      </form>
    </div>
  );
}

export default TaskForm;