import { TaskType } from "@/@types/TaskType";
import { encryptData, decryptData } from "./encryption";

const TASKS_KEY = "tasks";

export function getTasks(): TaskType[] {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? decryptData(tasks) : [];
  }
  
  export function saveTasks(tasks: TaskType[]) {
    const encryptedTasks = encryptData(tasks);
    localStorage.setItem(TASKS_KEY, encryptedTasks);
  }
  
  export function addTask(task: TaskType) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
  }
  
  export function deleteTask(taskId: number) {
    let tasks = getTasks();
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(tasks);
  }
  
  export function toggleTaskCompletion(taskId: number) {
    const tasks = getTasks();
    const updatedTasks = tasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);
  }
