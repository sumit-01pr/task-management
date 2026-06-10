import { useEffect, useState } from "react";

import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
} from "../services/taskService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardLayout from "../components/layout/DashboardLayout";

import StatsCards from "../components/dashboard/StatsCards";
import TaskForm from "../components/dashboard/TaskForm";
import SearchPanel from "../components/dashboard/SearchPanel";
import TaskTable from "../components/dashboard/TaskTable";
import EditTaskModal from "../components/dashboard/EditTaskModal";
import EmptyState from "../components/dashboard/EmptyState";

function Dashboard() {
    const [tasks, setTasks] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [status, setStatus] =
        useState("");

    const [page, setPage] =
        useState(1);

    const [totalPages, setTotalPages] =
        useState(1);

    const [activeFilter, setActiveFilter] =
        useState("all");

    const [selectedTask, setSelectedTask] =
        useState(null);

    const [isModalOpen, setIsModalOpen] =
        useState(false);
    const [limit, setLimit] = useState(10);

    const { logout, user } =
        useAuth();

    useEffect(() => {
        if (activeFilter === "all") {
            setStatus("");
        }

        if (activeFilter === "pending") {
            setStatus("Pending");
        }

        if (activeFilter === "completed") {
            setStatus("Completed");
        }

        setPage(1);
    }, [activeFilter]);


    useEffect(() => {
        setPage(1);
    }, [limit]);

    
    const fetchTasks =
        async () => {
            try {
                const data =
                    await getTasks({
                        search,
                        status,
                        page,
                        limit,
                    });

                setTasks(
                    data.tasks || []
                );

                setTotalPages(
                    data.totalPages || 1
                );
            } catch (error) {
                console.log(error);
            }
        };

    useEffect(() => {
        fetchTasks();
    }, [
        search,
        status,
        page,
        limit,
    ]);

    const refresh = () => {
        fetchTasks();
    };

    const handleCreate =
        async (taskData) => {
            try {
                await createTask(
                    taskData
                );

                refresh();
            } catch (error) {
                console.log(error);
            }
        };

    const handleEdit = (
        task
    ) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleUpdate =
        async (
            id,
            updatedData
        ) => {
            try {
                await updateTask(
                    id,
                    updatedData
                );

                setIsModalOpen(false);

                refresh();
            } catch (error) {
                console.log(error);
            }
        };

    const handleToggle =
        async (id) => {
            try {
                await toggleTaskStatus(
                    id
                );

                refresh();
            } catch (error) {
                console.log(error);
            }
        };

    const handleDelete =
        async (id) => {
            try {
                await deleteTask(id);

                refresh();
            } catch (error) {
                console.log(error);
            }
        };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <DashboardLayout activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            user={user}
            onLogout={handleLogout}>
            <StatsCards
                totalTasks={
                    tasks.length
                }
                pendingTasks={
                    tasks.filter(
                        (task) =>
                            task.status ===
                            "Pending"
                    ).length
                }
                completedTasks={
                    tasks.filter(
                        (task) =>
                            task.status ===
                            "Completed"
                    ).length
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">

                <div className="md:col-span-8">
                    <TaskForm
                        onCreate={handleCreate}
                    />
                </div>

                <div className="md:col-span-4">
                    <SearchPanel
                        search={search}
                        setSearch={setSearch}
                        status={status}
                        setStatus={setStatus}
                    />
                </div>

            </div>

            {tasks.length === 0 ? (
                <EmptyState />
            ) : (
                <TaskTable
                    tasks={tasks}
                    onEdit={handleEdit}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    limit={limit}
                    setLimit={setLimit}
                />
            )}



            <EditTaskModal
                isOpen={
                    isModalOpen
                }
                task={selectedTask}
                onClose={() =>
                    setIsModalOpen(
                        false
                    )
                }
                onUpdate={
                    handleUpdate
                }
            />

        </DashboardLayout>
    );
}

export default Dashboard;