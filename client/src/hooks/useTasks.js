import { useState } from "react";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from "../services/taskService";

function useTasks() {
  const [tasks, setTasks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  const [
    activeFilter,
    setActiveFilter,
  ] = useState("all");

  const fetchTasks =
    async () => {
      try {
        setLoading(true);

        const data =
          await getTasks({
            search,
            status,
            page,
          });

        setTasks(
          data.tasks || []
        );

        setTotalPages(
          data.totalPages || 1
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const createTaskHandler =
    async (taskData) => {
      try {
        const res =
          await createTask(
            taskData
          );

        setTasks((prev) => [
          res.task,
          ...prev,
        ]);
      } catch (error) {
        console.log(error);
      }
    };

  const updateTaskHandler =
    async (id, taskData) => {
      try {
        const res =
          await updateTask(
            id,
            taskData
          );

        setTasks((prev) =>
          prev.map((task) =>
            task._id === id
              ? res.task
              : task
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  const deleteTaskHandler =
    async (id) => {
      try {
        await deleteTask(id);

        setTasks((prev) =>
          prev.filter(
            (task) =>
              task._id !== id
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  const toggleTaskHandler =
    async (id) => {
      try {
        const res =
          await toggleTaskStatus(
            id
          );

        setTasks((prev) =>
          prev.map((task) =>
            task._id === id
              ? res.task
              : task
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  return {
    tasks,
    loading,

    search,
    setSearch,

    status,
    setStatus,

    page,
    setPage,

    totalPages,

    activeFilter,
    setActiveFilter,

    fetchTasks,

    createTaskHandler,
    updateTaskHandler,
    deleteTaskHandler,
    toggleTaskHandler,
  };
}

export default useTasks;