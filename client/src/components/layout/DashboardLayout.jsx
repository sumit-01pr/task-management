import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({
  children,
  user,
  onLogout,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row">

      <Sidebar
        onLogout={onLogout}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="flex-1 flex flex-col min-w-0">

        <Header user={user} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">

          <div className="max-w-7xl mx-auto">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;