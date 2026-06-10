import { useEffect, useState } from "react";

import {
  X,
  Save,
} from "lucide-react";

function EditTaskModal({
  isOpen,
  task,
  onClose,
  onUpdate,
}) {
  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);

      setDescription(
        task.description || ""
      );
    }
  }, [task]);

  if (!isOpen || !task) {
    return null;
  }

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    onUpdate(task._id, {
      title,
      description,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl">

        <div className="flex items-center justify-between p-6 border-b">

          <div>

            <h2 className="text-2xl font-bold">
              Edit Task
            </h2>

            <p className="text-slate-500 text-sm">
              Update task details
            </p>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
          >
            <X size={18} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Task Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="w-full h-12 px-4 border rounded-xl"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="w-full p-4 border rounded-xl resize-none"
            />

          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 border rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
            >
              <Save size={18} />

              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditTaskModal;