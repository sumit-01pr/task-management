import {
  Bell,
  Search,
} from "lucide-react";

function Header({
  user,
}) {
  return (
    <header
      className="
      sticky
      top-0
      z-30
      bg-white/90
      backdrop-blur-md
      border-b
      border-slate-200
      px-4
      sm:px-6
      md:px-8
      py-4
      "
    >
      <div className="flex items-center justify-between gap-4">

        <div className="min-w-0 ml-12 lg:ml-0">

          <h2 className="text-xl md:text-2xl font-bold text-slate-900 truncate">
            Dashboard
          </h2>

          <p className="text-sm text-slate-500 truncate">
            Welcome back, {user?.name || "User"}
          </p>

        </div>

        <div className="flex items-center gap-2 sm:gap-4">

          <div className="relative hidden xl:block">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
              pl-10
              pr-4
              h-11
              w-64
              border
              border-slate-200
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-violet-500
              "
            />

          </div>

          <button
            className="
            w-10
            h-10
            sm:w-11
            sm:h-11
            rounded-xl
            border
            border-slate-200
            flex
            items-center
            justify-center
            hover:bg-slate-100
            transition
            "
          >
            <Bell size={18} />
          </button>

          <div className="flex items-center gap-3">

            <div
              className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-indigo-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              "
            >
              {user?.name
                ? user.name
                    .charAt(0)
                    .toUpperCase()
                : "U"}
            </div>

            <div className="hidden md:block">

              <p className="font-semibold text-sm">
                {user?.name || "User"}
              </p>

              <p className="text-xs text-slate-500">
                Member
              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;