import {
  ClipboardList,
} from "lucide-react";

function EmptyState() {
  return (
    <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">

      <div className="w-20 h-20 rounded-3xl bg-violet-100 flex items-center justify-center mx-auto mb-4">

        <ClipboardList
          size={40}
          className="text-violet-600"
        />

      </div>

      <h3 className="text-xl font-bold">
        No Tasks Found
      </h3>

      <p className="text-slate-500 mt-2">
        Create your first task
      </p>

    </div>
  );
}

export default EmptyState;