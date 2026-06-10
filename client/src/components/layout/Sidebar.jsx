import { useState } from "react";

import {
  Menu,
  X,
  LayoutDashboard,
  Clock3,
  CheckCircle2,
  PlusCircle,
  LogOut,
} from "lucide-react";

function Sidebar({
  onLogout,
  activeFilter,
  setActiveFilter,
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const menuItems = [
    {
      title: "All Tasks",
      value: "all",
      icon: LayoutDashboard,
    },
    {
      title: "Completed",
      value: "completed",
      icon: CheckCircle2,
    },
    {
      title: "Pending",
      value: "pending",
      icon: Clock3,
    },
  ];

  const handleCreateTask = () => {
    setActiveFilter("all");
    setIsOpen(false);

    const form =
      document.getElementById(
        "task-form"
      );

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    setTimeout(() => {
      const input =
        document.getElementById(
          "task-title"
        );

      if (input) {
        input.focus();
      }
    }, 400);
  };

  return (
    <>
      {/* Mobile Toggle */}

      <button
        onClick={() =>
          setIsOpen(true)
        }
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-xl shadow-md"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() =>
            setIsOpen(false)
          }
        />
      )}

      <aside
        className={`
  fixed lg:sticky
  lg:top-0
  top-0 left-0
  h-screen
  w-72
  bg-white
  border-r
  border-slate-200
  flex
  flex-col
  z-50
  transition-transform
  duration-300
  flex-shrink-0
  ${isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }
`}
      >
        {/* Close Button Mobile */}

        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() =>
              setIsOpen(false)
            }
          >
            <X size={24} />
          </button>
        </div>

        {/* Logo */}

        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-slate-900">
            TaskFlow
          </h1>
        </div>

        {/* Dashboard Card */}

        <div className="px-4 mt-2 mb-6">
          <div className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium shadow-lg">
            <LayoutDashboard size={20} />
            Dashboard
          </div>
        </div>

        {/* Navigation */}

        <nav className="px-4">
          <ul className="space-y-2">
            {menuItems.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <li
                    key={item.value}
                  >
                    <button
                      onClick={() => {
                        setActiveFilter(
                          item.value
                        );

                        setIsOpen(
                          false
                        );
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeFilter ===
                        item.value
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                      <Icon
                        size={20}
                      />

                      {item.title}
                    </button>
                  </li>
                );
              }
            )}

            <li>
              <button
                onClick={
                  handleCreateTask
                }
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <PlusCircle
                  size={20}
                />

                Create Task
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout */}

        <div className="mt-auto p-5">
          <button
            onClick={onLogout}
            className="flex items-center gap-3 text-red-500 hover:text-red-600 transition font-medium"
          >
            <LogOut
              size={18}
            />

            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;