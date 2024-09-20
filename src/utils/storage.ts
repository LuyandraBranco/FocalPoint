import { encryptData, decryptData } from "./encryption";

const TASKS_KEY = "tasks";

export function getTasks() {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? decryptData(tasks) : [];
}

export function saveTasks(tasks: any) {
  const encryptedTasks = encryptData(tasks);
  localStorage.setItem(TASKS_KEY, encryptedTasks);
}

export function addTask(task: any) {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
}

export function deleteTask(taskId: number) {
  let tasks = getTasks();
  tasks = tasks.filter((task: any) => task.id !== taskId);
  saveTasks(tasks);
}

export function toggleTaskCompletion(taskId: number) {
  const tasks = getTasks();
  const updatedTasks = tasks.map((task: any) => 
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  saveTasks(updatedTasks);
}
